﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MacrosHelperServiceSchema

	/// <exclude/>
	public class MacrosHelperServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MacrosHelperServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MacrosHelperServiceSchema(MacrosHelperServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f11c38bc-163a-4783-b903-5b016339927b");
			Name = "MacrosHelperService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d9c4378b-4458-41ff-9d84-e4b071fcce18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,213,25,219,110,219,54,244,217,5,250,15,132,246,34,3,134,3,236,49,137,93,180,169,211,121,75,154,32,73,155,135,96,24,104,233,216,225,70,93,70,82,105,221,32,255,190,195,139,36,202,150,229,203,134,162,123,138,121,120,238,119,42,41,77,64,230,52,2,114,7,66,80,153,205,213,240,44,75,231,108,81,8,170,88,150,190,126,245,252,250,85,175,144,44,93,144,219,165,84,144,156,172,156,135,183,32,158,88,4,151,89,12,188,243,114,120,15,179,110,132,183,145,98,79,70,238,26,222,77,145,42,150,128,198,103,148,179,111,237,88,103,25,231,16,233,43,57,252,0,41,226,70,53,142,111,98,146,248,212,254,141,128,77,240,225,4,85,80,12,100,59,130,231,181,225,39,197,120,43,26,186,160,67,122,125,91,250,229,38,43,20,226,32,50,162,255,36,96,129,220,201,25,167,82,30,147,75,26,137,76,254,2,60,7,225,208,13,218,131,59,160,74,74,208,72,253,174,97,239,97,78,11,174,60,182,96,224,183,50,95,131,189,149,249,71,80,168,72,142,214,204,24,103,106,121,3,127,23,76,64,2,169,146,161,127,208,129,35,35,178,133,68,99,13,29,32,238,107,33,121,49,227,44,34,145,54,165,205,18,114,76,222,81,9,149,93,189,103,99,91,229,131,115,6,60,70,39,92,11,157,49,214,240,222,209,209,17,57,149,69,146,80,177,28,151,128,105,42,21,77,145,99,54,199,75,0,18,9,152,143,2,95,230,231,159,131,163,49,81,203,28,134,21,155,35,159,79,110,165,16,1,52,206,82,190,36,77,106,242,71,226,157,79,156,166,144,198,86,217,166,230,24,22,169,68,17,169,76,104,253,141,31,58,212,63,67,153,10,36,97,219,205,112,206,218,102,139,245,124,11,97,216,39,186,218,123,189,134,57,24,221,20,190,144,15,60,155,81,238,83,133,125,157,195,189,151,239,169,188,129,228,84,208,132,164,216,187,70,129,175,105,48,182,12,201,163,57,14,79,143,12,102,59,97,33,65,96,40,82,219,46,130,241,39,60,147,168,2,52,136,59,92,182,146,8,190,58,3,242,169,33,131,52,69,110,114,246,74,42,33,198,10,155,209,10,35,63,10,155,146,238,90,100,200,78,55,175,221,74,6,251,156,238,178,24,58,29,251,77,225,187,160,233,66,119,25,44,241,115,170,19,122,137,225,235,174,160,22,26,172,30,190,6,60,241,253,222,66,211,6,179,254,92,128,34,163,113,43,83,242,230,13,9,91,47,108,142,183,48,13,155,206,239,219,156,239,201,14,33,35,242,68,121,1,117,88,186,2,115,9,234,49,179,141,44,83,40,3,98,123,255,112,53,147,25,7,5,97,96,81,8,147,36,134,92,64,132,110,140,7,58,7,76,92,176,35,173,116,35,156,124,202,66,222,138,69,97,250,239,48,48,77,23,163,224,132,144,39,38,84,65,57,121,207,140,93,24,166,211,15,5,67,190,87,179,63,17,99,76,214,153,132,216,182,244,188,2,61,6,151,31,177,138,6,68,211,96,87,140,50,17,79,227,129,113,77,239,130,73,117,106,105,167,233,60,27,187,140,214,191,101,153,244,2,84,33,210,102,223,108,209,59,244,101,85,98,26,12,253,236,255,55,78,155,202,179,66,8,148,167,3,110,239,38,95,209,146,14,223,205,178,140,147,141,116,225,193,126,216,204,114,147,225,173,85,140,238,148,4,181,142,64,74,212,26,247,163,156,163,27,118,237,172,37,254,187,44,94,6,227,59,119,66,163,227,101,119,103,45,9,111,11,147,74,30,173,180,144,110,114,27,242,219,232,17,18,170,3,31,140,205,222,181,36,210,128,12,214,46,28,166,113,69,105,51,135,176,88,223,204,217,182,209,160,107,186,160,11,208,28,46,220,239,78,98,27,69,57,190,94,115,54,254,248,138,246,118,142,188,27,92,193,113,39,208,163,239,244,168,100,213,204,184,14,42,29,230,242,247,61,83,143,55,128,130,35,136,13,9,106,83,86,173,31,78,91,168,43,23,46,92,3,210,40,243,58,14,174,216,75,231,186,99,237,43,236,123,177,93,50,67,125,211,47,83,188,75,119,81,254,112,253,119,51,170,91,54,122,101,57,96,195,141,33,174,199,26,129,117,16,50,45,56,183,116,170,154,15,61,54,215,67,192,31,186,216,37,214,215,27,178,88,3,149,38,89,30,181,233,88,177,31,51,53,73,114,181,12,251,53,82,175,93,167,202,208,22,43,158,201,133,239,80,207,187,47,39,142,235,139,251,91,250,110,120,135,98,170,18,27,181,168,173,27,171,143,20,54,114,97,61,208,149,250,85,168,215,13,233,159,172,170,225,242,231,48,77,170,228,251,207,148,137,116,37,162,18,184,106,131,219,200,209,119,4,56,102,219,243,22,23,174,141,165,125,188,87,85,200,46,46,218,77,210,102,239,116,10,91,113,65,157,60,47,4,231,97,244,72,194,201,215,8,114,179,84,66,149,182,21,131,250,114,68,74,250,22,238,115,138,46,181,215,47,254,76,43,81,119,89,79,235,45,104,219,115,232,198,246,199,102,131,37,95,30,65,128,155,175,88,69,194,245,64,50,91,18,245,8,76,216,141,76,238,58,250,4,190,84,65,226,228,42,31,163,14,176,185,243,87,29,13,95,16,138,226,138,161,205,199,86,104,213,195,181,185,154,190,205,22,255,112,133,113,55,223,12,252,215,122,239,225,30,102,211,244,41,251,11,31,24,118,145,25,145,224,250,234,246,46,192,71,133,96,94,2,5,38,103,236,17,47,117,78,222,170,37,215,87,200,227,18,67,132,237,163,130,14,239,5,205,115,112,155,218,141,181,234,60,19,9,85,13,2,11,26,254,42,179,116,64,74,219,186,241,220,146,180,241,165,228,207,171,42,193,91,241,140,82,165,203,203,180,124,162,194,248,210,51,189,12,138,95,50,186,19,99,207,191,18,174,25,147,55,110,156,13,13,128,28,183,82,157,248,121,187,109,158,250,90,12,26,220,7,21,243,73,99,109,245,97,101,165,118,45,110,101,142,39,152,64,140,51,61,2,248,143,159,240,13,109,191,99,246,95,106,185,229,212,244,163,250,191,41,135,141,22,236,81,31,83,247,8,253,141,41,19,18,247,115,212,246,166,213,115,166,70,15,219,146,54,152,36,148,241,202,147,110,186,184,117,26,252,59,20,81,203,243,56,135,117,161,89,68,61,186,219,107,97,117,19,213,241,209,51,199,23,99,102,227,18,99,117,150,241,34,73,63,235,244,62,181,116,227,48,48,111,148,118,102,110,118,238,199,175,124,186,56,150,122,219,107,126,7,208,228,83,121,14,20,147,25,38,41,157,113,136,195,0,113,220,3,54,142,153,121,86,243,107,93,62,248,34,21,50,232,123,35,118,199,78,227,47,26,107,203,64,75,220,170,29,160,233,230,193,14,182,235,157,29,45,175,215,207,160,252,214,241,178,95,119,220,87,231,238,6,185,178,49,88,232,10,112,251,119,113,87,52,246,243,248,123,170,168,223,111,182,125,138,174,136,123,207,27,91,182,171,12,239,145,216,222,121,141,240,75,72,102,32,66,109,189,238,97,213,115,181,209,51,204,235,170,116,73,253,105,171,250,252,180,117,138,56,149,116,131,223,87,23,243,236,110,104,227,138,170,14,219,33,26,221,173,78,131,221,245,242,135,110,171,102,141,13,254,32,221,28,237,65,33,84,85,143,107,9,98,221,0,59,20,59,60,179,109,49,30,154,218,110,10,29,147,198,63,176,214,152,119,164,254,143,28,213,178,249,31,166,158,108,62,215,90,53,92,125,210,237,21,97,132,252,3,38,108,107,15,130,29,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f11c38bc-163a-4783-b903-5b016339927b"));
		}

		#endregion

	}

	#endregion

}
