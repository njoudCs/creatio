(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[1795,3455],{41795:(c,u,i)=>{i.r(u),i.d(u,{AlmThemeService:()=>m,AlmThemizationModule:()=>n});var a=i(31134),t=i(94450);class n{}n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[a.CommonModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&t.\u0275\u0275setNgModuleScope(n,{imports:[a.CommonModule]})}();var d=i(41307),s=i(27049);class m{constructor(e,r,h){this._featureService=e,this._document=r,this._almThemeName="",this._defaultThemeName="",this._renderer=h.createRenderer(null,null)}_findLastThemeInDocumentBody(){let e="";return this._document.body.classList.forEach(r=>{r.includes("-theme")&&(e=r)}),e}_changeTheme(e,r){if(e===r)return;const h=this._document.body;e&&this._renderer.removeClass(h,e),r&&this._renderer.addClass(h,r)}_getFeatureState(){return this._featureService.getFeatureState("UseOrangeThemeForALM")}getCurrentThemeName(){return this._currentTheme$=this._currentTheme$??this._getFeatureState().pipe((0,s.map)(e=>e?"bright-theme":""),(0,s.shareReplay)()),this._currentTheme$}applyAlmTheme(){return this.getCurrentThemeName().pipe((0,s.tap)(e=>{e===this._almThemeName||!e||(this._almThemeName=e,this._defaultThemeName=this._findLastThemeInDocumentBody(),this._changeTheme(this._defaultThemeName,e))}))}restoreDefaultTheme(){this._changeTheme(this._almThemeName,this._defaultThemeName),this._almThemeName=""}}m.\u0275fac=function(e){return new(e||m)(t.\u0275\u0275inject(d.FeatureService),t.\u0275\u0275inject(a.DOCUMENT),t.\u0275\u0275inject(t.RendererFactory2))},m.\u0275prov=t.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac})}}]);
