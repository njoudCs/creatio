﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CalendarUtilsSchema

	/// <exclude/>
	public class CalendarUtilsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CalendarUtilsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CalendarUtilsSchema(CalendarUtilsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("87e4846c-42e3-4483-baaf-bea01429675a");
			Name = "CalendarUtils";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e9cdff4a-a92d-4d26-906f-df90167f5485");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,26,91,111,219,182,250,217,5,250,31,184,4,24,100,76,80,214,189,12,72,147,12,93,210,13,6,218,166,231,36,91,31,134,97,80,44,38,209,38,75,14,37,181,245,10,255,247,125,188,95,37,75,78,156,211,29,52,15,177,68,126,55,146,223,93,108,235,188,188,65,23,171,186,193,139,231,79,159,180,198,107,114,90,21,5,158,55,121,85,214,201,207,184,196,36,159,187,32,175,242,242,78,141,93,98,66,210,186,186,110,0,115,177,168,202,224,4,193,29,195,201,203,178,201,155,28,215,48,255,244,73,153,46,112,189,76,231,216,130,42,175,243,155,150,164,84,164,167,79,62,81,184,201,62,193,55,240,138,102,101,131,201,53,32,28,162,25,163,180,58,191,250,19,164,103,64,7,7,7,232,168,110,23,139,148,172,78,196,251,190,252,211,79,214,27,162,143,137,11,44,32,188,129,208,67,144,5,50,222,36,245,163,3,67,182,101,123,85,228,115,148,203,245,184,203,153,192,186,39,106,217,111,73,181,196,132,110,219,33,122,203,48,217,130,189,21,123,171,144,82,168,101,250,146,76,126,110,243,12,205,50,244,9,221,224,230,57,170,233,191,53,167,191,143,203,140,139,32,222,133,60,175,113,115,91,101,131,133,137,109,153,220,157,50,68,212,59,22,16,148,141,44,83,146,46,16,85,156,227,61,204,182,108,239,36,116,50,71,7,12,82,35,18,220,180,164,172,79,2,252,92,153,142,14,36,48,197,230,7,131,126,202,139,130,63,70,98,132,179,159,62,247,247,106,194,247,207,217,62,185,123,167,69,90,195,222,157,165,171,89,121,154,22,0,148,146,123,171,177,189,160,160,206,253,118,1,198,157,22,249,223,233,85,129,127,215,74,56,167,242,132,196,249,245,59,4,118,118,90,84,37,166,40,113,72,73,77,181,0,211,173,27,210,206,155,138,56,186,33,56,5,121,68,83,80,189,245,0,56,177,237,153,57,201,199,128,2,197,158,128,22,31,135,230,193,177,53,151,171,37,206,192,217,181,139,242,215,180,104,241,17,213,251,147,104,111,150,237,209,35,4,108,137,179,13,21,141,43,169,157,165,13,30,65,135,130,95,230,11,12,180,232,163,166,178,162,160,219,136,164,80,13,90,231,215,239,48,254,107,75,106,18,89,210,155,213,130,5,29,6,50,35,136,94,85,85,161,69,252,99,86,11,18,158,168,111,218,197,21,38,35,40,131,71,53,165,253,131,19,16,116,135,104,153,53,250,242,99,3,191,56,3,75,200,66,227,83,38,237,33,106,110,243,58,10,66,36,103,61,234,90,203,113,0,98,226,123,11,149,84,52,40,131,51,87,211,229,164,183,12,26,182,135,233,112,197,98,7,123,66,199,224,208,52,140,137,97,155,99,152,245,83,150,54,199,30,238,177,8,52,108,13,218,150,183,102,165,124,252,48,118,202,220,71,50,140,205,192,162,150,200,254,122,249,82,179,70,158,91,24,197,124,196,42,193,212,145,235,40,182,94,168,90,107,140,148,20,97,109,21,207,253,178,137,157,240,236,123,119,73,86,72,70,253,216,151,82,89,153,145,157,106,216,153,144,88,91,197,92,37,98,121,65,36,125,25,135,67,37,254,208,145,73,112,48,30,162,103,89,204,223,172,144,171,95,196,172,8,161,244,71,141,232,112,168,158,245,156,17,222,140,55,49,31,8,87,238,144,75,73,69,31,103,68,81,12,248,111,127,144,1,175,77,151,61,212,5,187,105,93,232,164,239,149,44,155,196,55,102,204,6,219,160,94,108,74,148,133,10,228,215,40,162,71,154,176,227,253,234,88,185,225,228,117,206,131,56,155,145,224,19,142,157,92,224,198,136,243,34,75,138,145,162,36,50,135,53,194,69,141,135,225,150,109,81,72,52,246,191,19,92,102,82,177,214,58,129,216,141,162,210,165,216,84,198,126,52,35,141,140,13,123,232,71,98,192,10,72,24,34,135,237,202,19,6,21,40,239,42,242,23,84,240,244,104,88,221,253,62,45,30,160,76,233,24,218,162,98,233,148,143,215,45,247,172,85,122,168,7,42,150,62,104,97,5,31,124,144,64,245,210,9,53,172,134,177,124,239,246,4,29,50,146,250,79,164,90,140,38,105,84,54,20,95,210,186,172,238,67,233,178,82,85,8,228,199,31,71,147,226,101,2,195,181,107,131,127,89,54,237,22,253,155,115,66,75,61,198,165,75,225,117,13,204,177,153,238,140,78,5,183,102,7,234,53,62,203,222,158,47,205,69,185,38,238,52,195,11,167,0,222,216,131,231,9,251,86,236,127,156,60,97,80,180,235,14,191,150,255,138,93,205,239,71,103,126,42,102,42,219,15,8,110,40,6,85,219,16,159,153,151,137,185,126,140,137,210,3,227,116,176,99,177,57,70,135,106,26,223,208,247,13,31,19,35,103,18,121,255,237,210,201,96,121,136,172,73,228,41,150,71,60,40,96,40,75,232,110,99,234,246,205,83,167,163,62,174,85,169,233,108,106,86,26,144,161,118,101,204,11,195,220,238,230,248,253,32,89,76,228,129,182,143,29,227,5,23,167,111,180,171,136,246,88,245,114,103,177,220,31,157,70,134,68,177,119,161,253,220,224,197,7,217,165,36,249,75,147,23,245,208,156,89,27,134,253,129,98,179,230,59,236,70,234,187,133,29,253,82,99,2,40,37,255,48,136,90,235,85,170,171,3,116,236,128,141,214,65,82,53,128,41,92,215,100,41,95,145,195,199,121,221,42,222,146,252,61,36,10,146,17,123,17,218,112,49,191,197,139,244,63,45,38,43,244,34,203,94,20,133,165,30,220,177,215,145,15,140,235,59,21,185,234,187,132,227,114,0,137,36,195,4,159,230,163,70,169,152,88,189,234,0,24,205,98,19,175,87,46,67,73,125,103,245,184,197,170,88,218,7,25,240,219,148,64,176,209,1,48,98,19,115,29,16,133,236,239,83,66,73,193,105,210,86,142,183,76,71,51,18,19,224,117,90,166,55,24,124,156,42,99,59,150,194,101,145,147,86,240,7,190,20,24,4,22,169,129,205,47,54,37,14,68,82,218,78,160,85,61,175,254,127,16,163,125,149,14,151,133,150,56,28,231,144,237,88,242,114,177,180,227,178,173,37,116,71,141,54,207,12,228,35,17,84,156,237,2,19,90,171,114,234,134,176,117,172,83,211,76,245,179,124,140,252,166,172,8,206,0,65,30,8,239,182,253,246,187,34,86,207,50,94,90,214,176,89,6,7,200,59,232,135,252,8,142,245,248,4,69,28,111,154,103,211,228,178,122,65,72,186,146,250,247,32,71,108,89,133,113,206,64,181,199,108,168,145,104,149,248,111,245,225,180,106,33,115,62,70,207,130,138,34,209,147,51,188,108,110,247,166,201,57,201,48,249,113,117,134,235,121,244,109,151,157,208,175,103,22,228,51,3,18,178,78,40,14,107,138,65,165,73,78,9,6,4,62,250,46,111,110,223,210,220,22,83,144,136,15,158,86,11,200,119,243,186,42,153,249,189,188,107,211,194,84,241,56,112,48,211,29,48,244,220,132,104,66,130,38,58,221,201,136,42,216,116,106,156,118,166,56,234,219,30,93,199,239,194,81,161,99,244,170,186,201,97,157,231,224,173,217,197,140,139,134,228,243,6,118,89,112,9,113,216,122,201,179,250,13,216,48,91,51,61,203,93,176,208,187,202,58,129,153,234,34,118,156,92,136,185,0,165,253,76,109,182,210,3,161,175,191,54,140,57,121,81,130,249,233,150,230,3,232,197,155,170,145,139,160,5,14,39,60,49,88,74,119,96,121,3,165,22,107,39,118,104,151,107,28,189,237,9,166,201,69,94,222,20,248,156,156,225,235,180,45,154,104,80,231,100,251,42,215,106,127,163,254,60,210,171,99,233,137,241,42,182,191,96,181,152,4,235,213,186,1,149,231,37,126,192,216,44,183,110,70,209,204,251,138,16,1,137,169,82,181,68,81,178,2,153,135,118,140,190,69,63,160,239,209,161,59,181,197,23,133,224,167,162,109,186,4,87,105,141,141,250,218,191,130,179,177,77,208,37,65,240,8,252,64,105,4,96,80,246,211,219,52,47,121,74,99,75,230,124,158,10,97,217,8,113,48,89,114,136,78,119,186,245,30,148,105,3,157,221,116,100,205,160,157,30,165,137,190,116,246,106,207,232,3,5,100,236,34,249,63,209,142,152,167,199,238,18,76,43,150,193,157,209,16,49,243,85,94,55,130,209,39,155,224,90,135,4,151,40,13,12,58,181,84,161,192,162,207,130,129,39,205,115,17,232,169,168,37,254,232,105,39,72,21,210,217,46,58,31,110,243,2,163,40,72,41,44,99,64,200,16,182,100,48,25,33,100,31,157,181,31,168,44,65,198,26,161,89,80,187,87,18,145,9,198,254,134,154,143,145,129,219,170,223,221,171,149,175,189,118,229,56,251,189,19,23,189,23,91,231,1,65,161,212,242,145,181,116,13,211,41,162,105,167,125,65,83,215,73,116,13,16,234,54,149,71,52,188,102,161,207,236,125,69,18,226,201,214,151,90,105,67,173,244,255,89,0,185,250,242,144,92,195,53,200,151,92,127,244,87,207,81,73,251,238,156,169,44,6,6,163,60,138,7,53,41,110,112,163,70,187,233,129,59,77,142,19,213,223,45,120,204,246,250,92,22,47,198,194,108,91,105,67,1,10,195,174,58,211,26,199,187,4,164,12,136,146,233,184,192,99,214,82,250,6,144,83,77,221,71,111,191,232,240,56,29,222,168,207,93,183,171,109,61,147,19,255,2,69,23,149,190,190,237,63,230,118,63,69,206,107,208,120,141,206,159,2,246,96,4,32,137,49,202,68,66,214,225,221,214,52,62,95,2,205,24,125,165,121,141,52,35,228,61,110,211,102,216,149,45,61,134,97,244,101,199,166,150,114,53,60,49,82,229,122,131,222,243,67,31,161,233,215,21,97,205,39,148,179,244,17,126,142,142,209,247,240,251,205,55,74,135,86,57,46,50,164,251,36,50,109,183,147,244,128,5,172,71,251,87,207,85,116,104,9,114,207,246,51,209,158,107,82,45,206,148,55,30,220,41,105,42,3,105,32,206,99,123,240,49,218,106,248,203,77,26,171,61,181,220,59,174,196,106,152,239,77,28,104,229,116,42,181,232,99,72,130,252,58,49,232,53,39,101,223,33,118,149,219,76,166,44,57,149,120,190,158,79,228,28,200,161,152,66,70,207,150,255,236,225,140,193,124,254,98,24,159,139,97,152,207,27,141,164,35,166,122,86,51,48,207,177,77,69,171,232,103,96,61,106,5,159,143,21,121,26,108,119,158,249,243,240,175,72,246,69,194,1,31,148,66,6,59,42,9,240,47,50,215,188,121,237,8,243,160,87,54,2,92,157,219,27,125,215,89,204,6,135,110,123,220,163,211,99,244,203,98,111,221,222,197,151,33,13,141,145,151,44,215,255,0,80,40,187,198,52,65,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("87e4846c-42e3-4483-baaf-bea01429675a"));
		}

		#endregion

	}

	#endregion

}
