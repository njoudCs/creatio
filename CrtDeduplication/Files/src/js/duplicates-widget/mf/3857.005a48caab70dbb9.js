(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[3857,3522],{23522:(l,d,c)=>{c.r(d),c.d(d,{SchemaData:()=>u,SchemaDataConverterService:()=>o,SchemaDataDesignerApiModule:()=>i,SchemaDataDesignerApiService:()=>a,SchemaDataInstallType:()=>s});var m=c(31134),n=c(98956),r=c(94450);class a extends n.BaseDesignerApiService{constructor(t){super(t)}getBoundSchemaData(t){const p=this.serviceEndpoint+"GetBoundSchemaData";return this.httpClient.post(p,{uId:t})}}a.\u0275fac=function(t){return new(t||a)(r.\u0275\u0275inject(r.Injector))},a.\u0275prov=r.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac});var s;(function(e){e[e.Install=0]="Install",e[e.FirstInstall=1]="FirstInstall",e[e.Update=2]="Update"})(s||(s={}));class u extends n.BaseDesignItem{constructor(){super(...arguments),this.entitySchemaName="",this.installType=s.Install}get DefaultName(){return"SchemaData"}findChildrenItem(t){throw new Error("Method not implemented.")}findGroup(t){throw new Error("Method not implemented.")}}class o extends n.BaseSchemaConverterService{constructor(){super(u)}convertToSchema(t){return super.createSchema(t)}}o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac});class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=r.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=r.\u0275\u0275defineInjector({providers:[{provide:n.SCHEMA_DESIGNER_CONVERTER,useClass:o},a,(0,n.getSchemaDesignerApiUrlProvider)("SchemaDataDesignerService.svc")],imports:[m.CommonModule,n.SchemaDesignerApiModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&r.\u0275\u0275setNgModuleScope(i,{imports:[m.CommonModule,n.SchemaDesignerApiModule]})}()}}]);
