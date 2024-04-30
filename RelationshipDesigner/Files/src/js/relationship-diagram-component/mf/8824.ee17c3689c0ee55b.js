(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[8824],{18824:(L,E,_)=>{_.r(E),_.d(E,{ANIMATION_MODULE_TYPE:()=>i.ANIMATION_MODULE_TYPE,BrowserAnimationsModule:()=>c,NoopAnimationsModule:()=>p,provideAnimations:()=>F,provideNoopAnimations:()=>k,\u0275AnimationRenderer:()=>b,\u0275AnimationRendererFactory:()=>u,\u0275BrowserAnimationBuilder:()=>h,\u0275BrowserAnimationFactory:()=>N,\u0275InjectableAnimationEngine:()=>m});var i=_(94450),g=_(54514),A=_(72310),o=_(50480),y=_(31134);/**
 * @license Angular v15.2.9
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */class h extends A.AnimationBuilder{constructor(e,t){super(),this._nextAnimationId=0;const n={id:"0",encapsulation:i.ViewEncapsulation.None,styles:[],data:{animation:[]}};this._renderer=e.createRenderer(t.body,n)}build(e){const t=this._nextAnimationId.toString();this._nextAnimationId++;const n=Array.isArray(e)?(0,A.sequence)(e):e;return R(this._renderer,null,t,"register",[n]),new N(t,this._renderer)}}h.\u0275fac=function(e){return new(e||h)(i.\u0275\u0275inject(i.RendererFactory2),i.\u0275\u0275inject(y.DOCUMENT))},h.\u0275prov=i.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(h,[{type:i.Injectable}],function(){return[{type:i.RendererFactory2},{type:void 0,decorators:[{type:i.Inject,args:[y.DOCUMENT]}]}]},null)}();class N extends A.AnimationFactory{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new T(this._id,e,t||{},this._renderer)}}class T{constructor(e,t,n,r){this.id=e,this.element=t,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return R(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(e){this._command("setPosition",e)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}}function R(s,e,t,n,r){return s.setProperty(e,`@@${t}:${n}`,r)}const I="@",v="@.disabled";class u{constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),t.onRemovalComplete=(r,a)=>{const d=a?.parentNode(r);d&&a.removeChild(d,r)}}createRenderer(e,t){const n="",r=this.delegate.createRenderer(e,t);if(!e||!t||!t.data||!t.data.animation){let l=this._rendererCache.get(r);if(!l){const x=()=>this._rendererCache.delete(r);l=new C(n,r,this.engine,x),this._rendererCache.set(r,l)}return l}const a=t.id,d=t.id+"-"+this._currentId;this._currentId++,this.engine.register(d,e);const f=l=>{Array.isArray(l)?l.forEach(f):this.engine.registerTrigger(a,d,e,l.name,l)};return t.data.animation.forEach(f),new b(this,d,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(n));return}this._animationCallbacksBuffer.length==0&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(r=>{const[a,d]=r;a(d)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([t,n])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}u.\u0275fac=function(e){return new(e||u)(i.\u0275\u0275inject(i.RendererFactory2),i.\u0275\u0275inject(o.\u0275AnimationEngine),i.\u0275\u0275inject(i.NgZone))},u.\u0275prov=i.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(u,[{type:i.Injectable}],function(){return[{type:i.RendererFactory2},{type:o.\u0275AnimationEngine},{type:i.NgZone}]},null)}();class C{constructor(e,t,n,r){this.namespaceId=e,this.delegate=t,this.engine=n,this._onDestroy=r,this.destroyNode=this.delegate.destroyNode?a=>t.destroyNode(a):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy(),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n,r=!0){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){t.charAt(0)==I&&t==v?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class b extends C{constructor(e,t,n,r,a){super(t,n,r,a),this.factory=e,this.namespaceId=t}setProperty(e,t,n){t.charAt(0)==I?t.charAt(1)=="."&&t==v?(n=n===void 0?!0:!!n,this.disableAnimations(e,n)):this.engine.process(this.namespaceId,e,t.slice(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if(t.charAt(0)==I){const r=B(e);let a=t.slice(1),d="";return a.charAt(0)!=I&&([a,d]=w(a)),this.engine.listen(this.namespaceId,r,a,d,f=>{const P=f._data||-1;this.factory.scheduleListenerCallback(P,n,f)})}return this.delegate.listen(e,t,n)}}function B(s){switch(s){case"body":return document.body;case"document":return document;case"window":return window;default:return s}}function w(s){const e=s.indexOf("."),t=s.substring(0,e),n=s.slice(e+1);return[t,n]}class m extends o.\u0275AnimationEngine{constructor(e,t,n,r){super(e.body,t,n)}ngOnDestroy(){this.flush()}}m.\u0275fac=function(e){return new(e||m)(i.\u0275\u0275inject(y.DOCUMENT),i.\u0275\u0275inject(o.AnimationDriver),i.\u0275\u0275inject(o.\u0275AnimationStyleNormalizer),i.\u0275\u0275inject(i.ApplicationRef))},m.\u0275prov=i.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(m,[{type:i.Injectable}],function(){return[{type:void 0,decorators:[{type:i.Inject,args:[y.DOCUMENT]}]},{type:o.AnimationDriver},{type:o.\u0275AnimationStyleNormalizer},{type:i.ApplicationRef}]},null)}();function S(){return new o.\u0275WebAnimationsStyleNormalizer}function j(s,e,t){return new u(s,e,t)}const O=[{provide:A.AnimationBuilder,useClass:h},{provide:o.\u0275AnimationStyleNormalizer,useFactory:S},{provide:o.\u0275AnimationEngine,useClass:m},{provide:i.RendererFactory2,useFactory:j,deps:[g.\u0275DomRendererFactory2,o.\u0275AnimationEngine,i.NgZone]}],M=[{provide:o.AnimationDriver,useFactory:()=>new o.\u0275WebAnimationsDriver},{provide:i.ANIMATION_MODULE_TYPE,useValue:"BrowserAnimations"},...O],D=[{provide:o.AnimationDriver,useClass:o.\u0275NoopAnimationDriver},{provide:i.ANIMATION_MODULE_TYPE,useValue:"NoopAnimations"},...O];class c{static withConfig(e){return{ngModule:c,providers:e.disableAnimations?D:M}}}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=i.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=i.\u0275\u0275defineInjector({providers:M,imports:[g.BrowserModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(c,[{type:i.NgModule,args:[{exports:[g.BrowserModule],providers:M}]}],null,null)}();function F(){return[...M]}class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=i.\u0275\u0275defineNgModule({type:p}),p.\u0275inj=i.\u0275\u0275defineInjector({providers:D,imports:[g.BrowserModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(p,[{type:i.NgModule,args:[{exports:[g.BrowserModule],providers:D}]}],null,null)}();function k(){return[...D]}}}]);
