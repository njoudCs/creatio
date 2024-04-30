﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AppFeatureStateEventListenerSchema

	/// <exclude/>
	public class AppFeatureStateEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AppFeatureStateEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AppFeatureStateEventListenerSchema(AppFeatureStateEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8aaeacfe-0d94-4cc4-8fc0-da41670bb75b");
			Name = "AppFeatureStateEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f56dd55e-5084-4296-932e-a32f081a1593");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,87,203,110,219,70,20,93,43,64,254,97,162,108,40,64,32,218,109,108,165,176,101,59,48,90,39,46,228,116,83,116,49,34,47,229,105,201,25,97,102,168,86,72,242,239,189,243,32,57,164,72,202,101,11,116,99,243,113,238,185,239,195,17,167,5,168,61,77,128,60,129,148,84,137,76,199,87,251,253,29,80,93,74,80,175,95,125,121,253,106,86,42,198,119,100,115,84,26,138,139,206,125,188,22,121,14,137,102,130,171,248,3,112,144,44,25,197,124,218,254,142,151,15,34,133,188,193,173,37,58,100,34,246,126,159,196,110,151,227,243,6,208,68,183,22,69,33,120,255,27,158,177,93,41,13,211,0,64,194,208,243,151,89,199,183,92,51,205,64,157,5,196,183,7,224,218,224,16,249,86,194,14,89,201,58,167,74,189,35,77,129,55,154,106,176,200,159,24,86,10,171,103,241,191,90,150,99,235,69,180,73,158,161,160,31,177,97,100,69,230,29,142,249,226,55,180,99,92,131,228,52,39,137,113,52,234,135,188,35,215,84,65,143,35,228,249,98,163,168,195,126,0,253,44,82,12,252,81,178,3,18,185,183,123,119,67,20,114,179,132,56,38,215,73,184,74,11,198,63,115,166,91,254,45,34,250,172,64,98,177,185,27,8,82,182,110,23,196,12,220,108,230,176,46,101,162,220,191,85,7,27,135,160,7,202,233,14,36,142,160,190,231,24,18,79,224,250,104,138,21,205,123,131,153,47,46,172,35,9,248,136,123,23,177,139,222,7,218,137,204,226,191,157,207,221,123,153,156,109,230,163,252,119,73,251,40,58,105,182,184,167,102,171,180,52,131,127,199,120,234,189,88,151,163,153,46,201,135,146,165,149,255,251,180,202,252,134,217,215,84,30,47,29,173,3,190,39,9,197,24,49,251,102,134,127,46,65,30,111,255,130,164,212,194,166,108,188,62,137,251,244,129,238,123,163,159,101,184,144,72,67,162,31,225,248,11,205,75,120,164,76,118,252,252,17,188,34,140,59,191,85,116,51,150,145,40,68,196,246,138,172,86,167,153,212,53,110,225,209,179,139,197,212,178,254,235,145,188,204,243,176,206,111,129,167,110,229,134,246,175,220,230,44,241,77,177,215,68,28,80,127,88,10,228,32,176,190,159,248,13,228,160,49,191,72,88,157,37,10,57,65,46,253,136,94,131,169,137,93,247,43,185,83,164,206,116,139,90,16,7,214,149,25,248,82,30,168,36,180,45,39,216,156,200,177,46,28,218,33,71,199,0,109,58,44,113,27,239,56,76,217,187,184,13,118,29,35,243,174,87,196,223,187,207,137,131,124,132,63,201,215,175,190,27,19,236,109,246,208,116,212,181,233,34,104,156,95,244,44,92,113,204,233,188,232,245,206,167,73,179,69,133,223,63,157,60,223,73,81,220,92,159,20,0,197,183,192,61,193,111,105,89,112,59,97,139,58,210,54,139,203,35,90,4,145,127,27,29,154,13,61,76,30,25,111,251,255,14,140,239,4,29,238,192,244,46,153,76,234,109,239,137,7,149,232,233,184,135,52,104,204,165,213,150,90,132,239,211,74,134,71,231,167,253,225,24,156,152,55,195,35,211,136,82,61,25,94,172,179,70,168,209,95,87,186,187,90,221,240,120,241,218,10,145,147,20,178,170,143,213,249,208,126,121,212,45,167,219,28,210,40,112,178,180,226,86,153,183,35,222,128,190,129,44,40,151,138,250,129,167,19,79,2,225,29,226,14,224,209,124,141,231,204,249,50,76,127,48,166,150,157,65,78,177,195,196,104,153,59,61,65,251,186,100,63,144,239,241,196,245,221,0,9,61,180,183,245,63,17,192,55,35,219,48,89,104,204,50,228,254,160,168,176,27,28,61,54,167,251,203,71,41,18,80,202,157,47,170,3,229,251,186,189,167,158,44,220,84,17,47,247,32,245,209,215,177,151,72,97,69,107,231,53,231,72,150,35,147,54,102,214,59,119,231,171,20,54,240,76,84,173,153,105,84,226,116,243,76,189,149,95,186,151,8,143,89,212,70,120,90,39,221,9,33,85,99,172,122,102,216,10,124,69,249,79,133,241,170,49,156,18,30,254,172,12,25,150,97,32,47,161,107,246,173,255,228,229,158,182,31,226,179,191,1,188,134,151,129,45,15,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8aaeacfe-0d94-4cc4-8fc0-da41670bb75b"));
		}

		#endregion

	}

	#endregion

}
