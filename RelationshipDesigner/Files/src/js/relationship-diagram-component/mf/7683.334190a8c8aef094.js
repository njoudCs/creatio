(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[7683,450],{87683:(x,E,a)=>{a.r(E),a.d(E,{ErrorListDialogService:()=>i,RestValidationErrorHandler:()=>n,WorkspaceErrorsDialogModule:()=>l});var S=a(31134),p=a(99293),D=a(54514),s=a(75378),y=a(77207),f=a(31234),m=a(96923),u=a(49475),T=a(27049),t=a(94450);class i{constructor(e,r,o,v){this._dialogService=e,this._translateService=r,this._academyHelpUrlService=o,this._domSanitizer=v,this._codeErrorDataSchema={columns:[new m.ErrorTypeIconColumnSchema({name:"errorTypeIcon",formatter:(h,d)=>d.warning?u.MessageType.Warning:u.MessageType.Error}),{name:"fileName",caption:this._translateService.instant("ErrorListDialogService.FileNameColumn"),valueType:s.DataValueType.Text},{name:"errorText",caption:this._translateService.instant("ErrorListDialogService.ErrorTextColumn"),valueType:s.DataValueType.Text},{name:"errorNumber",caption:this._translateService.instant("ErrorListDialogService.ErrorNumberColumn"),valueType:s.DataValueType.Text},{name:"line",caption:this._translateService.instant("ErrorListDialogService.LineColumn"),valueType:s.DataValueType.Text}]},this._codeValidationErrorDataSchema={columns:[{name:"source",caption:this._translateService.instant("ErrorListDialogService.SourceColumn"),valueType:s.DataValueType.Text},{name:"reference",caption:this._translateService.instant("ErrorListDialogService.ReferenceColumn"),valueType:s.DataValueType.Text},{name:"package",caption:this._translateService.instant("ErrorListDialogService.PackageColumn"),valueType:s.DataValueType.Text}]}}_getCompilationErrorsDialogData(e){return{title:this._translateService.instant("ErrorListDialogService.CodeErrorListDialogCaption"),dataSchema:this._codeErrorDataSchema,data:e,sortColumn:"fileName"}}_getValidationErrorsDialogData(e,r){return{title:this._translateService.instant("ErrorListDialogService.CodeValidationErrorListDialogCaption"),dataSchema:this._codeValidationErrorDataSchema,data:r,sortColumn:"source",additionalText:e,helpLinkUrl:this._getHelpLinkUrl()}}_getHelpLinkUrl(){return{url:this._domSanitizer.bypassSecurityTrustUrl(this._academyUrl),caption:this._translateService.instant("ErrorListDialogService.AcademyHelpUrlCaption")}}_getAcademyHelpUrl(){return this._academyHelpUrlService.getAcademyHelpUrl("PackageHierarchyLoops")}showCompilationErrors(e){return this._dialogService.open(m.TableDialogComponent,{data:this._getCompilationErrorsDialogData(e),panelClass:"compilation-error-dialog",disableClose:!0})}showValidationErrors(e,r){return this._getAcademyHelpUrl().pipe((0,T.switchMap)(o=>(this._academyUrl=o,this._dialogService.open(m.TableDialogComponent,{data:this._getValidationErrorsDialogData(e,r),panelClass:"validation-error-dialog",disableClose:!0}))))}}i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275inject(p.DialogService),t.\u0275\u0275inject(y.TranslateService),t.\u0275\u0275inject(f.AcademyService),t.\u0275\u0275inject(D.DomSanitizer))},i.\u0275prov=t.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac});var g=a(97600),C=a(21322);class n extends u.RestAccumulatingErrorHandler{constructor(e,r){super(),this._dialogService=e,this._errorListDialogService=r,this._subscription=new C.Subscription}_showValidationErrors(e,r){this._subscription.add(this._errorListDialogService.showValidationErrors(e,r).subscribe())}processAccumulatedResponse(e){const r=e;r.success=!0,delete r.errorInfo,delete r.validationErrors}canAccumulate(e){return e?.errorInfo?.errorCode==="AutoAddPackageDependenciesValidateException"}showAccumulatedErrors(){const e=(0,g.cloneDeep)(this.accumulatedErrorResponses),r=e.shift();if(e.forEach(o=>{const v=o,h=r.validationErrors??[],d=v.validationErrors,_=h.some(L=>d?.find(V=>(0,g.isEqual)(V,L)));!(0,g.isEmpty)(d)&&!_&&(r.validationErrors=[...h,...d])}),r){const o=r.errorInfo?.message;this._showValidationErrors(o,r.validationErrors)}}processSeparatedResponse(e){const{validationErrors:r,errorInfo:o}=e||{};r?.length>0?this._showValidationErrors(o.message,r):o&&o.message&&this.processErrorMessage(o.message)}processErrorMessage(e){this._dialogService.openInfoDialog(e)}ngOnDestroy(){this._subscription.unsubscribe()}}n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275inject(p.DialogService),t.\u0275\u0275inject(i))},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac});class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=t.\u0275\u0275defineInjector({providers:[i,n],imports:[S.CommonModule,p.DialogModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&t.\u0275\u0275setNgModuleScope(l,{imports:[S.CommonModule,p.DialogModule]})}()}}]);
