namespace Terrasoft.Configuration.WorkplaceSectionAccess
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Core;
	using Core.Factories;
	using Common;
	using Section;
	using Terrasoft.Core.Configuration;
	using Workplace;
	using WorkplaceApi;

	#region Class: WorkplaceSectionAccessManager

	[DefaultBinding(typeof(IWorkplaceSectionAccessManager))]
	public class WorkplaceSectionAccessManager : IWorkplaceSectionAccessManager
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private ISectionRepository _sectionRepository;
		private IWorkplaceRepository _workplaceRepository;
		private IEnumerable<string> _excludedFromAdditionalUserSections;
		private int _additionalUserSectionsCount;
		private IReadOnlyCollection<WorkplaceType> _allowedWorkplaceTypes;

		#endregion

		#region Constructors: Public

		public WorkplaceSectionAccessManager(UserConnection userConnection) {
			_userConnection = userConnection;
			InitSectionRepository();
			InitWorkplaceRepository();
			InitExcludedFromAdditionalUserSectionsLimits();
			InitAllowedWorkplaceTypesLimits();
			InitAdditionalUserSectionsCountLimits();
		}

		#endregion

		#region Properties: Private

		private ILicManager _licManager;
		private ILicManager LicManager => _licManager ?? (_licManager = _userConnection.AppConnection.LicManager);

		private SysUserInfo _currentUser;
		private SysUserInfo CurrentUser => _currentUser ?? (_currentUser = _userConnection.CurrentUser);

		#endregion

		#region Methods: Private

		private void InitAllowedWorkplaceTypesLimits() {
			ICollection<string> allowedWorkplaceTypesCodes =
				LicManager.GetOperationValues(_userConnection.CurrentUser.Id, "AllowedWorkplaceTypes").ToList();
			_allowedWorkplaceTypes = allowedWorkplaceTypesCodes
				.Select(allowedWorkplaceTypeCode => ConvertToWorkPlaceType(int.Parse(allowedWorkplaceTypeCode)))
				.ToList();
		}

		private void InitAdditionalUserSectionsCountLimits() {
			_additionalUserSectionsCount = LicManager.FindOperationLimit(CurrentUser.Id, "AllowedSectionsCount") ?? 0;
		}

		private void InitWorkplaceRepository() {
			_workplaceRepository = ClassFactory.Get<IWorkplaceRepository>(
				new ConstructorArgument("uc", _userConnection));
		}

		private void InitSectionRepository() {
			_sectionRepository = ClassFactory.Get<ISectionRepository>(CurrentUser.ConnectionType.ToString(),
				new ConstructorArgument("uc", _userConnection));
		}

		private void InitExcludedFromAdditionalUserSectionsLimits() {
			_excludedFromAdditionalUserSections =
				LicManager.GetOperationValues(CurrentUser.Id, "ExcludedFromSectionsCountLimitation");
		}

		private static WorkplaceType ConvertToWorkPlaceType(int allowedWorkplaceType) {
			var workplaceType = (WorkplaceType)allowedWorkplaceType;
			if (!Enum.IsDefined(typeof(WorkplaceType), workplaceType)) {
				throw new ItemNotFoundException($"Workplace type {workplaceType} from LicManager not found");
			}
			return workplaceType;
		}

		private Dictionary<Guid, List<Section>> GetSectionsInWorkplaces() {
			var result = new Dictionary<Guid, List<Section>>();
			IEnumerable<Section> allSections = _sectionRepository.GetAll();
			allSections.ForEach(section => {
				section.WorkplacesIds.ForEach(workplaceId => {
					if (!result.ContainsKey(workplaceId)) {
						result[workplaceId] = new List<Section> { };
					}
					result[workplaceId].Add(section);
				});
			});
			return result;
		}

		private IEnumerable<AllowedWorkplaceStructureInfo> GetAllAllowedWorkplaceStructuresInternal(Guid userId) {
			IEnumerable<Workplace> allowedWorkplaces = GetAllAllowedWorkplacesInternal(userId);
			Dictionary<Guid, List<Section>> sections = GetSectionsInWorkplaces();
			var allowedWorkplacesStructures = new List<AllowedWorkplaceStructureInfo>();
			foreach (var workplace in allowedWorkplaces) {
				Guid workplaceId = workplace.Id;
				var allowedWorkplaceStructureInfo = new AllowedWorkplaceStructureInfo() {
					Workplace = workplace
				};
				if(sections.TryGetValue(workplaceId, out var workplaceSections)) {
					var sortedSectionIds = workplace.GetSectionIds().ToList();
					var sortedSections = workplaceSections
						.OrderBy(section => sortedSectionIds.IndexOf(section.Id)).ToList();
					FillWorkplaceSections(allowedWorkplaceStructureInfo, sortedSections);
				}
				allowedWorkplacesStructures.Add(allowedWorkplaceStructureInfo);
			}
			return allowedWorkplacesStructures;
		}

		private IEnumerable<Workplace> SortWorkplaces(IEnumerable<Workplace> workplaces) {
			return workplaces.OrderBy(workplace => workplace.Position);
		}

		private IEnumerable<Workplace> GetAllAllowedWorkplacesInternal(Guid userId) {
			ICollection<Workplace> allWorkplaces = _workplaceRepository.GetAll()
				.Where(workplace => workplace.GetIsAllowedForUser(userId)).ToList();
			if (!GetUserHasLimits()) {
				return SortWorkplaces(allWorkplaces);
			}
			return SortWorkplaces(allWorkplaces.Where(workplace => _allowedWorkplaceTypes.Contains(workplace.Type)))
				.Take(1);
		}

		private void FillWorkplaceSections(AllowedWorkplaceStructureInfo allowedWorkplaceStructureInfo,
				List<Section> sections) {
			var allowedSectionsIds = new List<Guid>();
			var allowedSections = new List<Section>();
			if (!GetUserHasLimits()) {
				allowedWorkplaceStructureInfo.AllowedSectionsIds.AddRange(sections.Select(section => section.Id));
				allowedWorkplaceStructureInfo.AllowedSections.AddRange(sections);
				return;
			}
			int sectionCounter = 0;
			foreach (Section section in sections) {
				if (_excludedFromAdditionalUserSections.Contains(section.Code)) {
					allowedSectionsIds.Add(section.Id);
					allowedSections.Add(section);
					continue;
				}
				if (sectionCounter < _additionalUserSectionsCount) {
					allowedSectionsIds.Add(section.Id);
					allowedSections.Add(section);
					sectionCounter++;
				}
			}
			int allowedSectionCount = _excludedFromAdditionalUserSections.Count() + _additionalUserSectionsCount;
			allowedWorkplaceStructureInfo.AllowedSectionsIds.AddRange(allowedSectionsIds
				.Take(allowedSectionCount));
			allowedWorkplaceStructureInfo.AllowedSections.AddRange(allowedSections.Take(allowedSectionCount));
		}

		private bool GetUserHasLimits() {
			return _excludedFromAdditionalUserSections.IsNotNullOrEmpty() || _additionalUserSectionsCount > 0
				|| _allowedWorkplaceTypes.IsNotNullOrEmpty();
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IWorkplaceSectionAccessManager.GetAllAllowedWorkplacesWithSections"/>
		public IEnumerable<AllowedWorkplaceStructureInfo> GetAllAllowedWorkplacesWithSections() {
			return GetAllAllowedWorkplaceStructuresInternal(_userConnection.CurrentUser.Id);
		}

		/// <inheritdoc cref="IWorkplaceSectionAccessManager.GetAllAllowedWorkplacesIds"/>
		public IEnumerable<Guid> GetAllAllowedWorkplacesIds() {
			return GetAllAllowedWorkplacesInternal(_userConnection.CurrentUser.Id).Select(workplace => workplace.Id);
		}

		/// <inheritdoc cref="IWorkplaceSectionAccessManager.GetAllowedWorkplacesForUser"/>
		public IEnumerable<AllowedWorkplaceStructureInfo> GetAllowedWorkplacesForUser(Guid userId) {
			return GetAllAllowedWorkplaceStructuresInternal(userId);
		}

		/// <inheritdoc cref="IWorkplaceSectionAccessManager.ClearCache"/>
		public void ClearCache()
		{
			_workplaceRepository.ClearCache();
			_sectionRepository.ClearCache();
		}

		#endregion

	}

	#endregion

}