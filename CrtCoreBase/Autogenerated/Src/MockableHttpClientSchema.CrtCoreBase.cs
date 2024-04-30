﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MockableHttpClientSchema

	/// <exclude/>
	public class MockableHttpClientSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MockableHttpClientSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MockableHttpClientSchema(MockableHttpClientSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a4c8d470-5a40-4f57-ba8a-d7dab1ecd34d");
			Name = "MockableHttpClient";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("38f6a7a5-9008-4fcc-bf72-82ee9bfcb9ba");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,87,219,110,219,56,16,125,118,129,254,3,145,190,56,128,43,191,39,182,138,212,117,90,183,200,5,181,211,125,92,208,212,216,230,134,34,189,36,213,84,27,244,223,119,40,82,138,46,182,19,3,139,69,94,18,94,134,51,135,51,115,14,101,73,83,48,91,202,128,44,64,107,106,212,202,70,19,37,87,124,157,105,106,185,146,111,223,60,190,125,211,203,12,151,107,50,207,141,133,244,188,53,71,123,33,128,57,99,19,125,6,9,154,179,142,205,53,216,206,218,98,163,129,38,184,16,45,168,185,55,79,251,215,240,96,209,153,195,242,213,40,249,180,81,199,152,166,74,30,216,214,176,111,61,250,14,127,103,96,172,11,136,38,219,108,41,56,35,76,80,99,200,149,98,247,116,41,224,139,181,219,137,224,32,45,57,35,31,169,129,238,198,200,13,131,43,159,177,1,153,249,53,179,69,244,16,87,115,111,83,156,194,128,143,69,216,222,59,13,107,76,25,153,184,192,103,69,100,72,234,231,189,89,7,94,211,8,225,205,154,135,122,46,64,175,58,104,172,118,41,64,132,214,221,230,145,172,177,18,196,184,63,191,235,118,206,201,220,82,155,153,137,74,128,212,134,141,35,100,220,178,140,110,190,157,215,253,44,149,18,100,102,230,25,99,96,76,205,205,56,174,59,29,239,242,67,118,0,255,14,88,57,121,187,193,2,194,126,244,179,169,204,82,208,174,66,163,111,144,255,160,34,131,91,202,245,200,123,25,52,12,252,90,28,199,228,11,246,31,104,179,223,239,15,220,117,69,42,255,31,76,95,163,25,72,115,182,247,224,244,23,131,173,227,78,109,180,215,56,36,119,193,83,72,110,178,3,213,228,88,234,11,139,36,219,90,204,110,214,45,124,221,120,129,205,147,9,75,62,131,245,163,81,88,137,251,167,196,55,83,79,131,205,180,36,142,111,209,39,48,200,113,42,248,63,240,100,89,54,216,135,15,161,114,209,20,131,231,3,34,51,33,78,125,139,20,16,67,240,119,32,19,207,128,38,29,46,57,136,228,140,220,106,254,147,218,146,3,126,66,156,92,40,41,242,29,188,34,127,226,166,240,227,243,195,17,16,41,34,204,152,85,26,121,119,91,228,192,91,12,135,67,50,50,89,154,82,157,199,229,194,76,114,235,47,107,8,37,18,30,48,185,198,82,137,146,169,86,196,110,0,143,0,16,166,97,53,62,233,202,196,201,48,246,228,141,170,8,195,118,136,209,150,106,154,18,137,90,60,62,201,48,185,8,81,122,69,61,137,239,112,78,88,181,16,141,134,133,117,92,19,135,110,212,254,93,195,11,105,58,61,45,170,113,70,150,200,169,126,107,43,20,188,150,206,64,249,70,186,47,169,75,95,142,114,111,103,33,27,151,90,165,159,102,125,95,234,103,138,124,5,118,163,18,179,167,204,69,151,47,116,238,174,85,234,90,191,75,48,22,68,87,33,17,26,26,136,125,226,7,229,101,66,243,182,93,150,14,252,255,200,131,138,22,106,94,244,111,255,180,218,185,211,34,186,88,26,37,50,139,170,98,55,62,102,21,229,200,27,43,139,169,134,164,188,115,152,18,245,19,95,41,142,210,24,132,175,96,99,113,223,143,42,201,119,220,95,251,89,235,146,142,161,104,128,206,108,52,47,105,122,179,252,11,131,244,195,137,200,57,108,160,222,129,162,153,209,9,182,131,133,70,49,106,98,110,170,225,160,68,239,151,80,41,152,230,133,168,13,10,144,97,151,121,177,168,172,195,124,145,111,159,60,32,14,165,175,240,13,161,235,118,33,29,9,119,60,133,65,170,234,175,76,29,154,223,109,188,39,227,125,56,123,165,156,141,75,108,78,216,234,144,188,160,29,87,250,125,82,51,253,5,12,91,203,148,37,37,15,220,110,200,215,249,205,245,251,74,105,19,164,69,146,71,77,241,40,95,191,70,26,230,136,227,15,116,224,58,97,79,235,248,190,46,179,202,87,164,191,143,27,7,200,213,126,27,202,141,154,214,151,91,53,53,137,58,240,2,152,122,42,95,154,157,123,46,147,178,64,255,105,106,218,157,249,170,82,53,168,80,29,153,179,149,210,233,123,144,12,217,144,144,226,21,49,71,119,213,37,250,152,122,23,129,35,175,180,191,118,0,61,182,211,94,154,151,87,152,129,103,239,90,46,84,119,166,38,151,236,57,142,237,254,134,9,137,241,30,220,111,185,81,243,135,80,135,119,23,206,242,197,228,11,146,124,81,124,160,180,93,51,42,196,146,178,123,84,234,226,75,243,127,203,56,125,160,220,30,164,171,191,101,139,179,131,10,241,161,239,6,92,253,77,254,5,241,30,38,132,156,15,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a4c8d470-5a40-4f57-ba8a-d7dab1ecd34d"));
		}

		#endregion

	}

	#endregion

}
