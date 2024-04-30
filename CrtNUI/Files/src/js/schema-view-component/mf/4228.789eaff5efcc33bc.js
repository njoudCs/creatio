(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[4228],{44228:(it,N,m)=>{m.r(N),m.d(N,{BaseEntitySchemaColumn:()=>S,DEFAULT_SEQUENCE_NUMBER_OF_CHARS:()=>H,ENTITY_SCHEMA_COLUMN_REQUIREMENT_TYPE_ITEMS:()=>z,EntitySchemaColumnRequirementType:()=>b,EntitySchemaColumnType:()=>C,EntitySchemaConverterService:()=>p,EntitySchemaDesignerApiModule:()=>A,EntitySchemaDesignerApiService:()=>h,EntitySchemaEvent:()=>u,EntitySchemaEvents:()=>w,EntitySchemaIndex:()=>I,EntitySchemaIndexColumn:()=>T,EntitySchemaModel:()=>y,EventGroupType:()=>r,InheritedEntitySchemaColumn:()=>B,OwnEntitySchemaColumn:()=>E,ReplacementEntitySchemaColumn:()=>D,getEntitySchemaMock:()=>Z,getNewEntitySchemaMock:()=>tt,getNewEntitySchemaWithParentMock:()=>et});var M=m(31134),l=m(98956),o=m(49475),r;(function(n){n[n.Add=0]="Add",n[n.Saving=1]="Saving",n[n.Updating=2]="Updating",n[n.Delete=3]="Delete",n[n.Loading=4]="Loading",n[n.ColumnValues=5]="ColumnValues"})(r||(r={}));class u{constructor(t,e,a=!1){this.hasEventHandler=!1,this.code=t,this.groupType=e,this.hidden=a}equal(t){return this.code===t.code&&this.groupType===t.groupType&&this.hidden===t.hidden&&this.hasEventHandler===t.hasEventHandler}clone(){const t=new u(this.code,this.groupType,this.hidden);return t.hasEventHandler=this.hasEventHandler,t}}class w extends l.MetaItem{constructor(t){if(super(t),this._addEvents=[new u("Inserting",r.Add),new u("Inserted",r.Add)],this._savingEvents=[new u("Validating",r.Saving),new u("Saving",r.Saving),new u("Saved",r.Saving),new u("SaveError",r.Saving)],this._updatingEvents=[new u("Updating",r.Updating),new u("Updated",r.Updating)],this._deleteEvents=[new u("Deleting",r.Delete),new u("Deleted",r.Delete)],this._loadingEvents=[new u("DefColumnValuesSet",r.Loading),new u("Loading",r.Loading),new u("Loaded",r.Loading)],this._columnValuesEvents=[new u("ColumnValueChanging",r.ColumnValues,!0),new u("ColumnValueChanged",r.ColumnValues,!0),new u("ColumnBinaryValuePackageLoading",r.ColumnValues,!0)],t){const a=(t.events??[]).map(s=>({eventCode:s.code,hasEventHandler:s.hasEventHandler}));this.updateEvents(a)}}get allEvents(){return[...this._addEvents,...this._savingEvents,...this._updatingEvents,...this._deleteEvents,...this._loadingEvents,...this._columnValuesEvents]}get events(){return this.allEvents.filter(t=>t.hidden===!1)}get eventsCodes(){return this.events.map(t=>t.code)}findByCode(t){return this.events.find(e=>e.code===t)}updateEvents(t){t.forEach(e=>{const a=this.findByCode(e.eventCode);a.hasEventHandler=e.hasEventHandler})}equal(t){return this.allEvents.every((e,a)=>{const s=t.allEvents[a];return e.equal(s)})}clone(){return new w(this)}}var i=m(75378);class T extends l.MetaItem{constructor(t){super(t),t&&(this.columnUId=t.columnUId,this.orderDirection=t.orderDirection)}equal(t){return super.equal(t)&&this.columnUId===t.columnUId&&this.orderDirection===t.orderDirection}clone(){return new T(this)}}class I extends l.MetaItem{constructor(t){super(t),this.columns=[],t&&(this.isUnique=!!t.isUnique,t.columns&&Array.isArray(t.columns)&&(this.columns=t.columns.map(e=>e.clone?e.clone():new T(e))))}static create(t,e){return new I({uId:(0,i.generateGuid)(),name:t||"NewIndex",isUnique:!1,parentSchemaUId:e||null,columns:[]})}updateDescription(t){super.update(t),this.isUnique=t.isUnique}equal(t){if(t==null)return!1;const e=super.equal(t)&&this.isUnique===t.isUnique;return this.columns.length!==t.columns.length?!1:e&&this.columns.every((a,s)=>{const c=t.columns[s];return a.equal(c)})}clone(){return new I(this)}}var L=m(97600),b;(function(n){n[n.NO=0]="NO",n[n.YES=1]="YES"})(b||(b={}));const z=l.ATTRIBUTE_REQUIREMENT_TYPE_ITEMS;var C;(function(n){n[n.OwnColumn=0]="OwnColumn",n[n.InheritedColumn=1]="InheritedColumn",n[n.ReplacementColumn=2]="ReplacementColumn"})(C||(C={}));class S extends l.MetaItem{constructor(t,e){super(e),this.usageType=o.EntitySchemaColumnUsageType.General,this.isValueCloneable=!0,this.isTrackChangesInDB=!1,this.indexed=!1,this.requirementType=b.NO,this.doNotControlIntegrity=!1,this.isMultiLineText=!1,this.isLocalizableText=!1,this.isMasked=!1,this.isFormatValidated=!1,this.isSensitiveData=!1,this._columnType=t,this._fillFromSource(e)}get isForeignColumn(){return[C.InheritedColumn,C.ReplacementColumn].includes(this._columnType)}get isReplacementColumn(){return this._columnType===C.ReplacementColumn}get isOwnColumn(){return this._columnType===C.OwnColumn}get isAutonumberColumn(){return this.defValue?.valueSourceType===i.DefaultValueSource.Sequence}_fillFromSource(t){if(!Object.getOwnPropertyNames(t).includes("type"))throw new Error("Column type not sets");const e={...S.defaultValues},a=Object.assign(e,t);this.updateName(a.name),this.updateDescription(a.description),this.updateIsMultiLineText(a.isMultiLineText),this.updateIsMasked(a.isMasked),this.updateIsFormatValidated(a.isFormatValidated),this.updateIsSensitiveData(a.isSensitiveData),this.updateType(a.type);const s=[i.DataValueType.Lookup,i.DataValueType.IMAGELOOKUP].includes(a.type),c=Object.getOwnPropertyNames(t).includes("indexed")?t.indexed:s;this.updateIndexed(c),this._updateGeneralFields(a),this._updateDataSourceFields(a),this._updateBehaviorFields(a)}_updateGeneralFields(t){this.caption=new o.LocalizableStringArray(t.caption),this.requirementType=t.requirementType,this.defValue=t.defValue,this.isValueCloneable=t.isValueCloneable,this.isLocalizableText=t.isLocalizableText}_updateDataSourceFields(t){this.isDBRequirement=t.isDBRequirement,this.doNotControlIntegrity=t.doNotControlIntegrity,this.referenceSchema=t.referenceSchema,this.isCascade=t.isCascade,this.isSimpleLookup=t.isSimpleLookup}_updateBehaviorFields(t){this.isTrackChangesInDB=t.isTrackChangesInDB,this.isSensitiveData=t.isSensitiveData,this.usageType=t.usageType}updateName(t){this.name=t}updateDescription(t){this.description=new o.LocalizableStringArray(t)}updateIsMultiLineText(t){this.isMultiLineText=t}updateIsMasked(t){this.isMasked=t}updateIsSensitiveData(t){this.isSensitiveData=t}updateIsFormatValidated(t){this.isFormatValidated=t}updateIndexed(t){this.indexed=t}updateType(t){this.type=t}updateGeneral(t){this.updateType(t.type),this._updateGeneralFields(t)}updateDataSource(t){this._updateDataSourceFields(t)}updateBehavior(t){this._updateBehaviorFields(t)}update(t){this.updateGeneral(t),this.updateBehavior(t)}equal(t){if(t==null)return!1;let e=super.equal(t)&&this.isInherited===t.isInherited&&this.type===t.type&&this.isDBRequirement===t.isDBRequirement&&this.usageType===t.usageType&&this.isValueCloneable===t.isValueCloneable&&this.isTrackChangesInDB===t.isTrackChangesInDB&&this.indexed===t.indexed&&this.requirementType===t.requirementType&&this.doNotControlIntegrity===t.doNotControlIntegrity&&this.isMultiLineText===t.isMultiLineText&&this.isMasked===t.isMasked&&this.isFormatValidated===t.isFormatValidated&&this.isSensitiveData===t.isSensitiveData&&this.isLocalizableText===t.isLocalizableText&&this.isCascade===t.isCascade&&this.isSimpleLookup===t.isSimpleLookup&&(0,o.areLocalizableStringsEqual)(this.caption,t.caption,!0)&&(0,o.areLocalizableStringsEqual)(this.description,t.description,!0)&&(0,L.isEqual)(this.defValue,t.defValue);return(this.referenceSchema||t.referenceSchema)&&(e=e&&this.referenceSchema?.uId===t.referenceSchema?.uId),e}getLocalizableValues(t){super.getLocalizableValues(t),t.caption=this.caption.clone(),t.description=this.description.clone()}loadLocalizableValues(t,e=!1){super.loadLocalizableValues(t,e),this.caption.setValues(t.caption,e),this.description.setValues(t.description,e)}}S.defaultValues={isInherited:!1,isDBRequirement:!1,usageType:o.EntitySchemaColumnUsageType.General,isValueCloneable:!0,isTrackChangesInDB:!1,indexed:!1,requirementType:b.NO,doNotControlIntegrity:!1,isMultiLineText:!1,isLocalizableText:!1,isMasked:!1,isFormatValidated:!0,isSensitiveData:!1,defValue:{valueSourceType:i.DefaultValueSource.None},isSimpleLookup:!0,isCascade:!1,referenceSchema:null};class E extends S{constructor(t){super(C.OwnColumn,t),this.isInherited=!1}static create(t,e){const a={name:t,type:e,uId:(0,i.generateGuid)()};return new E(a)}updateGeneral(t){super.updateGeneral(t),super.updateName(t.name),super.updateDescription(t.description),super.updateIsMultiLineText(t.isMultiLineText),super.updateIsMasked(t.isMasked),super.updateIsFormatValidated(t.isFormatValidated)}updateBehavior(t){super.updateBehavior(t),super.updateIndexed(t.indexed),super.updateIsSensitiveData(t.isSensitiveData)}update(t){super.update(t),super.updateDataSource(t)}clone(){return new E(this)}}class D extends S{constructor(t){super(C.ReplacementColumn,t),this.isInherited=!0}static create(t,e){const a={name:t,type:e,uId:(0,i.generateGuid)()};return new D(a)}clone(){return new D(this)}}class B extends S{constructor(t){super(C.InheritedColumn,t),this.isInherited=!0}static create(t,e){const a={name:t,type:e,uId:(0,i.generateGuid)()};return new B(a)}updateGeneral(t){super.updateGeneral(t),super.updateDescription(t.description),super.updateIsMultiLineText(t.isMultiLineText),super.updateIsMasked(t.isMasked),super.updateIsFormatValidated(t.isFormatValidated)}updateBehavior(t){super.updateBehavior(t),super.updateIndexed(t.indexed)}update(t){super.update(t),super.updateDataSource(t)}clone(){return new B(this)}}class y extends l.BaseSchema{constructor(t){super(t),this.columns=new l.MetaItemArray,this.inheritedColumns=new l.MetaItemArray,this.indexes=new l.MetaItemArray,this.events=new w,this.isDBView=!1,this.isSSPAvailable=!1,this.useLiveEditing=!1,this.isVirtual=!1,this.useRecordDeactivation=!1,this.isTrackChangesInDB=!1,this.showInAdvancedMode=!1,this.extendParent=!1,this.administratedByOperations=!1,this.administratedByColumns=!1,this.administratedByRecords=!1,this.sourceCode="",this.handledEventNames=[],this.isDeleted=!1,t&&(t.columns&&(this.columns=t.columns.clone()),t.inheritedColumns&&(this.inheritedColumns=t.inheritedColumns.clone()),t.indexes&&(this.indexes=t.indexes.clone()),t.events&&(this.events=t.events.clone()),t.addons&&t.addons.length>0&&(this.addons=t.addons.map(e=>e.clone())),this.primaryColumn=t.primaryColumn?.clone(),this.primaryDisplayColumn=t.primaryDisplayColumn?.clone(),this.primaryImageColumn=t.primaryImageColumn?.clone(),this.primaryOrderColumn=t.primaryOrderColumn?.clone(),this.primaryColorColumn=t.primaryColorColumn?.clone(),this.hierarchyColumn=t.hierarchyColumn?.clone(),this.ownerColumn=t.ownerColumn?.clone(),this.masterRecordColumn=t.masterRecordColumn?.clone(),this.createdByColumn=t.createdByColumn?.clone(),this.createdOnColumn=t.createdOnColumn?.clone(),this.modifiedByColumn=t.modifiedByColumn?.clone(),this.modifiedOnColumn=t.modifiedOnColumn?.clone(),this.parentSchema=t.parentSchema,this.trackChangesSchemaName=t.trackChangesSchemaName,this.rightSchemaName=t.rightSchemaName,this.localizationSchemaName=t.localizationSchemaName,this.isDBView=t.isDBView,this.isSSPAvailable=t.isSSPAvailable,this.useLiveEditing=t.useLiveEditing,this.isVirtual=t.isVirtual,this.useRecordDeactivation=t.useRecordDeactivation,this.isTrackChangesInDB=t.isTrackChangesInDB,this.showInAdvancedMode=t.showInAdvancedMode,this.extendParent=t.extendParent,this.administratedByOperations=t.administratedByOperations,this.administratedByColumns=t.administratedByColumns,this.administratedByRecords=t.administratedByRecords,this.sourceCode=t.sourceCode,this.handledEventNames=[...t.handledEventNames??[]],this.isDeleted=t.isDeleted)}get isParentVirtual(){return this.parentSchema?.isVirtual??!1}get isInheritedSchema(){return Boolean(this.parentSchema)&&!this.isReplacementSchema}get isReplacementSchema(){return this.extendParent}get DefaultName(){return"EntitySchema"}_generateItemName(t,e){let a=e.length,s;do a++,s=`${t}${a}`;while(e.find(c=>c.name===s));return s}_generateColumnName(t){return this._generateItemName(`${t}Column`,this.columns)}_generateIndexName(){return this._generateItemName("Index",this.indexes)}_findItemByUId(t,e){return e.find(a=>a.uId===t)}_updateSchemaSettingsInfo(t){this.primaryColumn=t.primaryColumn,this.primaryDisplayColumn=t.primaryDisplayColumn,this.primaryImageColumn=t.primaryImageColumn,this.primaryColorColumn=t.primaryColorColumn,this.primaryOrderColumn=t.primaryOrderColumn,this.hierarchyColumn=t.hierarchyColumn,this.ownerColumn=t.ownerColumn,this.localizationSchemaName=t.localizationSchemaName,this.trackChangesSchemaName=t.trackChangesSchemaName,this.rightSchemaName=t.rightSchemaName}_updateSchemaHistoryInfo(t){this.createdByColumn=t.createdByColumn,this.createdOnColumn=t.createdOnColumn,this.modifiedByColumn=t.modifiedByColumn,this.modifiedOnColumn=t.modifiedOnColumn}_updateSchemaIndexesInfo(t){this.indexes.reloadAll(t.indexes||[])}_updateSchemaBehaviorInfo(t){this.isDBView=t.isDBView,this.isSSPAvailable=t.isSSPAvailable,this.useLiveEditing=t.useLiveEditing,this.isVirtual=t.isVirtual,this.useRecordDeactivation=t.useRecordDeactivation,this.isTrackChangesInDB=t.isTrackChangesInDB,this.showInAdvancedMode=t.showInAdvancedMode}_updateSchemaAccessRightsInfo(t){this.administratedByOperations=t.administratedByOperations,this.administratedByColumns=t.administratedByColumns,this.administratedByRecords=t.administratedByRecords,this.masterRecordColumn=t.masterRecordColumn}_updateSchemaInheritanceInfo(t){this.extendParent=t.extendParent,this.parentSchema=t.parentSchema,this.inheritedColumns.reloadAll(t.inheritedColumns)}_updateSchemaEvents(t){if(!t||!t.events)return;const a=t.events.events.filter(s=>s.hasEventHandler).map(s=>({eventCode:s.code,hasEventHandler:s.hasEventHandler}));this.events.updateEvents(a)}_areColumnsUIdEqual(t,e){return t||e?t?.uId===e?.uId:!0}_areEntityAddonsEqual(t){return this.addons.length!==t.length?!1:this.addons.length===0?!0:this.addons.every(e=>{const a=t.find(s=>s.addonName===e.addonName);return a?e.equal(a):!1})}addColumn(t){this.columns.addItem(t)}createIndex(){const t=this._generateIndexName(),e=I.create(t,this.uId);return this.indexes.addItem(e),e}createColumn(t,e){const a=this._generateColumnName(e||""),s=E.create(a,t);return this.addColumn(s),s}deleteIndexByUId(t){this.indexes.deleteItemByUId(t)}deleteColumnByUId(t){this.columns.deleteItemByUId(t)}updateDescription(t){super.updateDescription(t),this._updateSchemaSettingsInfo(t),this._updateSchemaInheritanceInfo(t),this._updateSchemaEvents(t),this._updateSchemaBehaviorInfo(t),this._updateSchemaAccessRightsInfo(t),this._updateSchemaHistoryInfo(t),this._updateSchemaIndexesInfo(t)}updateParentSchema(t){this.isReplacementSchema&&t.parentSchema&&this.addons?.forEach(e=>{e.targetSchemaUId=t.parentSchema.uId})}findColumnByUId(t){return this._findItemByUId(t,this.columns)||this._findItemByUId(t,this.inheritedColumns)}findIndexByUId(t){return this._findItemByUId(t,this.indexes)}equal(t){if(t==null)return!1;let e=super.equal(t)&&this.trackChangesSchemaName===t.trackChangesSchemaName&&this.rightSchemaName===t.rightSchemaName&&this.localizationSchemaName===t.localizationSchemaName&&this.isDBView===t.isDBView&&this.isSSPAvailable===t.isSSPAvailable&&this.useLiveEditing===t.useLiveEditing&&this.isVirtual===t.isVirtual&&this.useRecordDeactivation===t.useRecordDeactivation&&this.isTrackChangesInDB===t.isTrackChangesInDB&&this.showInAdvancedMode===t.showInAdvancedMode&&this.extendParent===t.extendParent&&this.administratedByOperations===t.administratedByOperations&&this.administratedByColumns===t.administratedByColumns&&this.administratedByRecords===t.administratedByRecords&&this.sourceCode===t.sourceCode&&(0,L.isEqual)(this.handledEventNames,t.handledEventNames)&&this.columns.equal(t.columns)&&this.inheritedColumns.equal(t.inheritedColumns)&&this.indexes.equal(t.indexes)&&this.events.equal(t.events)&&this._areEntityAddonsEqual(t.addons)&&this._areColumnsUIdEqual(this.primaryColumn,t.primaryColumn)&&this._areColumnsUIdEqual(this.primaryDisplayColumn,t.primaryDisplayColumn)&&this._areColumnsUIdEqual(this.primaryImageColumn,t.primaryImageColumn)&&this._areColumnsUIdEqual(this.primaryColorColumn,t.primaryColorColumn)&&this._areColumnsUIdEqual(this.primaryOrderColumn,t.primaryOrderColumn)&&this._areColumnsUIdEqual(this.hierarchyColumn,t.hierarchyColumn)&&this._areColumnsUIdEqual(this.ownerColumn,t.ownerColumn)&&this._areColumnsUIdEqual(this.masterRecordColumn,t.masterRecordColumn)&&this._areColumnsUIdEqual(this.createdByColumn,t.createdByColumn)&&this._areColumnsUIdEqual(this.createdOnColumn,t.createdOnColumn)&&this._areColumnsUIdEqual(this.modifiedByColumn,t.modifiedByColumn)&&this._areColumnsUIdEqual(this.modifiedOnColumn,t.modifiedOnColumn);return(this.parentSchema||t.parentSchema)&&(e=e&&this.parentSchema?.uId===t.parentSchema?.uId),e}clone(){return new y(this)}getLocalizableValues(t){super.getLocalizableValues(t),this.columns.getLocalizableValues(t,"columns"),this.inheritedColumns.getLocalizableValues(t,"inheritedColumns"),this.indexes.getLocalizableValues(t,"indexes")}loadLocalizableValues(t,e=!1){super.loadLocalizableValues(t,e),this.columns.loadLocalizableValues(t,"columns",e),this.inheritedColumns.loadLocalizableValues(t,"inheritedColumns",e),this.indexes.loadLocalizableValues(t,"indexes",e)}}const H=5;var g=m(94450);class p extends l.BaseSchemaConverterService{constructor(){super(y)}static _createInheritedColumn(t,e){return t.isInheritedSchema?new B(e):new D(e)}static _convertColumns(t){return new l.MetaItemArray(t)}_convertProperties(t,e){t.caption=new o.LocalizableStringArray(e.caption),t.description=new o.LocalizableStringArray(e.description),t.localizableStrings=super.createLocalizableStrings(e.localizableStrings),t.extendParent=e.extendParent}_convertOwnColumns(t,e){const a=t.columns.map(s=>new E(s));e.columns=p._convertColumns(a)}_convertForeignColumns(t,e){const a=t.inheritedColumns?.map(s=>p._createInheritedColumn(e,s));e.inheritedColumns=p._convertColumns(a)}_convertIndexes(t,e){const a=t.indexes?.map(s=>new I(s));e.indexes=new l.MetaItemArray(a)}_convertEvents(t,e){const s=(t.handledEventNames||[]).map(c=>({eventCode:c,hasEventHandler:!0}));e.events.updateEvents(s)}_updateSchemaSettingsColumn(t,e,a){a&&(t[e]=t.findColumnByUId(a.uId))}_convertSchemaSettingsInfo(t,e){this._updateSchemaSettingsColumn(t,"primaryColumn",e.primaryColumn),this._updateSchemaSettingsColumn(t,"primaryDisplayColumn",e.primaryDisplayColumn),this._updateSchemaSettingsColumn(t,"primaryImageColumn",e.primaryImageColumn),this._updateSchemaSettingsColumn(t,"primaryColorColumn",e.primaryColorColumn),this._updateSchemaSettingsColumn(t,"primaryOrderColumn",e.primaryOrderColumn),this._updateSchemaSettingsColumn(t,"hierarchyColumn",e.hierarchyColumn),this._updateSchemaSettingsColumn(t,"ownerColumn",e.ownerColumn),this._updateSchemaSettingsColumn(t,"masterRecordColumn",e.masterRecordColumn),this._updateSchemaSettingsColumn(t,"createdByColumn",e.createdByColumn),this._updateSchemaSettingsColumn(t,"createdOnColumn",e.createdOnColumn),this._updateSchemaSettingsColumn(t,"modifiedByColumn",e.modifiedByColumn),this._updateSchemaSettingsColumn(t,"modifiedOnColumn",e.modifiedOnColumn)}convertToSchema(t){const e=super.createSchema(t);return this._convertProperties(e,t),this._convertOwnColumns(t,e),this._convertForeignColumns(t,e),this._convertSchemaSettingsInfo(e,t),this._convertEvents(t,e),this._convertIndexes(t,e),e}}p.\u0275fac=function(t){return new(t||p)},p.\u0275prov=g.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac});var G=m(41307),v=m(21322),f=m(27049);class h extends l.BaseDesignerApiService{constructor(t,e){super(t),this._destroyed$=new v.Subject,this.getSchemaInPackageMethodName="GetSchemaInPackage",this.getSchemaDesignItemMethodName="GetSchemaDesignItem",this.getSchemaDesignItemsMethodName="GetSchemaDesignItems",e.getNotifications("ConfigurationStructureChanged").pipe((0,v.takeUntil)(this._destroyed$)).subscribe(()=>this._allSchemasResponse$=null),this._messageService=t.get(o.MessageChannelService),this._saveEntitySchemaMessageId=t.get(o.SAVE_ENTITY_SCHEMA_MESSAGE_ID,(0,i.generateGuid)())}static _convertEvents(t,e){const s=(e.handledEventNames||[]).map(c=>({eventCode:c,hasEventHandler:!0}));t.events.updateEvents(s)}static _convertEventsToDto(t){const e=t.events;t.handledEventNames=e.events.filter(a=>a.hasEventHandler===!0).map(a=>a.code),t.events=null}static _convertToDto(t){const e=new y;Object.assign(e,t);const a=e.parentSchema;return a&&a.uId==null&&(e.parentSchema=null),h._convertEventsToDto(e),delete e.isDeleted,e}_getAvailableSchemas(t,e,a=!1){return this.httpClient.post(e,{packageUId:t,useFullHierarchy:a})}_getSchemaInPackage(t,e){const a=`${this.serviceEndpoint}${this.getSchemaInPackageMethodName}`;return this.getSchemaFromService(a,{schemaUId:t,packageUId:e})}convertToObject(t){const e=super.convertToObject(t);return h._convertEvents(e,t),e}convertSchemaToDTO(t){const e=t.addons?[...t.addons]:[];delete t.addons;const a=t.clone();return t.addons=e,h._convertToDto(a)}getSchemaManagerName(){return"EntitySchemaManager"}saveSchema(t,e=!1){const a=h._convertToDto(t);return super.saveSchema(a,e).pipe((0,v.switchMap)(s=>s.success?this._messageService.sendMessage({event:o.SAVE_ENTITY_EVENT,id:this._saveEntitySchemaMessageId,entityName:a.name},o.MessageChannelType.BROADCAST).pipe((0,v.take)(1),(0,f.map)(()=>s)):(0,v.of)(s)))}getAllAvailableSchemas(){const t=this.serviceEndpoint+"GetAllAvailableSchemas";return this._allSchemasResponse$=this._allSchemasResponse$??this.httpClient.post(t,{}).pipe((0,f.shareReplay)({bufferSize:1,refCount:!0})),this._allSchemasResponse$}getAvailableReferenceSchemas(t,e=!1){const a=this.serviceEndpoint+"GetAvailableReferenceSchemas";return this._getAvailableSchemas(t,a,e)}getAvailableParentSchemas(t,e=!1){const a=this.serviceEndpoint+"GetAvailableParentSchemas";return this._getAvailableSchemas(t,a,e)}assignParentSchema(t,e){const a=this.serviceEndpoint+"AssignParentSchema",s={designSchema:this.convertSchemaToDTO(t),parentSchemaUId:e,useFullHierarchy:t.useFullHierarchy};return this.getSchemaFromService(a,s,!0)}getSchemaDesignItem(t,e,a,s){const c=this.serviceEndpoint+this.getSchemaDesignItemMethodName;return this.getSchemaFromService(c,{name:e,packageUId:t,useFullHierarchy:a,cultures:s})}getSchemesDesignItems(t,e,a,s){const c=this.serviceEndpoint+this.getSchemaDesignItemsMethodName;return this.getSchemasFromService(c,{schemesInfo:e,packageUId:t,useFullHierarchy:a,cultures:s})}getSystemValues(t){const e=this.serviceEndpoint+"GetSystemValues";return this.httpClient.post(e,{dataValueTypeUId:t})}getSchemaInPackage(t,e,a){return this._getSchemaInPackage(t,e).pipe((0,f.mergeMap)(s=>s.schema?(0,v.of)(s.schema):(0,v.forkJoin)({createSchema:this.createSchema({packageUId:e,extendParent:!0}),existingSchema:this.getSchema({schemaUId:t,useFullHierarchy:a})}).pipe((0,f.mergeMap)(({createSchema:c,existingSchema:nt})=>this.getAvailableParentSchemas(e,a).pipe((0,f.mergeMap)(at=>{const q=at.items.find(V=>V.name===nt.schema.name);return c.schema.useFullHierarchy=a,this.assignParentSchema(c.schema,q.uId).pipe((0,f.map)(V=>V.schema),(0,f.tap)(V=>{V.name=q.name}))}))))))}ngOnDestroy(){this._destroyed$.next(),this._destroyed$.complete()}}h.\u0275fac=function(t){return new(t||h)(g.\u0275\u0275inject(g.Injector),g.\u0275\u0275inject(G.ServerClientOperationNotificationReceiver))},h.\u0275prov=g.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac});var R=m(83232);function P(n){const t=new I;return t.uId=(0,i.generateGuid)(),t.name=n,t}function x(n,t,e=o.OrderDirectionStrict.Asc){const a=new T;return a.uId=(0,i.generateGuid)(),a.name=n,a.columnUId=t,a.orderDirection=e,a}function U(n,t,e){const a=new y;return a.uId=e,a.name=n,a.caption=[{cultureName:"en-US",value:t}],a}function d(n,t){const e=E.create(n,t);return F(e),e}function k(n,t,e){let a;return n.isInheritedSchema&&(a=B.create(t,e)),n.isReplacementSchema&&(a=D.create(t,e)),F(a),a}function F(n){switch(n.caption=new o.LocalizableStringArray([{cultureName:"en-US",value:n.name}]),n.uId=(0,i.generateGuid)(),n.defValue={valueSourceType:i.DefaultValueSource.Const},n.type){case i.DataValueType.Date:case i.DataValueType.Time:case i.DataValueType.DateTime:n.defValue.value=(0,i.toLocalISOString)(new Date);break;case i.DataValueType.Boolean:n.defValue.value=!0;break;default:n.defValue.value="test const value";break}n.description=new o.LocalizableStringArray([{cultureName:"en-US",value:n.name}]),n.type===i.DataValueType.Lookup&&(n.requirementType=b.YES,n.referenceSchema={name:"Account",uId:"25d7c1ab-1de0-4501-b402-02e0e5a72d6e"}),n.isInherited=!1,n.isDBRequirement=!0,n.isTrackChangesInDB=!0,n.isValueCloneable=!0,n.usageType=o.EntitySchemaColumnUsageType.General}function _(n){return n.map(t=>{const e=o.DataValueTypeItems[t],a=`${e.name}_column`;return d(a,e.type)})}function j(){const n=[i.DataValueType.SHORT_TEXT,i.DataValueType.PHONE_TEXT,i.DataValueType.WEB_TEXT,i.DataValueType.EMAIL_TEXT,i.DataValueType.MEDIUM_TEXT,i.DataValueType.LONG_TEXT,i.DataValueType.RICH_TEXT,i.DataValueType.MAXSIZE_TEXT];return _(n)}function $(){return _(o.DataValueTypeGroup.DateTime)}function Q(){return _([i.DataValueType.FLOAT1,i.DataValueType.FLOAT2,i.DataValueType.FLOAT3,i.DataValueType.FLOAT4,i.DataValueType.FLOAT8,i.DataValueType.Integer,i.DataValueType.Money])}function O(n,t){n.uId=t,n.caption=[{cultureName:"en-US",value:"Test entity"}],n.name="TestEntity",n.addonTypes=["BusinessRule"],n.package=new l.Package("TestPackageName"),n.body="body",n.description=[{cultureName:"en-US",value:"test description"}],n.localizationSchemaName="TestLocalizationSchemaName",n.isVirtual=!0,n.isDBView=!0,n.isReadOnly=!1,n.isSSPAvailable=!0,n.useLiveEditing=!1,n.isTrackChangesInDB=!0,n.showInAdvancedMode=!0,n.useRecordDeactivation=!0,n.extendParent=!1,n.primaryColumn=d("PrimaryColumn",i.DataValueType.Guid),n.primaryDisplayColumn=d("PrimaryDisplayColumn",i.DataValueType.Guid),n.administratedByOperations=!0,n.administratedByColumns=!0,n.administratedByRecords=!0,n.primaryImageColumn=d("PrimaryImageColumn",i.DataValueType.Guid),n.primaryOrderColumn=d("PrimaryOrderColumn",i.DataValueType.Guid),n.primaryColorColumn=d("primaryColorColumn",i.DataValueType.Guid),n.masterRecordColumn=d("MasterRecordColumn",i.DataValueType.Lookup),n.createdByColumn=d("CreatedByColumn",i.DataValueType.Lookup),n.createdOnColumn=d("CreatedOnColumn",i.DataValueType.DateTime),n.modifiedByColumn=d("ModifiedByColumn",i.DataValueType.Lookup),n.modifiedOnColumn=d("ModifiedOnColumn",i.DataValueType.DateTime),n.hierarchyColumn=d("HierarchyColumn",i.DataValueType.Guid),n.ownerColumn=d("OwnerColumn",i.DataValueType.Lookup),n.rightSchemaName="rightSchemaName",n.trackChangesSchemaName="trackChangesSchemaName"}function Y(n){const t=[i.DataValueType.Boolean,i.DataValueType.Lookup,i.DataValueType.HASH_TEXT,i.DataValueType.SECURE_TEXT,i.DataValueType.IMAGELOOKUP],e=[...j(),...$(),...Q(),..._(t),n.primaryColumn,n.primaryDisplayColumn,n.primaryImageColumn,n.primaryOrderColumn,n.primaryColorColumn,n.hierarchyColumn,n.ownerColumn,n.masterRecordColumn,n.createdByColumn,n.createdOnColumn,n.modifiedByColumn,n.modifiedOnColumn];n.columns=new l.MetaItemArray(e)}function X(n){const t=d("ColumnForIndex",i.DataValueType.Text);n.addColumn(t);const e=P("Index1");e.isUnique=!0;const a=P("Index2");a.columns=[x("columnIndex2",n.primaryDisplayColumn.uId,o.OrderDirectionStrict.Desc),x("columnIndex1",t.uId),x("columnIndex2",n.primaryColumn.uId,o.OrderDirectionStrict.Desc)],n.indexes=new l.MetaItemArray([e,a])}function W(n){n.handledEventNames=["Inserting","Inserted","Validating","Saving","Saved","Deleted"]}function J(n){const t=R.AVAILABLE_ENTITY_SCHEMAS.find(s=>s.name==="Account");n.parentSchema=U(t.name,t.name+" caption",t.uId);const e=k(n,"InheritedIntegerColumn",i.DataValueType.Integer),a=k(n,"InheritedGuidColumn",i.DataValueType.Guid);n.inheritedColumns=new l.MetaItemArray([e,a])}function K(n){n.sourceCode=`namespace Terrasoft.Configuration.OData
{

	using System.Collections.Generic;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities.Extensions;

	#region Class: Account

	/// <exclude/>
	public class Account : Terrasoft.Configuration.Account
	{

		#region Constructors: Public

		public Account(UserConnection userConnection)
			: base(userConnection) {
		}

		public Account(Terrasoft.Configuration.Account source)
			: base(source) {
			this.CopyEntityLookupProperties(source);
		}

		#endregion

		#region Properties: Public

		public IEnumerable<Account> AccountCollectionByParent {
			get;
			set;
		}

		public IEnumerable<AccountAddress> AccountAddressCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountAlternativeName> AccountAlternativeNameCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountAnniversary> AccountAnniversaryCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountBillingInfo> AccountBillingInfoCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountCommunication> AccountCommunicationCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountDuplicate> AccountDuplicateCollectionByEntity1 {
			get;
			set;
		}

		public IEnumerable<AccountDuplicate> AccountDuplicateCollectionByEntity2 {
			get;
			set;
		}

		public IEnumerable<AccountEnrichedData> AccountEnrichedDataCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountFile> AccountFileCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountForecast> AccountForecastCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountInFolder> AccountInFolderCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<AccountInTag> AccountInTagCollectionByEntity {
			get;
			set;
		}

		public IEnumerable<AccountOrganizationChart> AccountOrganizationChartCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Activity> ActivityCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<BusinessRule> BusinessRuleCollectionByLOOKUP2 {
			get;
			set;
		}

		public IEnumerable<Call> CallCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Case> CaseCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<CompetitorProduct> CompetitorProductCollectionByCompetitor {
			get;
			set;
		}

		public IEnumerable<ConfItemUser> ConfItemUserCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Contact> ContactCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<ContactCareer> ContactCareerCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Contract> ContractCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Contract> ContractCollectionByOurCompany {
			get;
			set;
		}

		public IEnumerable<CTISearchResult> CTISearchResultCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Document> DocumentCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<EmailFolderColumnValuesSetting> EmailFolderColumnValuesSettingCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Employee> EmployeeCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<EmployeeCareer> EmployeeCareerCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<EnrchFoundAccount> EnrchFoundAccountCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<EventTeam> EventTeamCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Invoice> InvoiceCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Invoice> InvoiceCollectionBySupplier {
			get;
			set;
		}

		public IEnumerable<Lead> LeadCollectionByPartner {
			get;
			set;
		}

		public IEnumerable<Lead> LeadCollectionByQualifiedAccount {
			get;
			set;
		}

		public IEnumerable<LeadQualification> LeadQualificationCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Opportunity> OpportunityCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Opportunity> OpportunityCollectionByPartner {
			get;
			set;
		}

		public IEnumerable<Opportunity> OpportunityCollectionByWinner {
			get;
			set;
		}

		public IEnumerable<OpportunityCompetitor> OpportunityCompetitorCollectionByCompetitor {
			get;
			set;
		}

		public IEnumerable<OpportunityCompetitor> OpportunityCompetitorCollectionBySupplier {
			get;
			set;
		}

		public IEnumerable<OpportunityParticipant> OpportunityParticipantCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Order> OrderCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Partnership> PartnershipCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Project> ProjectCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Project> ProjectCollectionBySupplier {
			get;
			set;
		}

		public IEnumerable<QuickDialUserSettings> QuickDialUserSettingsCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<RecommendedProduct> RecommendedProductCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<Relationship> RelationshipCollectionByAccountA {
			get;
			set;
		}

		public IEnumerable<Relationship> RelationshipCollectionByAccountB {
			get;
			set;
		}

		public IEnumerable<ServiceObject> ServiceObjectCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<ServicePact> ServicePactCollectionByServiceProvider {
			get;
			set;
		}

		public IEnumerable<SysAdminUnit> SysAdminUnitCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<SysAdminUnit> SysAdminUnitCollectionByPortalAccount {
			get;
			set;
		}

		public IEnumerable<VwAccountDuplicate> VwAccountDuplicateCollectionByEntity1 {
			get;
			set;
		}

		public IEnumerable<VwAccountDuplicate> VwAccountDuplicateCollectionByEntity2 {
			get;
			set;
		}

		public IEnumerable<VwAccountModuleHistory> VwAccountModuleHistoryCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwAccountRelationship> VwAccountRelationshipCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwAccountRelationship> VwAccountRelationshipCollectionByRelatedAccount {
			get;
			set;
		}

		public IEnumerable<VwAnniversary> VwAnniversaryCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwContactRelationship> VwContactRelationshipCollectionByRelatedAccount {
			get;
			set;
		}

		public IEnumerable<VwGroupSysAdminUnit> VwGroupSysAdminUnitCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwModuleHistory> VwModuleHistoryCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwPortalOpportunity> VwPortalOpportunityCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwPortalOpportunity> VwPortalOpportunityCollectionByPartner {
			get;
			set;
		}

		public IEnumerable<VwProjectHierarchy> VwProjectHierarchyCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwQueueItem> VwQueueItemCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwRelationship> VwRelationshipCollectionByAccountA {
			get;
			set;
		}

		public IEnumerable<VwRelationship> VwRelationshipCollectionByAccountB {
			get;
			set;
		}

		public IEnumerable<VwServiceRecepients> VwServiceRecepientsCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwSspAdminUnit> VwSspAdminUnitCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwSspAdminUnit> VwSspAdminUnitCollectionByPortalAccount {
			get;
			set;
		}

		public IEnumerable<VwSSPSysAdminUnit> VwSSPSysAdminUnitCollectionByAccount {
			get;
			set;
		}

		public IEnumerable<VwSysAdminUnit> VwSysAdminUnitCollectionByAccount {
			get;
			set;
		}

		#endregion

	}

	#endregion

}

`}function Z(n){const t=new y;return O(t,n),Y(t),J(t),X(t),W(t),K(t),t}function tt(n){const t=new y;return O(t,(0,i.generateGuid)()),t.name+="New",t.package=new l.Package("TestPackage",n),t}function et(n){const t=new y;O(t,(0,i.generateGuid)());const e=R.AVAILABLE_ENTITY_SCHEMAS.find(a=>a.name==="Account");return t.parentSchema=U(e.name,e.name+" caption",e.uId),t.name+="New",t.package=new l.Package("TestPackage",n),t}class A{}A.\u0275fac=function(t){return new(t||A)},A.\u0275mod=g.\u0275\u0275defineNgModule({type:A}),A.\u0275inj=g.\u0275\u0275defineInjector({providers:[h,(0,l.getSchemaDesignerApiUrlProvider)("EntitySchemaDesignerService.svc"),{provide:l.SCHEMA_DESIGNER_CONVERTER,useClass:p}],imports:[M.CommonModule,l.SchemaDesignerApiModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&g.\u0275\u0275setNgModuleScope(A,{imports:[M.CommonModule,l.SchemaDesignerApiModule]})}()}}]);
