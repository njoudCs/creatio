(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[5142],{96806:(D,u,i)=>{i.r(u),i.d(u,{BaseAudienceHandler:()=>p,BaseAudienceNotificationHandler:()=>r});var a=i(8239),o=i(75378),m=i(77207),g=i(99293),l=i(34038),h=i(97600),f=i(21322);class p extends o.BaseRequestHandler{constructor(e){super(),this.injector=e,this.injectDependencies()}injectDependencies(){this._notifyService=this.injector.get(g.NotifyService),this._translateService=this.injector.get(m.TranslateService),this._messageDialogProvider=this.injector.get(l.MessageDialogProvider)}getItemsCollection(e){return Array.isArray(e)?e.map(t=>typeof t=="string"?t:t.value):e?.value?[e.value]:[]}isValidFilter(e){return(0,h.isObject)(e)&&"items"in e&&!(0,h.isEmpty)(e.items)}isEmptyFilter(e){let t=!0;return Object.entries(e.items).forEach(([n,s])=>{!s.isEnabled||(s.filterType===o.FilterType.FilterGroup&&!this.isEmptyFilter(s)||s.filterType!==o.FilterType.FilterGroup)&&(t=!1)}),t}showNotification(e,t){var n=this;return(0,a.Z)(function*(){yield n._notifyService.show({message:e,closeOnClickOutside:!1,duration:t})})()}showConfirmationDialog(e){var t=this;return(0,a.Z)(function*(){return(yield(0,f.lastValueFrom)(t._messageDialogProvider.open({data:{message:e,actions:[l.DEFAULT_DIALOG_ACTIONS.NO,l.DEFAULT_DIALOG_ACTIONS.YES]}})))===l.DEFAULT_DIALOG_ACTIONS.YES.key})()}translate(e){return this._translateService.instant(`${this.translationPrefix}.${e}`)}}var A=i(49475),y=i(94450);class r extends o.BaseRequestHandler{constructor(e){super(),this.messageChannelService=e}_tryReloadAudienceDetail(e,t,n){var s=this;return(0,a.Z)(function*(){if(e.toLowerCase()!==(yield t).toLowerCase())return;const c={type:"crt.LoadDataRequest",config:{loadType:o.DataSourceLoadType.Reload},$context:n,dataSourceName:s.audienceDataSourceName};yield s.handlerChain.process(c)})()}_subscribeOnChannelMessages(e){var t=this;return(0,a.Z)(function*(){const n=yield e.getPrimaryModelName(),s=e.getViewModelAttributePath(n,"Id");t.channelSubscription=t.messageChannelService.messageEvent$.pipe((0,f.filter)(c=>{const d=c?.body?.Notifications;return d?.length>0?Boolean(d[0].EntityId):!1})).subscribe(c=>{const d=e[s],S=c?.body?.Notifications[0]?.EntityId;t._tryReloadAudienceDetail(S,d,e)})})()}handle(e){var t=this;return(0,a.Z)(function*(){const n=e.$context;yield t._subscribeOnChannelMessages(n),yield t.next?.handle(e)})()}ngOnDestroy(){this.channelSubscription?.unsubscribe()}}r.\u0275fac=function(e){return new(e||r)(y.\u0275\u0275inject(A.MessageChannelService))},r.\u0275prov=y.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}]);
