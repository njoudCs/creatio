﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLClassificationEntityPredictorSchema

	/// <exclude/>
	public class MLClassificationEntityPredictorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLClassificationEntityPredictorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLClassificationEntityPredictorSchema(MLClassificationEntityPredictorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a801449d-9c31-4f7c-9517-04f24b8b56df");
			Name = "MLClassificationEntityPredictor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("73704ec6-562c-4400-8a4a-17477a18625f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,87,219,110,227,54,16,125,246,2,251,15,132,251,226,0,134,188,5,246,41,177,5,52,201,38,48,96,119,141,218,233,75,81,20,180,52,74,216,149,72,149,164,188,235,26,254,247,14,73,201,186,90,113,10,4,8,16,137,154,11,207,153,195,225,152,211,4,84,74,3,32,27,144,146,42,17,105,239,78,240,136,61,103,146,106,38,184,183,92,124,252,112,248,248,97,144,41,198,159,201,122,175,52,36,55,141,119,116,137,99,8,140,189,242,30,129,131,100,65,203,102,193,248,63,229,226,157,144,80,127,243,30,104,160,133,100,160,202,245,234,166,208,98,37,69,0,74,213,119,216,101,189,92,120,115,174,65,70,136,172,51,92,205,192,251,13,57,192,173,91,83,52,158,76,38,100,170,178,36,161,114,239,231,239,119,49,85,138,69,44,176,57,9,75,210,24,18,224,218,189,138,8,29,0,72,32,33,154,13,231,203,197,23,174,153,222,175,36,132,204,128,26,78,124,66,121,216,48,58,125,62,108,190,102,250,136,70,94,145,125,210,72,111,28,105,172,68,238,188,92,220,82,5,141,36,135,5,83,250,112,14,99,29,0,34,206,98,125,60,14,201,228,76,138,14,16,206,246,143,123,136,40,58,223,50,30,34,169,35,189,79,65,68,163,182,253,213,152,252,138,242,34,51,178,92,96,197,148,110,110,2,203,185,69,22,55,24,224,234,207,222,200,167,152,83,131,113,218,133,197,247,223,156,47,205,182,49,11,72,96,140,140,79,205,184,1,134,92,147,78,210,251,54,132,41,14,86,80,131,159,36,60,27,157,216,109,201,204,56,170,107,178,178,249,157,69,83,115,118,97,206,153,102,52,102,255,130,34,148,112,248,78,24,250,83,142,199,21,21,167,95,160,42,168,87,0,24,9,90,164,222,41,221,164,153,111,154,82,73,19,194,145,197,217,48,83,32,113,191,220,157,235,161,191,193,116,102,141,4,167,69,111,58,177,30,54,64,206,230,43,219,24,61,213,194,146,122,150,43,164,121,139,36,143,154,203,166,3,13,142,57,153,192,67,199,103,157,92,44,111,10,82,99,3,185,54,207,26,125,33,116,38,105,241,74,118,76,234,140,198,72,164,38,183,84,7,47,27,150,128,200,244,26,2,50,243,201,207,159,63,127,250,116,211,83,146,71,208,202,50,159,58,49,17,35,82,194,66,108,5,8,25,100,31,187,59,26,103,112,122,221,92,20,164,244,41,49,136,29,158,113,180,38,143,25,11,73,69,213,243,208,96,48,58,49,95,70,23,28,131,155,126,74,151,160,95,68,216,230,179,147,154,188,198,138,184,102,107,72,82,41,4,6,81,104,144,254,216,147,239,76,191,16,248,161,37,37,86,56,72,37,253,6,156,68,82,36,78,92,154,170,111,151,42,212,198,116,194,180,143,53,57,182,172,19,17,66,236,172,237,99,191,117,72,53,117,198,140,167,153,38,230,189,223,35,117,240,145,54,35,241,13,226,24,250,79,5,36,135,188,52,169,145,208,142,43,65,103,146,43,63,167,20,249,147,182,167,160,101,241,233,140,36,206,183,163,162,62,166,159,174,65,238,88,0,43,91,20,203,221,24,15,238,210,208,226,238,86,71,209,216,36,25,12,238,221,158,177,14,83,236,94,88,219,49,17,219,191,49,177,111,105,49,174,247,248,127,213,34,128,180,57,201,143,242,192,193,200,235,150,239,119,63,114,133,177,251,152,231,157,238,105,30,142,109,26,163,213,83,15,232,23,160,35,75,145,8,251,182,145,225,51,219,161,200,182,230,184,155,198,41,33,16,50,188,184,17,190,93,56,15,66,150,100,12,253,87,100,99,69,188,92,16,229,138,114,137,150,223,81,107,198,225,77,98,235,185,0,79,146,59,175,173,185,117,63,175,48,39,177,26,161,99,210,173,96,23,240,127,104,113,71,101,229,235,202,53,166,153,237,163,38,150,2,61,183,61,224,80,224,65,28,184,203,109,102,7,94,180,140,112,110,2,114,180,2,29,180,168,176,163,165,225,212,61,204,242,2,231,177,218,212,89,51,255,220,89,112,40,59,72,113,246,229,202,23,30,166,2,175,185,113,11,219,184,121,243,185,163,53,232,168,36,206,165,136,220,39,194,254,55,88,11,28,158,251,164,42,174,125,74,40,142,228,172,8,229,221,209,126,151,209,149,183,17,230,251,40,223,94,222,50,242,72,213,110,208,33,205,157,192,171,113,77,119,245,121,13,194,223,205,125,170,58,5,233,174,83,176,246,39,162,123,250,105,90,196,116,11,85,53,149,35,210,47,242,57,151,82,101,246,195,197,204,252,120,24,53,135,172,49,249,171,49,249,220,156,98,70,44,198,97,30,131,217,221,184,31,75,123,252,181,165,167,110,48,173,67,124,176,214,254,168,182,147,74,180,180,78,72,33,247,242,28,214,24,26,247,220,43,126,142,123,112,40,120,108,16,67,142,246,123,126,60,74,129,154,234,72,239,124,141,218,130,54,86,235,224,5,18,106,46,133,83,165,154,96,242,210,57,194,188,175,124,141,194,73,235,209,95,191,76,204,190,138,73,175,217,24,223,229,226,40,224,56,7,247,86,157,9,47,185,16,10,202,139,161,168,53,61,84,198,245,158,51,83,114,254,158,7,165,75,9,149,204,142,50,83,222,115,83,65,135,0,242,12,213,234,54,102,91,92,197,191,255,0,97,41,173,177,248,16,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a801449d-9c31-4f7c-9517-04f24b8b56df"));
		}

		#endregion

	}

	#endregion

}
