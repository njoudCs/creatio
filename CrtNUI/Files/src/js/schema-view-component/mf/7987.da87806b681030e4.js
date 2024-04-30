(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[7987],{47987:(Ee,re,d)=>{d.r(re),d.d(re,{BaseDataGridStateHandlerService:()=>S,BooleanCellViewElementConfigCreator:()=>ne,BooleanEditingCellViewElementConfigCreator:()=>J,CAN_CREATE_DEFAULT_GRID_SETTING_OPERATION_CODE:()=>Ie,CHECK_DATA_GRID_COLUMNS_RIGHTS_ON_LOAD:()=>_e,CellViewElementConfigCreator:()=>p,CrtDataGridCdkModule:()=>M,DATA_GRID_AVAILABLE_EDITING_DATA_VALUE_TYPES:()=>De,DATA_GRID_CELL_VIEW_CONFIG_CREATOR_FACTORY:()=>C,DATA_GRID_CELL_VIEW_CONFIG_CREATOR_FACTORY_PROVIDER:()=>Ae,DATA_GRID_EDITING_CELL_VIEW_CONFIG_CREATOR_FACTORY:()=>f,DATA_GRID_EDITING_CELL_VIEW_CONFIG_CREATOR_FACTORY_PROVIDER:()=>we,DISABLE_DATA_GRID_EDITING_MODE_FEATURE_CODE:()=>Se,DISABLE_DATA_GRID_MULTIPLE_ROWS_SELECTION_FEATURE_CODE:()=>Ve,DataGridCancelItemsChangesHandler:()=>de,DataGridCancelItemsChangesRequest:()=>fe,DataGridColumnDefinitionService:()=>ce,DataGridRowDoubleClickHandler:()=>Ce,DataGridRowDoubleClickRequest:()=>pe,DateTimeCellViewElementConfigCreator:()=>V,DateTimeEditingCellViewElementConfigCreator:()=>Y,DcmStageCellViewElementConfigCreator:()=>H,DcmStageEditingCellViewElementConfigCreator:()=>ee,EditingCellViewElementConfigCreator:()=>G,EmailCellViewElementConfigCreator:()=>P,EmailEditingCellViewElementConfigCreator:()=>Q,FILE_LIST_CELL_VIEW_CONFIG_CREATOR_FACTORY:()=>g,FILE_LIST_CELL_VIEW_CONFIG_CREATOR_FACTORY_PROVIDER:()=>Ne,FileCellViewElementConfigCreator:()=>k,FileSizeCellViewElementConfigCreator:()=>U,GRID_VIEW_ELEMENT_TYPES:()=>F.w6,LookupCellViewElementConfigCreator:()=>O,LookupEditingCellViewElementConfigCreator:()=>X,NativeLinkCellViewElementConfigCreator:()=>ae,NumericCellViewElementConfigCreator:()=>I,NumericEditingCellViewElementConfigCreator:()=>z,PhoneCellViewElementConfigCreator:()=>B,PhoneEditingCellViewElementConfigCreator:()=>K,PrimaryCellViewElementConfigCreator:()=>b,RichTextCellViewElementConfigCreator:()=>W,SchemaDataGridColumnEditHandler:()=>le,SchemaDataGridColumnSelectionService:()=>se,StructureExplorerDataGridColumnSelectionService:()=>E,TextCellViewElementConfigCreator:()=>T,TextEditingCellViewElementConfigCreator:()=>Z,WebEditingCellViewElementConfigCreator:()=>q,getDataGridViewConfigs:()=>F.q3,getDataGridViewConfigsWithItemsBinding:()=>F.r2,getViewModelItemsAttributeName:()=>F.TN});var o=d(94450),A=d(14537),w=d(52045),m=d(21322),h=d(27049),F=d(98888);class S{constructor(e){this.schemaService=e}getColumnsFromSchema(e){const t=e?.columns??[];if(typeof t=="string"){const a=t.split("$").pop();return this._getViewModel().pipe((0,h.map)(r=>(r?.attributes??{})[a]||[]))}return(0,m.of)(t)}_getViewModel(){return this.injector?this.injector.get(A.BINDING_CONTEXT).viewModel$.pipe((0,h.take)(1)):(0,m.of)(null)}getDataSourceName(e){const t=(0,F.TN)(e);return this._getViewModel().pipe((0,h.map)(a=>a?.getBoundDataSourceName(t)))}handle(e,t){this.injector=t;const a=t.get(A.VIEW_ELEMENT_CONFIG),r=this.schemaService.getViewConfigInfoByName(a.name).viewConfig,c=e.columns??[];return this.getDataSourceName(r).pipe((0,h.switchMap)(l=>l?this.getColumnsFromSchema(r).pipe((0,h.switchMap)(s=>{const y={viewElementConfig:r,dataSourceName:l,columns:c,previousColumns:s};return this.innerHandle(y)})):(0,m.of)(void 0)))}}S.\u0275fac=function(e){return new(e||S)(o.\u0275\u0275inject(w.SchemaService))},S.\u0275prov=o.\u0275\u0275defineInjectable({token:S,factory:S.\u0275fac});var i=d(75378),$=d(77207),N=d(18369),ie=d(33177),L=d(96923),j=d(34038),_=d(49475),ge=d(54134);const C=new o.InjectionToken("A cell view config factory"),f=new o.InjectionToken("A factory of editing cell view config creators"),g=new o.InjectionToken("A cell view config factory");class E{constructor(e,t,a,r){this.structureExplorer=e,this.schemaService=t,this.cellViewConfigCreatorFactory=a,this.translateService=r}_openStructureExplorer(e){return this.structureExplorer.show({providers:[e],enableMultiSelection:!0,collectDrillDownItems:!0})}_getColumnCaptionResourceMacros(e,t){const a=t.split(".").join("");return`#ResourceString(${e}_${a})#`}_getStructureExplorerDataProviderConfig(e,t){const a=e.getBoundDataSourceNameByAttributePath(t);return{name:L.DATA_SOURCE_STRUCTURE_EXPLORER_DATA_PROVIDER_NAME,navigateOnlyThroughDataSource:a,options:{useBackwards:!0}}}_modifyAggregationColumnCode(e,t){return e+t+ge.Guid.create().toString().slice(0,8)}createColumnDefinition(e){const{structureExplorerItem:t,dataSourceName:a}=e,r=this.getColumnName(t.columnPath),c=t.data?.item?.aggregationFunction;let l=`${a}_${r}`;c&&(l=this._modifyAggregationColumnCode(l,c));const s=t.data.dataValueType,y=c?this.getAggregationColumnCaption(t.caption,t.data.item.aggregationFunctionCaption,t.data.item.aggregationFunction):this._getColumnCaptionResourceMacros(a,r),D=t.data.isMasked,v={id:(0,i.generateGuid)(),code:l,path:t.columnPath,caption:y,dataValueType:s,referenceSchemaName:t.data?.item?.referenceSchemaName,isMasked:D};return c&&(v.aggregationConfig={aggregationFunction:t.data?.item?.aggregationFunction},c===i.AggregationFunction.TopOne&&(v.aggregationConfig.sortByColumn="Id",v.aggregationConfig.sortByDirection=i.OrderDirection.Asc),v.captionResources=new _.LocalizableStringArray,v.captionResources.setValueLocalizableString(this.translateService.currentLang,this.getAggregationColumnCaption(t.caption,t.data.item.aggregationFunctionCaption,t.data.item.aggregationFunction)),v.captionResourcesChanged=!0),{...v}}getItemsAttributeName(e){const t=e.get(A.VIEW_ELEMENT_CONFIG),a=this.schemaService.getViewConfigInfoByName(t.name).viewConfig;return(0,F.TN)(a)}getAggregationColumnCaption(e,t,a){return a===i.AggregationFunction.TopOne?this.translateService.currentLang===_.DEFAULT_CULTURE_NAME?`${e} (the ${t.toLowerCase()})`:`${e} (${t.toLowerCase()})`:`${e} ${t}`}getColumnName(e){return(0,_.removeSpecialSymbols)(e)}selectColumns(e){const a=e.get(A.BINDING_CONTEXT).viewModel$.pipe((0,h.take)(1)),r=this.getItemsAttributeName(e);if(!r)return(0,m.of)([]);const c=a.pipe((0,h.map)(s=>s?.getBoundDataSourceNameByAttributePath(r))),l=a.pipe((0,h.map)(s=>this._getStructureExplorerDataProviderConfig(s,r)),(0,h.switchMap)(s=>this._openStructureExplorer(s)));return(0,m.forkJoin)([l,c]).pipe((0,h.map)(([s,y])=>(s??[]).filter(D=>D.id!==y).map(D=>this.createColumnDefinition({structureExplorerItem:D,dataSourceName:y}))))}}E.\u0275fac=function(e){return new(e||E)(o.\u0275\u0275inject(N.StructureExplorerService),o.\u0275\u0275inject(w.SchemaService),o.\u0275\u0275inject(C),o.\u0275\u0275inject($.TranslateService))},E.\u0275prov=o.\u0275\u0275defineInjectable({token:E,factory:E.\u0275fac});var u=d(8239);class p{constructor(){this.type=""}getDisplayValue(e){const{column:t,itemsAttributeName:a}=e??{};return`${a}.${t?.code}`}getViewElementConfig(e){var t=this;return(0,u.Z)(function*(){const{column:a}=e??{};return{column:{...a},value:t.getDisplayValue(e),type:t.type}})()}}class T extends p{constructor(){super(...arguments),this.type="crt.TableTextCell"}}T.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(T)))(t||T)}}(),T.\u0275prov=o.\u0275\u0275defineInjectable({token:T,factory:T.\u0275fac,providedIn:"root"});class V extends p{constructor(){super(...arguments),this.type="crt.TableDateTimeCell"}}V.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(V)))(t||V)}}(),V.\u0275prov=o.\u0275\u0275defineInjectable({token:V,factory:V.\u0275fac,providedIn:"root"});class I extends p{constructor(){super(...arguments),this.type="crt.TableNumericCell"}}I.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(I)))(t||I)}}(),I.\u0275prov=o.\u0275\u0275defineInjectable({token:I,factory:I.\u0275fac,providedIn:"root"});var x=d(24709);class R extends p{constructor(){super(),this.type="crt.Link"}hasSectionEditPage(e){var t=this;return(0,u.Z)(function*(){const a=yield t.getReferenceSchemaName(e),r={type:"crt.7XRequest",action:"HasEntityEditPage",$context:e.context,payload:{entityName:a}};return yield i.HandlerChainService.instance.process(r)})()}getDefaultViewElementConfig(e){var t=()=>super.getViewElementConfig,a=this;return(0,u.Z)(function*(){const r=yield t().call(a,e);return r.type="crt.TableTextCell",r})()}getViewElementConfig(e){var t=this;return(0,u.Z)(function*(){return(yield t.hasSectionEditPage(e))?t.getLinkViewElementConfig(e):t.getDefaultViewElementConfig(e)})()}}R.\u0275fac=function(e){return new(e||R)},R.\u0275prov=o.\u0275\u0275defineInjectable({token:R,factory:R.\u0275fac});class b extends R{constructor(){super()}getReferenceSchemaName(e){return(0,u.Z)(function*(){const t=e?.primaryAttributeName??"";return(yield(0,x.getEntitySchemaAttribute)(e.context,e.itemsAttributeName.substring(1)+"."+t))?.referenceSchemaName})()}getLinkViewElementConfig(e){var t=this;return(0,u.Z)(function*(){const{itemsAttributeName:a,primaryAttributeName:r,column:c}=e,l=t.getDisplayValue(e);return{column:c,caption:l,type:t.type,href:`${a}.${r} | crt.ToRecordLinkAsync : '${r}'`,mode:"preventDefault",clicked:{request:"crt.UpdateRecordRequest",params:{itemsAttributeName:a.slice(1),recordId:`${a}.${r}`}}}})()}}b.\u0275fac=function(e){return new(e||b)},b.\u0275prov=o.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac,providedIn:"root"});var oe=d(41307);class O extends R{constructor(e,t,a){super(),this._featureService=e,this._entitySchemaRepository=t,this._dcmSchemaManagerService=a,this._colorizedSchemasMap=new Map,this.type="crt.Link"}_isColumnColorized(e){var t=this;return(0,u.Z)(function*(){const a=yield(0,m.lastValueFrom)(t._featureService.getFeatureState("DisableDataGridColoredCell")),r=yield t.getReferenceSchemaName(e);if(!r||a)return Promise.resolve(!1);const c=t._colorizedSchemasMap.get(r);return c!==void 0?c:(0,m.lastValueFrom)(t._entitySchemaRepository.getSchemaByName(r).pipe((0,m.map)(l=>{const s=!!l.getPrimaryColorColumn();return t._colorizedSchemasMap.set(r,s),s}),(0,m.catchError)(()=>(0,m.of)(!1))))})()}_decorateConfigWithColorization(e,t){const a=super.getDisplayValue(t);e.type="crt.TableColoredCell",e.displayValue=a}_isStageColumn(e){var t=this;return(0,u.Z)(function*(){const a=yield(0,m.lastValueFrom)(t._featureService.getFeatureState("DisableDataGridProgressBarStageCell"));if(!e.dataGridSchemaName||a)return Promise.resolve(!1);const r=yield(0,m.firstValueFrom)(t._entitySchemaRepository.getSchemaByName(e.dataGridSchemaName)),c=(yield(0,m.firstValueFrom)(t._dcmSchemaManagerService.getDcmSchemaDataCollection())).find(s=>s.entitySchemaUId===r.uId);if(!c)return Promise.resolve(!1);const l=r.columns?.find(s=>s.uId===c.stageColumnUId)?.name;return l?e.column.code.split("_").pop()===l:Promise.resolve(!1)})()}_decorateConfigWithSlider(e,t){const a=`${t.dataGridName}_DCMData`;e.type="crt.TableSliderCell";const r=t.column?.code??"",l=`${`${t.itemsAttributeName}.${r}`} | crt.ToEntityStageDataTableSliderConverterAsync:$${a}`;e.percentage=`${l} | crt.ToObjectProp : 'value'`,e.color=`${l} | crt.ToObjectProp : 'color'`,e.value=this.getDisplayValue(t)}getDisplayValue(e){return`${super.getDisplayValue(e)} | crt.ToObjectProp : 'displayValue'`}getReferenceSchemaName(e){return(0,u.Z)(function*(){const t=e?.column.code??"";return(yield(0,x.getEntitySchemaAttribute)(e.context,e.itemsAttributeName.substring(1)+"."+t))?.referenceSchemaName})()}getDefaultViewElementConfig(e){var t=()=>super.getDefaultViewElementConfig,a=this;return(0,u.Z)(function*(){const r=yield t().call(a,e),c=yield a._isColumnColorized(e);return(yield a._isStageColumn(e))?a._decorateConfigWithSlider(r,e):c&&a._decorateConfigWithColorization(r,e),r})()}getLinkViewElementConfig(e){var t=this;return(0,u.Z)(function*(){const{itemsAttributeName:a,column:r}=e,c=t.getDisplayValue(e),l=yield t.getReferenceSchemaName(e),s=r?.code??"",y=`${a}.${s} | crt.ToObjectProp : 'value' | crt.ToRecordLinkAsync : '${s}'`,D={type:"crt.Link",column:{...r},caption:c,href:y,mode:"preventDefault",clicked:{request:"crt.UpdateRecordRequest",params:{entityName:l,recordId:`${a}.${s} | crt.ToObjectProp : "value"`}}},v=yield t._isColumnColorized(e);return(yield t._isStageColumn(e))?t._decorateConfigWithSlider(D,e):v&&t._decorateConfigWithColorization(D,e),D})()}}O.\u0275fac=function(e){return new(e||O)(o.\u0275\u0275inject(oe.FeatureService),o.\u0275\u0275inject(_.EntitySchemaRepository),o.\u0275\u0275inject(oe.DcmSchemaManagerService))},O.\u0275prov=o.\u0275\u0275defineInjectable({token:O,factory:O.\u0275fac,providedIn:"root"});class ne extends p{constructor(e){super(),this._defaultFeatures=e,this.type="crt.TableBooleanCell"}_getEditingModeDisabledExpression(e){if((0,w.isBindingExpression)(e))return`${e} | crt.PickDataGridFeatureValue : 'editable.enable' | crt.InvertBooleanValue`;const t=(0,j.fullInDataTableEditingFeatures)(e?.editable,!0);return!(0,j.fullInDataTableEditingFeatures)(this._defaultFeatures?.editable,!1).enable||!t.enable}getViewElementConfig(e){var t=()=>super.getViewElementConfig,a=this;return(0,u.Z)(function*(){const r=yield t().call(a,e),c=a.getDisplayValue(e),l=e.column.readonly===!0,s=a._getEditingModeDisabledExpression(e.features);return{...r,control:c,readonly:l||s,bindTo:c}})()}}ne.\u0275fac=function(e){return new(e||ne)(o.\u0275\u0275inject(j.DATA_GRID_FEATURES,8))},ne.\u0275prov=o.\u0275\u0275defineInjectable({token:ne,factory:ne.\u0275fac,providedIn:"root"});class B extends p{constructor(){super(...arguments),this.type="crt.TablePhoneCell"}}B.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(B)))(t||B)}}(),B.\u0275prov=o.\u0275\u0275defineInjectable({token:B,factory:B.\u0275fac,providedIn:"root"});class P extends p{constructor(){super(...arguments),this.type="crt.TableEmailCell"}}P.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(P)))(t||P)}}(),P.\u0275prov=o.\u0275\u0275defineInjectable({token:P,factory:P.\u0275fac,providedIn:"root"});class k extends p{constructor(){super(...arguments),this.type="crt.TableFileCell"}getViewElementConfig(e){var t=this;return(0,u.Z)(function*(){const{itemsAttributeName:a,primaryAttributeName:r,dataSchemaName:c,column:l}=e;return{column:{...l},fileName:t.getDisplayValue(e),fileUrl:`${a}.${r} | crt.ToFileLink : '${c}'`,type:t.type}})()}}k.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(k)))(t||k)}}(),k.\u0275prov=o.\u0275\u0275defineInjectable({token:k,factory:k.\u0275fac,providedIn:"root"});class U extends p{constructor(){super(...arguments),this.type="crt.TableFileSizeCell"}}U.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(U)))(t||U)}}(),U.\u0275prov=o.\u0275\u0275defineInjectable({token:U,factory:U.\u0275fac,providedIn:"root"});class W extends p{constructor(){super(...arguments),this.type="crt.TableRichTextEditorCell"}}W.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(W)))(t||W)}}(),W.\u0275prov=o.\u0275\u0275defineInjectable({token:W,factory:W.\u0275fac,providedIn:"root"});class ae extends p{constructor(){super(),this.type="crt.Link"}getViewElementConfig(e){var t=()=>super.getViewElementConfig,a=this;return(0,u.Z)(function*(){const r=yield t().call(a,e),c=e.column.dataValueType===i.DataValueType.EMAIL_TEXT;return r.href=c?`${r.value} | crt.ToEmailLink`:`${r.value} | crt.LinkPrefix`,r.caption=`${r.value}`,r.mode="native",r.target=c?"_self":"_blank",r})()}}ae.\u0275fac=function(e){return new(e||ae)},ae.\u0275prov=o.\u0275\u0275defineInjectable({token:ae,factory:ae.\u0275fac,providedIn:"root"});class H extends p{constructor(){super(...arguments),this.type="crt.TableDcmStageCell"}getViewElementConfig(e){var t=()=>super.getViewElementConfig,a=this;return(0,u.Z)(function*(){const r=yield t().call(a,e),c=a.getDisplayValue(e);return{...r,value:c,bindTo:c,dcmStages:"$DcmStages"}})()}}H.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(H)))(t||H)}}(),H.\u0275prov=o.\u0275\u0275defineInjectable({token:H,factory:H.\u0275fac,providedIn:"root"});class G{constructor(){this.type=""}getViewElementConfig(e){var t=this;return(0,u.Z)(function*(){const{column:a,itemsAttributeName:r}=e??{};return{type:t.type,control:`${r}.${a.code}`,bindTo:`${r}.${a.code}`}})()}}class Z extends G{constructor(){super(...arguments),this.type="crt.DataTableEditTextCell"}}Z.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(Z)))(t||Z)}}(),Z.\u0275prov=o.\u0275\u0275defineInjectable({token:Z,factory:Z.\u0275fac,providedIn:"root"});class z extends G{constructor(){super(...arguments),this.type="crt.DataTableEditNumericCell"}}z.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(z)))(t||z)}}(),z.\u0275prov=o.\u0275\u0275defineInjectable({token:z,factory:z.\u0275fac,providedIn:"root"});class X extends G{constructor(){super(...arguments),this.type="crt.DataTableEditLookupCell"}}X.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(X)))(t||X)}}(),X.\u0275prov=o.\u0275\u0275defineInjectable({token:X,factory:X.\u0275fac,providedIn:"root"});class Y extends G{constructor(){super(...arguments),this._dataValueTypeToDateType=new Map([[i.DataValueType.Date,_.DateTypes.Date],[i.DataValueType.Time,_.DateTypes.Time],[i.DataValueType.DateTime,_.DateTypes.DateTime]]),this.type="crt.DataTableEditDateTimeCell"}getViewElementConfig(e){var t=()=>super.getViewElementConfig,a=this;return(0,u.Z)(function*(){const{column:r}=e??{};return{...yield t().call(a,e),dateType:a._dataValueTypeToDateType.get(r.dataValueType)??_.DateTypes.DateTime}})()}}Y.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(Y)))(t||Y)}}(),Y.\u0275prov=o.\u0275\u0275defineInjectable({token:Y,factory:Y.\u0275fac,providedIn:"root"});class J extends G{getViewElementConfig(e){return(0,u.Z)(function*(){return null})()}}J.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(J)))(t||J)}}(),J.\u0275prov=o.\u0275\u0275defineInjectable({token:J,factory:J.\u0275fac,providedIn:"root"});class K extends G{constructor(){super(...arguments),this.type="crt.DataTableEditPhoneCell"}getViewElementConfig(e){var t=()=>super.getViewElementConfig,a=this;return(0,u.Z)(function*(){if(!e?.context)return null;const r=yield t().call(a,e),c=e.context.getBoundDataSchemaByAttributePath(e.itemsAttributeName.split("$")[1]),{path:l}=e.column,s=c?.attributes.find(y=>y.path===l)?.isMasked;return{...r,displayAsPhone:s}})()}}K.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(K)))(t||K)}}(),K.\u0275prov=o.\u0275\u0275defineInjectable({token:K,factory:K.\u0275fac,providedIn:"root"});class Q extends G{constructor(){super(...arguments),this.type="crt.DataTableEditEmailCell"}getViewElementConfig(e){var t=()=>super.getViewElementConfig,a=this;return(0,u.Z)(function*(){if(!e?.context)return null;const r=yield t().call(a,e),c=e.context.getBoundDataSchemaByAttributePath(e.itemsAttributeName.split("$")[1]),{path:l}=e.column,s=c?.attributes.find(y=>y.path===l)?.isFormatValidated;return{...r,isFormatValidated:s}})()}}Q.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(Q)))(t||Q)}}(),Q.\u0275prov=o.\u0275\u0275defineInjectable({token:Q,factory:Q.\u0275fac,providedIn:"root"});class q extends G{constructor(){super(...arguments),this.type="crt.DataTableEditWebCell"}}q.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(q)))(t||q)}}(),q.\u0275prov=o.\u0275\u0275defineInjectable({token:q,factory:q.\u0275fac,providedIn:"root"});class ee extends G{constructor(){super(...arguments),this.type="crt.TableDcmStageEditingCell"}getViewElementConfig(e){var t=()=>super.getViewElementConfig,a=this;return(0,u.Z)(function*(){return{...yield t().call(a,e),column:{},dcmStages:"$DcmStages"}})()}}ee.\u0275fac=function(){let n;return function(t){return(n||(n=o.\u0275\u0275getInheritedFactory(ee)))(t||ee)}}(),ee.\u0275prov=o.\u0275\u0275defineInjectable({token:ee,factory:ee.\u0275fac,providedIn:"root"});var ye=d(97600);const _e="CheckDataGridColumnsRightsOnLoad",Se="DisableDataGridEditingMode",Ve="DisableDataGridMultipleRowsSelection",Ie="CanCreateDefaultGridSettings",De=[i.DataValueType.Guid,i.DataValueType.Text,i.DataValueType.Integer,i.DataValueType.Float,i.DataValueType.Money,i.DataValueType.DateTime,i.DataValueType.Date,i.DataValueType.Time,i.DataValueType.Lookup,i.DataValueType.Enum,i.DataValueType.Boolean,i.DataValueType.SHORT_TEXT,i.DataValueType.MEDIUM_TEXT,i.DataValueType.MAXSIZE_TEXT,i.DataValueType.LONG_TEXT,i.DataValueType.FLOAT1,i.DataValueType.FLOAT2,i.DataValueType.FLOAT3,i.DataValueType.FLOAT4,i.DataValueType.FLOAT8,i.DataValueType.PHONE_TEXT,i.DataValueType.WEB_TEXT,i.DataValueType.EMAIL_TEXT];class ce{constructor(e,t,a){this._cellViewConfigCreatorFactory=e,this._rightsService=t,this._featureService=a}_getColumnName(e){return e.dataValueType===i.DataValueType.Lookup?`${e.path}Id`:e.path}_getColumnsAccessRights(e){const t=(0,ye.uniq)(e.attributes.map(this._getColumnName));return this._featureService.getFeatureState(_e).pipe((0,h.switchMap)(r=>r?this._requestColumnsAccessRights(e.name,t):this._allowColumnsAccessRights(t)))}_allowColumnsAccessRights(e){const t={};return e.forEach(a=>t[a]=!0),(0,m.of)(t)}_requestColumnsAccessRights(e,t){return this._rightsService.getCanEditColumns({schemaName:e,columnNames:t})}_isReadonlyColumn(e,t){const a=this._getColumnName(t),r=!x.DATA_SCHEMA_SYSTEM_COLUMNS.includes(t.path),c=t.attributeType===i.DataSchemaAttributeType.OwnAttribute,l=De.includes(t.dataValueType);return!(e[a]&&c&&r&&l)}_generateColumnDefinition(e,t,a){const{dataSourceName:r,dataSchema:c,itemsAttributeName:l,viewModel:s,features:y,dataGridName:D}=e,v=t.name,{primaryAttributeName:te,primaryDisplayAttributeName:me,name:he}=c??{},be=te&&`${r}_${te}`,Fe={columnName:v,dataValueType:t.dataValueType,primaryDisplayAttributeName:me},Re={column:{...a,id:(0,i.generateGuid)()},context:s,itemsAttributeName:l,features:y,primaryAttributeName:be,primaryDisplayAttributeName:me,columnName:v,dataGridName:D,dataGridSchemaName:he},Ge=this._cellViewConfigCreatorFactory.create(Fe)?.getViewElementConfig(Re)??(0,m.of)(null);return(0,m.from)(Ge).pipe((0,h.map)(Le=>({...a,cellView:Le})))}processDataGridColumnDefinitions(e,t){const{dataSourceName:a,dataSchema:r}=e;return this._getColumnsAccessRights(r).pipe((0,h.switchMap)(c=>{const l=t.map(s=>{const y=r.attributes.find(D=>(0,_.removeSpecialSymbols)(`${a}_${D.name}`)===s.code);return y?(0,ye.isUndefined)(s.readonly)?this._generateColumnDefinition(e,y,{...s,readonly:this._isReadonlyColumn(c,y)}):this._generateColumnDefinition(e,y,s):(0,m.of)(s)});return(0,m.forkJoin)(l)}))}getDataGridColumnDefinition(e,t,a){const{dataSchema:r,dataSourceName:c}=e;return this._getColumnsAccessRights(r).pipe((0,h.switchMap)(l=>{const s=`${c}_${t.name}`,y=(0,i.generateGuid)(),D={id:y,code:(0,_.removeSpecialSymbols)(s),caption:a||`#ResourceString(${y.split("-")[0]})#`,dataValueType:t.dataValueType,readonly:this._isReadonlyColumn(l,t)};return this._generateColumnDefinition(e,t,D)}))}}ce.\u0275fac=function(e){return new(e||ce)(o.\u0275\u0275inject(C),o.\u0275\u0275inject(oe.RightsService),o.\u0275\u0275inject(oe.FeatureService))},ce.\u0275prov=o.\u0275\u0275defineInjectable({token:ce,factory:ce.\u0275fac,providedIn:"root"});var ve=d(99194);class le extends ve.P{constructor(e,t,a,r,c,l,s){super(e,t,a,r,c),this._schemaPartService=l,this._maskService=s}processColumns(e,t,a,r){var c=()=>super.processColumns,l=this;return(0,u.Z)(function*(){l._maskService.showBodyMask();const s=yield c().call(l,e,t,a,r),[,y]=yield l._schemaPartService.use("USER"),D=yield y.loadResources();return s?.columns.forEach(v=>{let te=D.localizableStrings[v.code];if(!te){const me=v.id.split("-")[0],he=`${r.name}_${me}`;te=D.localizableStrings[he]}te&&(v.captionResources=l.mapResourcesToLocalizableModel(te))}),s})()}onColumnPreparationFinished(){this._maskService.hideBodyMask()}}le.\u0275fac=function(e){return new(e||le)(o.\u0275\u0275inject(w.SchemaService),o.\u0275\u0275inject(j.DataGridColumnEditService),o.\u0275\u0275inject(_.EntitySchemaService),o.\u0275\u0275inject(_.EntitySchemaProvider),o.\u0275\u0275inject($.TranslateService),o.\u0275\u0275inject(w.SchemaPartsService),o.\u0275\u0275inject(i.MaskService))},le.\u0275prov=o.\u0275\u0275defineInjectable({token:le,factory:le.\u0275fac});class se{constructor(e){this._columnSelectionService=e}_canSelectColumns(e){if(e===null)return(0,m.of)(!1);const t={type:"crt.CanDiscardUnsavedDataRequest",$context:e},a=i.HandlerChainService.instance.process(t);return(0,m.from)(a)}_getDataGridCollection(e,t){const a=e.get(A.VIEW_ELEMENT_CONFIG),r=(0,F.TN)(a);return r?(0,m.from)(t[r]).pipe((0,h.map)(c=>c)):(0,m.of)(null)}selectColumns(e){return e.get(A.BINDING_CONTEXT).viewModel$.pipe((0,h.switchMap)(t=>this._getDataGridCollection(e,t)),(0,h.switchMap)(t=>this._canSelectColumns(t)),(0,h.switchMap)(t=>(0,m.iif)(()=>t,this._columnSelectionService.selectColumns(e),(0,m.of)([]))),(0,h.take)(1))}}se.\u0275fac=function(e){return new(e||se)(o.\u0275\u0275inject(j.DataGridColumnSelectionService))},se.\u0275prov=o.\u0275\u0275defineInjectable({token:se,factory:se.\u0275fac});const Ae=ie.FactoryProvider.create({token:C,mappings:[{predicate:({columnName:n,primaryDisplayAttributeName:e})=>Boolean(n)&&n===e,injectable:b},{predicate:({dataValueType:n})=>n===i.DataValueType.Lookup,injectable:O},{predicate:({dataValueType:n})=>n===i.DataValueType.Boolean,injectable:ne},{predicate:({dataValueType:n})=>n===i.DataValueType.PHONE_TEXT,injectable:B},{predicate:({dataValueType:n})=>n===i.DataValueType.EMAIL_TEXT,injectable:P},{predicate:({dataValueType:n})=>n===i.DataValueType.RICH_TEXT,injectable:W},{predicate:({dataValueType:n})=>n===i.DataValueType.EMAIL_TEXT||n===i.DataValueType.WEB_TEXT,injectable:ae},{predicate:({dataValueType:n,columnName:e})=>n===i.DataValueType.Guid&&e.includes("DcmStageValue"),injectable:H}]}),we=ie.FactoryProvider.create({token:f,mappings:[{predicate:({dataValueType:n})=>_.DATE_TIME_DATA_VALUE_TYPES.includes(n),injectable:Y},{predicate:({dataValueType:n})=>_.NUMERIC_DATA_VALUE_TYPES.includes(n),injectable:z},{predicate:({dataValueType:n})=>n===i.DataValueType.Lookup,injectable:X},{predicate:({dataValueType:n})=>n===i.DataValueType.Boolean,injectable:J},{predicate:({dataValueType:n})=>n===i.DataValueType.PHONE_TEXT,injectable:K},{predicate:({dataValueType:n})=>n===i.DataValueType.EMAIL_TEXT,injectable:Q},{predicate:({dataValueType:n})=>n===i.DataValueType.WEB_TEXT,injectable:q},{predicate:({dataValueType:n,columnName:e})=>n===i.DataValueType.Guid&&e.includes("DcmStageValue"),injectable:ee}],default:{injectable:Z}}),Ne=ie.FactoryProvider.create({token:g,mappings:[{predicate:({columnName:n,primaryDisplayAttributeName:e})=>n&&n===e,injectable:k},{predicate:({columnName:n})=>n&&n==="Size",injectable:U}]});var ue=d(74742);let fe=class extends i.BaseRequest{constructor(){super(...arguments),this.type="crt.DataGridCancelItemsChangesRequest"}};fe=(0,ue.__decorate)([(0,i.CrtRequest)({type:"crt.DataGridCancelItemsChangesRequest"})],fe);let de=class extends i.BaseRequestHandler{constructor(e){super(),this._schemaService=e}_canCancelItemsChanges(e){var t=this;return(0,u.Z)(function*(){const{$context:a,itemsAttributeName:r,changedItems:c}=e;if(!a||!r)return!1;if(c&&c.length>0)return!0;const l=yield a[r],s={type:"crt.CanDiscardUnsavedDataRequest",$context:l};return yield t.handlerChain.process(s)})()}_cancelItemsChanges(e){var t=this;return(0,u.Z)(function*(){const a={type:"crt.CancelRecordsChangesRequest",$context:e.$context,recordIds:e.changedItems,itemsAttributeName:e.itemsAttributeName};return yield t.handlerChain.process(a)})()}_getDataGridViewConfigs(e){return this._schemaService.getViewConfigInfoByFilter(t=>{const{type:a,items:r}=t;return a==="crt.DataGrid"&&r===`$${e}`}).map(t=>t.viewConfig)}_cleanupSelectionState(e,t){const a=this._getDataGridViewConfigs(e).map(r=>r?._selectionOptions?.attribute||(0,j.createDataGridSelectionStateAttributeName)(r)).map(r=>this.handlerChain.process({type:"crt.ChangeViewModelAttributeValueRequest",$context:t,attributeName:r,attributeValue:null}));return Promise.all(a)}handle(e){var t=this;return(0,u.Z)(function*(){return e?(yield t._canCancelItemsChanges(e))?t._cancelItemsChanges(e):(yield t._cleanupSelectionState(e.itemsAttributeName,e.$context),!1):!1})()}};de=(0,ue.__decorate)([(0,i.CrtRequestHandler)({type:"crt.DataGridCancelItemsChangesHandler",requestType:"crt.DataGridCancelItemsChangesRequest"}),(0,ue.__metadata)("design:paramtypes",[w.SchemaService])],de);let pe=class extends i.BaseRequest{};pe=(0,ue.__decorate)([(0,i.CrtRequest)({type:"crt.DataGridRowDoubleClickRequest"})],pe);let Ce=class extends i.BaseRequestHandler{_isClickByNewRecord(e){return(0,u.Z)(function*(){const{itemsAttributeName:t,rowId:a}=e;return!t||!a?!1:(yield(yield e.$context[t])?.findByPrimaryAttribute(a))?.getPrimaryModelMode()===_.ModelMode.Create})()}_createUpdateRecordRequest(e){return{type:"crt.UpdateRecordRequest",$context:e.$context,recordId:e.rowId,itemsAttributeName:e.itemsAttributeName}}handle(e){var t=this;return(0,u.Z)(function*(){return(yield t._isClickByNewRecord(e))?Promise.resolve():t.handlerChain.process(t._createUpdateRecordRequest(e))})()}};Ce=(0,ue.__decorate)([(0,i.CrtRequestHandler)({requestType:"crt.DataGridRowDoubleClickRequest",type:"crt.DataGridRowDoubleClickHandler"})],Ce);var Te=d(31134);let M=class{};M.\u0275fac=function(e){return new(e||M)},M.\u0275mod=o.\u0275\u0275defineNgModule({type:M}),M.\u0275inj=o.\u0275\u0275defineInjector({imports:[Te.CommonModule]}),M=(0,ue.__decorate)([(0,i.CrtModule)({requestHandlers:[de,Ce]})],M),function(){(typeof ngJitMode>"u"||ngJitMode)&&o.\u0275\u0275setNgModuleScope(M,{imports:[Te.CommonModule]})}()},99194:(Ee,re,d)=>{d.d(re,{P:()=>_});var o=d(8239),A=d(94450),w=d(75378),m=d(77207),h=d(59929),F=d(34038),S=d(14537),i=d(49475),$=d(52045),N=d(97600),ie=d(21322),L=d(27049),j=d(98888);class _{constructor(C,f,g,E,u){this.schemaService=C,this._columnEditService=f,this._entitySchemaService=g,this._entitySchemaProvider=E,this._translateService=u}mapResourcesToLocalizableModel(C){const f=new i.LocalizableStringArray;return Object.keys(C).forEach(g=>{f.setValueLocalizableString(g,C[g])}),f}_replaceColumn(C,f,g){if(!C)return g;const E=(0,N.findIndex)(g,u=>u.id===f);return g[E]={...C,changed:!0},g}processColumns(C,f,g,E){var u=this;return(0,o.Z)(function*(){const p=u.getDataSourceName({viewElementConfig:C,viewModel:f}),T=u.schemaService.getDataSourceConfigByName(p),V=u.schemaService.resources.strings;return g.forEach(I=>{const x=I.code.split("_").pop()||"",R=T?.attributes&&T?.attributes[x];I.aggregationConfig=R?.aggregationConfig||I.aggregationConfig;let b=V[(0,i.removeSpecialSymbols)(I.code)];if(!b){const oe=I.id.split("-")[0],O=`${E.name}_${oe}`;b=V[O]}b&&(I.captionResources=u.mapResourcesToLocalizableModel(b))}),{dataSourceSchemaName:T?.entitySchemaName,columns:g}})()}_processColumnOriginalCaption(C,f){const g=f.path;let E=C;return f.path?.startsWith("[")&&(E=f.referenceSchemaName),!g||!E||!f.aggregationConfig?(0,ie.of)(f):this._entitySchemaProvider.getSchemaByName(E).pipe((0,L.switchMap)(u=>this._entitySchemaService.getEntitySchemaColumnsInformationByPath(u.uId,g," > ")),(0,L.map)(u=>{let p=u.columnCaptionPath;const T=f.aggregationConfig?.aggregationFunction;return T&&(p=this._getAggregationColumnOriginalCaption(p,f.dataValueType,T)),f.originalCaption=p,f}))}_getAggregationColumnOriginalCaption(C,f,g){const E=(0,h.getAllowedAggregationFunctionsByDataValueType)(f);E.push({func:w.AggregationFunction.Count,captionResource:"Count"});const u=E.find(T=>T.func===g)?.captionResource||"",p=this._getAggregationFunctionCaption(u);return g===w.AggregationFunction.TopOne?this._translateService.currentLang===i.DEFAULT_CULTURE_NAME?`${C} (the ${p.toLowerCase()})`:`${C} (${p.toLowerCase()})`:g===w.AggregationFunction.Count?`${C.split(" > ").slice(0,-1).join(" > ")} ${p}`:`${C} ${p}`}_getAggregationFunctionCaption(C){return this._translateService.instant("AggregationNames."+C)}getDataSourceName(C){const{viewElementConfig:f,viewModel:g}=C,E=(0,j.TN)(f);return g.getBoundDataSourceNameByAttributePath(E)}onColumnPreparationFinished(){}handle(C,f,g){const E=g.get(S.VIEW_ELEMENT_CONFIG),u=this.schemaService.getViewConfigInfoByName(E.name).viewConfig;return g.get(S.BINDING_CONTEXT).viewModel$.pipe((0,L.take)(1)).pipe((0,L.mergeMap)(V=>this.processColumns(u,V,f,E)),(0,L.mergeMap)(V=>{const I=(0,N.cloneDeep)(V.columns.find(x=>x.id===C));return this._processColumnOriginalCaption(V.dataSourceSchemaName,I).pipe((0,ie.tap)(()=>this.onColumnPreparationFinished()),(0,L.mergeMap)(x=>this._columnEditService.edit(x,g).pipe((0,L.map)(R=>this._replaceColumn(R,C,V.columns)))))}))}}_.\u0275fac=function(C){return new(C||_)(A.\u0275\u0275inject($.SchemaService),A.\u0275\u0275inject(F.DataGridColumnEditService),A.\u0275\u0275inject(i.EntitySchemaService),A.\u0275\u0275inject(i.EntitySchemaProvider),A.\u0275\u0275inject(m.TranslateService))},_.\u0275prov=A.\u0275\u0275defineInjectable({token:_,factory:_.\u0275fac})},98888:(Ee,re,d)=>{d.d(re,{w6:()=>m,q3:()=>h,r2:()=>F,TN:()=>o});function o(S){const{items:i}=S||{};if(typeof i!="string"){console.log(`The type '${typeof i}' of 'items' attribute binding value is not supporting.`);return}if(i.startsWith("$")===!1){console.log(`The attribute value '${i}' of the 'items' is not supporting. The attribute value should be bindable (starts with a "$" character)`);return}return i.substring(1)}var A=d(14537),w=d(49475);const m=["crt.DataGrid","crt.FileList","crt.ApprovalList"];function h(S,i){const{viewConfig:$}=S;return i=i&&i.length>0?i:void 0,w.MetadataSchemaUtils.getViewConfigInfoByPropertyForValues("type",i||m,$).filter(N=>Boolean(N)).map(({viewConfig:N})=>N).filter(({name:N})=>N)||[]}function F(S,i){const{viewModelConfig:$}=S;return h(S,i).filter(({items:N})=>(0,A.isBindToViewModelAttribute)(N,$.attributes))}}}]);
