(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[5774,7495],{7495:(R,f,o)=>{o.r(f),o.d(f,{BindingType:()=>u,CrtInterfaceDesignerCommand:()=>y,CrtInterfaceDesignerItem:()=>h,CrtInterfaceDesignerModule:()=>M,DataSourceType:()=>c,InterfaceDesignerCommandRegistry:()=>r,ViewElementGroupType:()=>s,ViewModelAttributeType:()=>m,getInterfaceDesignerCommandConfig:()=>l,interfaceDesignerCommandRegistryKey:()=>C,moduleBootstrapperMetadataKey:()=>p});var w=o(90093);const d="interfaceDesignerCommand";function l(e){const t=Reflect.getOwnMetadata(d,e);if(!t)throw new Error(`Interface designer command metadata was not found on '${e.name}' class`);return t}function y(e){return function(t){Reflect.defineMetadata(d,e,t)}}var i=o(75378);const C="interfaceDesignerCommands";class r extends i.\u0275BaseRegistry{static _has(t,a){return r.items.has(t)&&r.items.get(t)?.typeRef!==a}static validate(t){if((0,i.\u0275checkTypeNameFormat)(t.type,"InterfaceDesignerCommandTypeName"),r._has(t.type,t.typeRef))throw new Error(`Error when register ${t.type}. Element with this type has already exist`)}static get items(){return this.store.typeInfos}static register(t){this.items.set(t.type,t)}}r.registryKey=C;var c;(function(e){e.EntityDataSource="crt.EntityDataSource",e.WebServiceDataSource="crt.WebServiceDataSource",e.PageParametersDataSource="crt.PageParametersDataSource"})(c||(c={}));var m;(function(e){e.Simple="simple",e.ViewModelCollection="viewModelCollection"})(m||(m={}));var u;(function(e){e.Const="const",e.Attribute="attribute",e.Resource="resource",e.Request="request"})(u||(u={}));var s;(function(e){e.Charts="Charts",e.Components="Components",e.LayoutElements="LayoutElements",e.Inputs="Inputs",e.CustomElements="CustomElements"})(s||(s={}));const D="interfaceDesignerItem";function h(e){function t(){if(!e.typeCaption&&e.toolbarConfig){const a=Array.isArray(e.toolbarConfig)?e.toolbarConfig[0]:e.toolbarConfig;e.typeCaption=a.caption}}return function(a){e.typeRef=a,e.viewElementGroupType??(e.viewElementGroupType=s.CustomElements),t(),Reflect.defineMetadata(D,e,a)}}const p="moduleBootstrapper:interfaceDesigner";function I(e,t){e.forEach(a=>{try{const g={...l(a),typeRef:a,instantiate:function(){return(0,i.\u0275instantiate)(a,t?.resolveDependency)}};r.validate(g),r.register(g)}catch(n){console.error(n)}})}function v(e,t,a){try{const n=Reflect.getOwnMetadata("module:interfaceDesigner",t);"commands"in n&&I(n.commands,a)}catch(n){console.error(n)}}function M(e){return t=>{Reflect.defineMetadata("module:interfaceDesigner",e,t),Reflect.defineMetadata(p,v,t)}}}}]);
