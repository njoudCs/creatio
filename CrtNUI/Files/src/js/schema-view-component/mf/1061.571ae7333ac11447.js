(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[1061,7025],{27025:(y,p,r)=>{r.r(p),r.d(p,{AutofillMonitor:()=>a,CdkAutofill:()=>l,CdkTextareaAutosize:()=>c,TextFieldModule:()=>d});var u=r(67202),t=r(94450),_=r(3127),m=r(21322),x=r(27049),E=r(31134);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const v=(0,u.normalizePassiveListenerOptions)({passive:!0});class a{constructor(e,i){this._platform=e,this._ngZone=i,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return m.EMPTY;const i=(0,_.coerceElement)(e),s=this._monitoredElements.get(i);if(s)return s.subject;const n=new m.Subject,o="cdk-text-field-autofilled",f=g=>{g.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(o)?(i.classList.add(o),this._ngZone.run(()=>n.next({target:g.target,isAutofilled:!0}))):g.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(o)&&(i.classList.remove(o),this._ngZone.run(()=>n.next({target:g.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{i.addEventListener("animationstart",f,v),i.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(i,{subject:n,unlisten:()=>{i.removeEventListener("animationstart",f,v)}}),n}stopMonitoring(e){const i=(0,_.coerceElement)(e),s=this._monitoredElements.get(i);s&&(s.unlisten(),s.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}}a.\u0275fac=function(e){return new(e||a)(t.\u0275\u0275inject(u.Platform),t.\u0275\u0275inject(t.NgZone))},a.\u0275prov=t.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(a,[{type:t.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:u.Platform},{type:t.NgZone}]},null)}();class l{constructor(e,i){this._elementRef=e,this._autofillMonitor=i,this.cdkAutofill=new t.EventEmitter}ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(e=>this.cdkAutofill.emit(e))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}}l.\u0275fac=function(e){return new(e||l)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(a))},l.\u0275dir=t.\u0275\u0275defineDirective({type:l,selectors:[["","cdkAutofill",""]],outputs:{cdkAutofill:"cdkAutofill"}}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(l,[{type:t.Directive,args:[{selector:"[cdkAutofill]"}]}],function(){return[{type:t.ElementRef},{type:a}]},{cdkAutofill:[{type:t.Output}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class c{get minRows(){return this._minRows}set minRows(e){this._minRows=(0,_.coerceNumberProperty)(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=(0,_.coerceNumberProperty)(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){e=(0,_.coerceBooleanProperty)(e),this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute("placeholder",e):this._textareaElement.removeAttribute("placeholder"),this._cacheTextareaPlaceholderHeight()}constructor(e,i,s,n){this._elementRef=e,this._platform=i,this._ngZone=s,this._destroyed=new m.Subject,this._enabled=!0,this._previousMinRows=-1,this._isViewInited=!1,this._handleFocusEvent=o=>{this._hasFocus=o.type==="focus"},this._document=n,this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){const e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){const e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();(0,m.fromEvent)(e,"resize").pipe((0,x.auditTime)(16),(0,x.takeUntil)(this._destroyed)).subscribe(()=>this.resizeToFitContent(!0)),this._textareaElement.addEventListener("focus",this._handleFocusEvent),this._textareaElement.addEventListener("blur",this._handleFocusEvent)}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._textareaElement.removeEventListener("focus",this._handleFocusEvent),this._textareaElement.removeEventListener("blur",this._handleFocusEvent),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1);e.rows=1,e.style.position="absolute",e.style.visibility="hidden",e.style.border="none",e.style.padding="0",e.style.height="",e.style.minHeight="",e.style.maxHeight="",e.style.overflow="hidden",this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){const e=this._textareaElement,i=e.style.marginBottom||"",s=this._platform.FIREFOX,n=s&&this._hasFocus,o=s?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";n&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(o);const f=e.scrollHeight-4;return e.classList.remove(o),n&&(e.style.marginBottom=i),f}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}const e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;const i=this._elementRef.nativeElement,s=i.value;if(!e&&this._minRows===this._previousMinRows&&s===this._previousValue)return;const n=this._measureScrollHeight(),o=Math.max(n,this._cachedPlaceholderHeight||0);i.style.height=`${o}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>this._scrollToCaretPosition(i)):setTimeout(()=>this._scrollToCaretPosition(i))}),this._previousValue=s,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_scrollToCaretPosition(e){const{selectionStart:i,selectionEnd:s}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(i,s)}}c.\u0275fac=function(e){return new(e||c)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(u.Platform),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(E.DOCUMENT,8))},c.\u0275dir=t.\u0275\u0275defineDirective({type:c,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(e,i){e&1&&t.\u0275\u0275listener("input",function(){return i._noopInputHandler()})},inputs:{minRows:["cdkAutosizeMinRows","minRows"],maxRows:["cdkAutosizeMaxRows","maxRows"],enabled:["cdkTextareaAutosize","enabled"],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(c,[{type:t.Directive,args:[{selector:"textarea[cdkTextareaAutosize]",exportAs:"cdkTextareaAutosize",host:{class:"cdk-textarea-autosize",rows:"1","(input)":"_noopInputHandler()"}}]}],function(){return[{type:t.ElementRef},{type:u.Platform},{type:t.NgZone},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[E.DOCUMENT]}]}]},{minRows:[{type:t.Input,args:["cdkAutosizeMinRows"]}],maxRows:[{type:t.Input,args:["cdkAutosizeMaxRows"]}],enabled:[{type:t.Input,args:["cdkTextareaAutosize"]}],placeholder:[{type:t.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=t.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(d,[{type:t.NgModule,args:[{declarations:[l,c],exports:[l,c]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
