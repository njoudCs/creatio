﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SecureActivityEmailSenderSchema

	/// <exclude/>
	public class SecureActivityEmailSenderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SecureActivityEmailSenderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SecureActivityEmailSenderSchema(SecureActivityEmailSenderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("5e1be500-be05-4b71-94d2-840b8b5e5966");
			Name = "SecureActivityEmailSender";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,86,75,111,227,54,16,62,123,129,253,15,132,246,80,185,112,101,244,86,228,225,109,227,117,178,57,100,27,36,78,11,52,73,1,70,30,91,236,74,164,65,142,156,184,69,254,123,135,164,36,75,178,228,228,18,71,163,121,124,243,205,75,146,103,96,214,60,6,54,7,173,185,81,75,140,166,74,46,197,42,215,28,133,146,31,63,252,247,241,195,32,55,66,174,216,237,214,32,100,199,213,115,221,68,67,151,252,138,139,52,186,5,185,0,125,220,114,19,205,225,5,163,27,88,229,41,215,179,151,181,6,99,40,158,233,115,31,125,57,235,125,53,147,40,80,64,143,109,150,41,73,111,232,221,39,13,43,138,193,166,41,55,230,136,221,66,156,107,248,45,70,177,17,184,157,101,4,214,99,117,202,227,241,152,157,152,60,203,184,222,78,218,207,236,6,44,98,144,104,24,38,192,140,179,99,177,117,204,212,210,201,212,211,63,16,227,15,134,89,199,140,120,54,124,5,134,61,139,56,33,209,150,37,124,99,13,9,3,69,103,168,190,131,164,0,0,44,214,176,60,13,74,92,193,120,18,157,140,219,64,234,130,117,254,148,138,184,8,222,155,20,59,98,29,210,51,110,128,92,216,34,87,244,92,107,181,6,109,9,61,178,255,35,101,1,11,199,201,30,41,78,240,167,210,223,41,45,76,90,217,68,165,130,144,6,185,164,38,43,152,169,101,121,91,88,204,173,193,29,138,212,21,146,114,246,233,84,49,235,249,14,214,37,40,214,109,222,35,246,89,14,86,128,199,132,20,109,183,12,94,15,228,229,104,98,79,106,177,245,217,105,88,167,52,42,139,86,118,125,216,12,106,219,138,206,203,153,117,210,31,254,19,213,194,147,95,60,151,141,74,3,129,58,143,81,105,67,245,187,118,133,238,64,124,41,41,65,158,138,127,129,73,120,126,147,239,174,246,168,40,111,54,155,143,179,230,154,103,76,210,178,56,13,192,218,76,83,65,189,127,206,45,178,109,48,153,237,100,108,233,133,21,8,242,231,204,187,189,229,6,52,101,41,137,50,74,56,152,220,25,59,70,149,160,219,75,209,240,189,185,132,151,179,61,144,108,31,247,136,221,53,162,179,38,152,161,43,215,17,123,162,17,9,187,172,91,234,69,125,123,90,242,212,85,166,251,101,216,242,180,107,141,67,205,113,5,152,168,197,59,103,244,198,247,110,177,102,28,149,128,64,93,133,234,96,59,239,21,12,105,109,7,19,187,188,217,115,210,88,101,109,215,205,146,85,99,177,17,26,115,158,150,227,81,0,187,174,204,230,202,145,19,22,239,109,188,146,218,66,180,230,72,138,146,40,253,53,120,184,127,248,28,222,255,253,240,248,248,227,240,225,243,195,99,224,184,27,108,184,38,96,24,39,142,121,186,50,240,66,199,200,61,135,214,227,168,116,50,220,233,211,62,207,83,36,117,171,224,197,75,186,46,156,114,12,157,173,247,72,45,89,186,46,113,57,115,151,254,37,93,54,151,138,13,235,180,162,11,173,242,181,185,255,249,49,250,131,167,57,28,183,44,72,175,187,41,162,41,197,70,240,100,212,111,230,76,198,106,65,60,68,119,243,243,95,162,11,192,179,45,218,180,154,241,135,69,102,131,70,90,81,65,119,232,177,57,68,35,15,164,208,127,117,127,53,96,78,12,123,219,189,69,41,100,2,4,120,161,98,54,110,85,87,109,232,242,138,5,176,141,18,118,61,99,57,158,83,149,230,153,116,1,77,232,14,54,141,164,251,41,89,180,115,22,245,89,20,170,30,163,88,178,176,90,171,209,165,249,166,240,91,158,166,191,235,89,182,198,109,56,172,234,226,173,172,211,154,179,48,176,159,37,95,185,73,130,17,243,122,131,50,166,101,223,88,78,157,123,171,19,22,26,131,230,174,24,149,226,50,4,95,194,69,35,204,201,23,91,61,145,193,36,12,236,90,178,143,193,240,29,118,190,203,201,106,46,48,173,155,84,41,143,186,49,69,211,92,107,242,107,165,145,141,252,151,146,48,172,215,245,141,115,179,219,40,125,135,166,20,216,132,24,252,84,255,178,137,222,187,65,10,125,186,26,13,251,131,103,66,152,175,152,165,193,228,60,229,180,18,18,142,52,133,11,17,19,165,244,65,149,16,108,186,26,78,92,56,99,207,212,159,104,207,17,77,107,66,166,140,70,153,122,254,240,49,18,43,73,3,127,35,86,9,154,55,98,41,230,149,153,118,218,93,231,169,61,10,114,225,155,246,170,128,88,64,29,209,23,134,74,153,207,176,124,168,1,41,155,185,164,217,125,74,156,246,239,205,186,94,81,251,221,39,200,41,171,191,62,174,207,29,193,171,16,53,226,31,248,80,241,210,186,240,245,127,185,143,72,50,82,12,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("5e1be500-be05-4b71-94d2-840b8b5e5966"));
		}

		#endregion

	}

	#endregion

}
