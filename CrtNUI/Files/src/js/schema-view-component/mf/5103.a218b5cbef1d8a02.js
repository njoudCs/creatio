(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[5103,8239,5036,6118,7344,8160,1034,8056,1906,4501,1216,9256,9795,1006,7571,6025,9424,885,7709,6662,9669,2375,6051],{25103:(H,j,u)=>{u.r(j),u.d(j,{CommonExecutionDataCollectorService:()=>I,CompleteProcessElementHandler:()=>h,EXECUTION_DATA_INTERCEPTOR_PROVIDER:()=>J,ExecutionDataCollectorService:()=>V,ExecutionDataInterceptor:()=>v,ExecutionDataPreprocessor:()=>N,ObsoleteProcessExecutionDataCollectorService:()=>R,OpenProcessPageHandler:()=>B,OpenProcessPageRequest:()=>M,PROCESS_LISTENER_REGISTER_SERVICE_APP_INITIALIZER_PROVIDER:()=>L,ProcessListenerService:()=>O,ProcessModule:()=>C});var E=u(74742),T=u(31134),l=u(75378),f=u(33177),D=u(24709),g=u(8239),y=u(41307),m=u(49475),d=u(21322);let h=class extends l.BaseRequestHandler{constructor(e,t){super(),this._processEngineService=e,this._schemaParametersStore=t}handle(e){var t=this;return(0,g.Z)(function*(){const s=e.$context;if(yield(0,d.lastValueFrom)(s.save(m.PAGE_PARAMETERS_DATA_SOURCE_NAME,[])),(yield s.IsChanged)||!(yield s.isValid()))return{success:!1};const n={...t._schemaParametersStore.values,...e.parameterValues},o=e.outputParameterInfos;if(o)for(const a of o){const i=a.dataSourceName,p=a.dataSourceAttributeName,S=s.getViewModelAttributePath(i,p),A=yield s[S];n[a.parameterName]=A}return(0,d.lastValueFrom)(t._processEngineService.completeExecuting(e.processElementUId,n))})()}};h=(0,E.__decorate)([(0,l.CrtRequestHandler)({requestType:"crt.CompleteProcessElementRequest",type:"crt.CompleteProcessElementHandler"}),(0,E.__metadata)("design:paramtypes",[y.ProcessEngineService,D.SchemaParametersStore])],h);var _=u(2876),r=u(94450),F=u(77207),q=u(99293),P=u(34617),w=u(97600),k;(function(c){c[c.ElementExecutionData=0]="ElementExecutionData",c[c.CompletionData=1]="CompletionData"})(k||(k={}));class U{static _getExecutionData(e){const t=e?.executionData;return t?t[t.currentProcElUId]:null}static getExecutionDataFromState(e){const s=(0,P.getLastNestedChildState)(e)??e;return this._getExecutionData(s)}}class Z{constructor(e,t){this._maxLength=e,this._isOnlyUniqueItems=t,this._tail=0,this._storage=new Array(this._maxLength)}pushItem(e){return this._isOnlyUniqueItems&&this.getIsItemExists(e)?!1:(this._storage[this._tail++]=e,this._tail===this._maxLength&&(this._tail=0),!0)}getIsItemExists(e){return Boolean(this._storage.indexOf(e)>=0)}clear(){this._storage.fill(void 0),this._tail=0}}class x{constructor(){this._buffer=new Z(5e4,!0)}markAsCompleted(e){return this._buffer.pushItem(e)}getIsCompleted(e){return this._buffer.getIsItemExists(e)}}x.\u0275fac=function(e){return new(e||x)},x.\u0275prov=r.\u0275\u0275defineInjectable({token:x,factory:x.\u0275fac,providedIn:"root"});var b=u(27049);class v{constructor(){this.executionDataInterceptedEvent$=new d.Subject}_getExecutionData(e){const t=e.headers.get("Creatio-ProcessEngine-ExecutionDataPath"),s=t!=null?e.body[t]:null;return s?{items:s}:null}intercept(e,t){var s=this;const n=e.clone({headers:e.headers.set("Creatio-ProcessEngine-CollectExecutionData","true")});return t.handle(n).pipe((0,d.switchMap)(function(){var o=(0,g.Z)(function*(a){if(a instanceof _.HttpResponse){const i=s._getExecutionData(a);i&&(yield new Promise(p=>{i.onProcessed=p,s.executionDataInterceptedEvent$.next(i)}))}return a});return function(a){return o.apply(this,arguments)}}()))}ngOnDestroy(){this.executionDataInterceptedEvent$.complete()}}v.\u0275fac=function(e){return new(e||v)},v.\u0275prov=r.\u0275\u0275defineInjectable({token:v,factory:v.\u0275fac,providedIn:"root"});const J={provide:_.HTTP_INTERCEPTORS,useExisting:v,multi:!0};class V{}class I{constructor(e,t,s,n){this._messageChannelService=e,this._executionDataInterceptor=t,this._windowStateService=s,this.executionDataReadyEvent$=new d.Subject,this._processEngineSender="ProcessEngine";const o=this._mapItemsToCollection.bind(this);this._subscription=(0,d.merge)(this._messageChannelService.messageEvent$.pipe((0,b.filter)(a=>this._windowStateService.isActive),(0,b.filter)(a=>a.header.sender===this._processEngineSender),(0,b.filter)(a=>a.body!=null),(0,b.map)(a=>[a.body]),(0,b.map)(o)),this._executionDataInterceptor.executionDataInterceptedEvent$,n.subscribe("on7XProcessExecutionDataReady").pipe((0,b.map)(o))).subscribe(a=>this.executionDataReadyEvent$.next(a))}_mapItemsToCollection(e){return{items:e}}ngOnDestroy(){this._subscription?.unsubscribe(),this.executionDataReadyEvent$.complete()}publish(e){this.executionDataReadyEvent$.next({items:e.map(t=>({[t.procElUId]:t}))})}}I.\u0275fac=function(e){return new(e||I)(r.\u0275\u0275inject(m.MessageChannelService),r.\u0275\u0275inject(v),r.\u0275\u0275inject(f.WindowStateService),r.\u0275\u0275inject(f.CustomEventService))},I.\u0275prov=r.\u0275\u0275defineInjectable({token:I,factory:I.\u0275fac,providedIn:"root"});class O{constructor(e,t,s,n,o,a,i,p,S){this._executionDataCollector=e,this._navigationService=t,this._logger=s,this._completedElementsRegistry=n,this._translateService=o,this._userInfo=a,this._dialogService=i,this._crtZoneService=p,this._injector=S,this._isOpenBackgroundSignalProcessPagesEnabled=null,this._subscription=this._executionDataCollector.executionDataReadyEvent$.pipe((0,d.switchMap)(A=>this._handleExecutionDataItems(A))).subscribe()}get isOpenBackgroundSignalProcessPagesEnabled(){if(this._isOpenBackgroundSignalProcessPagesEnabled!==null)return this._isOpenBackgroundSignalProcessPagesEnabled;const t=this._injector.get(m.FEATURE_VALUES)?.["ProcessFeatures.OpenBackgroundSignalProcessPages"]??!1;return this._isOpenBackgroundSignalProcessPagesEnabled=t,t}_handleExecutionDataItems(e){var t=this;return(0,g.Z)(function*(){return t._crtZoneService.runInZone(P.NAVIGATION_ZONE_NAME,(0,g.Z)(function*(){try{yield t._handleProcessEngineMessages(e)}catch(s){t._logger.error(`Error while processing executionDataReadyEvent$: ${s}`,void 0,e,s)}e.onProcessed?.()}))})()}_getActiveElementExecutionData(){return U.getExecutionDataFromState(this._navigationService.getState())}_handleCompletionData(e){var t=this;return(0,g.Z)(function*(){const s=e.data,n=t._completedElementsRegistry.markAsCompleted(s.uId),o=t._getActiveElementExecutionData();if(!(!o||o.procElUId!==s.uId))if(t._userInfo.id!==s.performerId){const a="Dialog.ProcessElementCompletedNotification",i=yield(0,d.lastValueFrom)(t._translateService.get(a)),p=t._dialogService.openInfoDialog(i);yield(0,d.lastValueFrom)(p)}else n&&t._navigationService.back()})()}_handleProcessEngineMessages(e){var t=this;return(0,g.Z)(function*(){let s=null;const n=t.isOpenBackgroundSignalProcessPagesEnabled;for(const o of e.items)switch(o.type){case k.CompletionData:{const a=o;yield t._handleCompletionData(a);break}case void 0:case k.ElementExecutionData:{const a=o,i=t._findElementData(a);if(!i){t._logger.warn("Could not find process element data from message",a);break}const p=!a.isBackgroundMode||a.isBackgroundMode&&n&&i?.isProcessExecutedBySignal;!s&&p&&(s=i);break}default:t._logger.error("Unknown execution data item type",o.type)}if(!!s)return t._handleProcessExecutionData(s)})()}_handleProcessExecutionData(e){var t=this;return(0,g.Z)(function*(){const s=t._prepareNavigationConfig(e);s?yield t._navigationService.navigate(s):t._logger.warn(`Could not get navigationConfig for element ${e.procElUId}`,e)})()}_findElementData(e){const t=Object.keys(e).find(s=>(0,l.isGuid)(s)&&e[s].procElUId);return t?e[t]:null}_prepareNavigationConfig(e){const t=this._getActiveElementExecutionData();let s;if(e.navigationOptions)s=e.navigationOptions,delete e.navigationOptions;else{const o=this._prepareNavigationOptions(e);if(!o)return null;s=o}const n=e?.processId;return{mode:P.NavigationMode.Push,state:{executionData:{isOpened:!0,showNextPrcEl:!0,_forceReplaceHistoryState:!1,currentProcElUId:e.procElUId,[e.procElUId]:e},bypassPageOpeningRestrictions:!0,isProcessCardInChain:!0,isInChain:!0,moduleName:"ProcessCardModuleV2",replaceLastModuleInChain:Boolean(n)&&t?.processId===n},options:s}}_getIsEntityEditUserTask(e,t,s){return Boolean(e)&&(Boolean(s)||t)}_getNonEmptyId(...e){return e.find(t=>Boolean(t)&&!(0,l.isEmptyGuid)(t))}_getElementParameters(e){const t={};if(e.parameters){const s=(0,w.omit)(e.parameters,["Buttons"]);Object.entries(s).forEach(([n,o])=>{(!(0,l.isGuid)(o)||!(0,l.isEmptyGuid)(o))&&(t[n]=this._getConvertedValue(o))})}return t}_getConvertedValue(e){if(!e)return e;const t=e.dataValueType;return t&&(t===l.DataValueType.DateTime||t===l.DataValueType.Date||t===l.DataValueType.Time)?(0,m.parseDate)(e.value):e.value?e.value:e}_getAttributeDefValues(e){const t=e||{};return Object.keys(t).map(s=>{const n=t[s],o=this._getConvertedValue(n);return{attributeName:s,value:o}})}_prepareNavigationOptions(e){const t=e.entitySchemaName,s=this._getNonEmptyId(e.recordId,e.activityRecordId),n=Boolean(s),o=e.action,a=e.urlToken;if(a){const i=a.split("/")[1],p=this._getElementParameters(e);return{type:P.NavigationOptionsTypeEnum.Schema,schemaName:i,parameters:p,modelInitConfigs:e.modelInitConfigs}}else if(this._getIsEntityEditUserTask(t,n,o)){const i=this._getAttributeDefValues(e.defaultValues);return n&&i.push({attributeName:"Id",value:s}),{type:P.NavigationOptionsTypeEnum.Entity,action:o==="add"?l.ModelInPageAction.Add:l.ModelInPageAction.Edit,recordId:s,entityName:t,defaultValues:i,typeColumnValue:e.pageTypeId}}return null}ngOnDestroy(){this._subscription?.unsubscribe()}}O.\u0275fac=function(e){return new(e||O)(r.\u0275\u0275inject(V),r.\u0275\u0275inject(P.CrtNavigationService),r.\u0275\u0275inject(f.LoggerService),r.\u0275\u0275inject(x),r.\u0275\u0275inject(F.TranslateService),r.\u0275\u0275inject(m.UserInfo),r.\u0275\u0275inject(q.DialogService),r.\u0275\u0275inject(m.CrtZoneService),r.\u0275\u0275inject(r.Injector))},O.\u0275prov=r.\u0275\u0275defineInjectable({token:O,factory:O.\u0275fac,providedIn:"root"});const L={provide:r.APP_INITIALIZER,useFactory:()=>()=>{},deps:[O],multi:!0};class R{constructor(e,t){this._executionDataInterceptor=e,this._window=t}ngOnDestroy(){this._subscription?.unsubscribe()}init(){this._subscription=this._executionDataInterceptor.executionDataInterceptedEvent$.subscribe(e=>{(0,w.get)(this._window,"Terrasoft.ProcessExecutionDataCollector").add(e.items),e.onProcessed?.()})}}R.\u0275fac=function(e){return new(e||R)(r.\u0275\u0275inject(v),r.\u0275\u0275inject(f.WINDOW_TOKEN))},R.\u0275prov=r.\u0275\u0275defineInjectable({token:R,factory:R.\u0275fac,providedIn:"root"});let M=class extends l.BaseRequest{};M=(0,E.__decorate)([(0,l.CrtRequest)({type:"crt.OpenProcessPageRequest"})],M);let B=class extends l.BaseRequestHandler{constructor(e,t,s){super(),this._httpClient=e,this._executionDataCollectorService=t,this._logger=s}handle(e){var t=this;return(0,g.Z)(function*(){const s=yield(0,d.lastValueFrom)(t._httpClient.post("/ServiceModel/ProcessEngineService.svc/GetExecutionData",{elementUIds:[e.processElementUId]}));if(!s?.success){t._logger?.error(s);return}t._executionDataCollectorService.publish(s.batch.map(n=>JSON.parse(n.message)))})()}};B=(0,E.__decorate)([(0,l.CrtRequestHandler)({requestType:"crt.OpenProcessPageRequest",type:"crt.OpenProcessPageHandler"}),(0,E.__metadata)("design:paramtypes",[_.HttpClient,V,f.LoggerService])],B);class N{constructor(e){this._navigationService=e}_getExecutionDataFromState(){const e=this._navigationService.getState();return U.getExecutionDataFromState(e)}_assignDataSourceProperties(e,t,s){if(!e||!t)return;s.dataSourcesConfig?.forEach(o=>{const a=o.name||t,i=e[a];if(o.expectedTypes.indexOf(i.type)!==-1){const p=i.config;if(p)for(const[S,A]of Object.entries(o.config))p[S]=A;else i.config=o.config}})}_updateSaveButtonVisibility(e){const s=m.MetadataSchemaUtils.getViewConfigInfoByProperty("name","SaveButton",e.viewConfig).find(n=>n.viewConfig.type==="crt.Button");s&&(s.viewConfig.visible=!0)}_updateDataSourceProperties(e,t){if(e.dataSourcesConfig&&t.modelConfig){const s=t.modelConfig;this._assignDataSourceProperties(s.dataSources,s.primaryDataSourceName,e)}}_getCompleteProcessElementRequestConfig(e,t,s,n){const o={request:"crt.CompleteProcessElementRequest",params:{processElementUId:t}};return s&&(o.params.parameterValues={[s]:e.tag}),n&&(o.params.outputParameterInfos=n),o}_findButtonViewConfigInfo(e,t){return m.MetadataSchemaUtils.getViewConfigInfoByProperty("name",e,t).find(n=>n.viewConfig.type==="crt.Button")}_getButtonsViewConfigInfo(e){return m.MetadataSchemaUtils.getViewConfigInfoByProperty("type","crt.Button",e)}_updateButtonHandlerEvents(e,t,s){if(!t||!s)return;const n=t.viewConfig;let o=n[s],a;const i=this._getMaskRequestConfig(!0);o?(o=Array.isArray(o)?o:[o],o.push(e),a=[i,...o]):a=[i,e],n[s]=a,a.push(this._getMaskRequestConfig(!1))}_getIsRequestMatch(e,t,s){const n=Array.isArray(e);if(!s&&n)return!1;const a=(n?e:[e]).find(i=>i.request===t);return Boolean(a)}_updateButtonsHandlerEvents(e,t,s){const n=s.event,o=s.requestName||"",a=s.searchInMultipleRequests||!1;for(const i of t){const S=i.viewConfig?.[n];!S||!this._getIsRequestMatch(S,o,a)||this._updateButtonHandlerEvents(e,i,n)}}_updateButtonActions(e,t){if(!e.completionInfo)return;const s=e.completionInfo;for(const n of s.handlers){const o=this._getCompleteProcessElementRequestConfig(n,e.procElUId,s.parameterName,e.outputParameterInfos);if(n.name){const i=this._findButtonViewConfigInfo(n.name,t.viewConfig);this._updateButtonHandlerEvents(o,i,n.event);continue}if(!n.requestName)continue;const a=this._getButtonsViewConfigInfo(t.viewConfig);this._updateButtonsHandlerEvents(o,a,n)}}_getMaskRequestConfig(e){return{request:"crt.SchemaViewMaskRequest",params:{taskName:"process-interaction",action:e?l.SchemaViewMaskRequestAction.AddTask:l.SchemaViewMaskRequestAction.RemoveTask}}}crtOnMetaDataInit(e){const t=this._getExecutionDataFromState();if(t){const s=e;this._updateSaveButtonVisibility(s),this._updateDataSourceProperties(t,s),this._updateButtonActions(t,s)}return Promise.resolve(e)}crtGetIsPreventCaching(){const e=this._getExecutionDataFromState();return Promise.resolve(Boolean(e))}}N.\u0275fac=function(e){return new(e||N)(r.\u0275\u0275inject(P.CrtNavigationService))},N.\u0275prov=r.\u0275\u0275defineInjectable({token:N,factory:N.\u0275fac,providedIn:"any"});const G=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),$=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u5176\u5B83\u7528\u6237\u5DF2\u5B8C\u6210\u6B64\u4EFB\u52A1"}}'),z=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),K=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Nj\xEB p\xEBrdorues tjet\xEBr e ka p\xEBrfunduar k\xEBt\xEB detyre"}}'),W=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),X=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Q=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Y=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u304C\u3053\u306E\u30BF\u30B9\u30AF\u3092\u5B8C\u4E86\u3057\u307E\u3057\u305F"}}'),ee=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),te=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),se=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u05DE\u05E9\u05EA\u05DE\u05E9 \u05D0\u05D7\u05E8 \u05D4\u05E9\u05DC\u05D9\u05DD \u05DE\u05E9\u05D9\u05DE\u05D4 \u05D6\u05D5"}}'),oe=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ne=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ae=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ie=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),re=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ce=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),le=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),ue=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Otro usuario ha completado esta tarea"}}'),de=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Un autre utilisateur a r\xE9alis\xE9 cette activit\xE9"}}'),pe=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),me=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),fe=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"En annen bruker har fullf\xF8rt denne oppgaven"}}'),ge=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Outro usu\xE1rio concluiu esta tarefa"}}'),he=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Outro utilizador j\xE1 completou esta tarefa"}}'),_e=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Un alt utilizator a finalizat acest task"}}'),Ee=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u0414\u0430\u043D\u043D\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 \u0443\u0436\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C"}}'),ve=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Ce=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Se=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"\u0414\u0430\u043D\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0432\u0436\u0435 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0435 \u0456\u043D\u0448\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043C"}}'),Pe=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Ie=JSON.parse('{"Dialog":{"ProcessElementCompletedNotification":"Another user has completed this task"}}'),Oe={"hu-HU":G,"zh-CN":$,"tr-TR":z,"sq-AL":K,"pl-PL":W,"nl-NL":X,"kk-KZ":Q,"ja-JP":Y,"it-IT":ee,"id-ID":te,"he-IL":se,"fa-IR":oe,"en-GB":ne,"bg-BG":ae,"ar-SA":ie,"zh-TW":Ie,"vi-VN":Pe,"th-TH":Ce,"sv-SE":ve,"ro-RO":_e,"pt-PT":he,"pt-BR":ge,"no-NO":fe,"lv-LV":me,"ko-KR":pe,"fr-FR":de,"es-ES":ue,"de-DE":ce,"cs-CZ":re,"en-US":le,"uk-UA":Se,"ru-RU":Ee};let C=class{};C.\u0275fac=function(e){return new(e||C)},C.\u0275mod=r.\u0275\u0275defineNgModule({type:C}),C.\u0275inj=r.\u0275\u0275defineInjector({providers:[J,L,{provide:V,useClass:I},f.CustomEventService,{provide:D.CRT_METADATA_NAVIGATION_PREPROCESSOR,useClass:N,multi:!0},f.LoggerService],imports:[T.CommonModule,f.CrtLibTranslateModule.forRoot({i18n:Oe})]}),C=(0,E.__decorate)([(0,l.CrtModule)({requestHandlers:[h,B]})],C),function(){(typeof ngJitMode>"u"||ngJitMode)&&r.\u0275\u0275setNgModuleScope(C,{imports:[T.CommonModule,f.CrtLibTranslateModule]})}()},8239:(H,j,u)=>{u.d(j,{Z:()=>T});function E(l,f,D,g,y,m,d){try{var h=l[m](d),_=h.value}catch(r){D(r);return}h.done?f(_):Promise.resolve(_).then(g,y)}function T(l){return function(){var f=this,D=arguments;return new Promise(function(g,y){var m=l.apply(f,D);function d(_){E(m,g,y,d,h,"next",_)}function h(_){E(m,g,y,d,h,"throw",_)}d(void 0)})}}}}]);