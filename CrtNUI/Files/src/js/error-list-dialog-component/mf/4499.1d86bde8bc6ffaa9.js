(self.webpackChunkapp_studio_enterprise_error_list_dialog=self.webpackChunkapp_studio_enterprise_error_list_dialog||[]).push([[4499,8239,5036,6118,4055],{74499:(m,_,i)=>{i.r(_),i.d(_,{FakeMatIconRegistry:()=>n,MatIconHarness:()=>o,MatIconTestingModule:()=>r});var c=i(8239),d=i(21936),a=i(94450),l=i(72856),g=i(21322);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o extends d.ComponentHarness{static with(e={}){return new d.HarnessPredicate(o,e).addOption("type",e.type,function(){var t=(0,c.Z)(function*(s,p){return(yield s.getType())===p});return function(s,p){return t.apply(this,arguments)}}()).addOption("name",e.name,(t,s)=>d.HarnessPredicate.stringMatches(t.getName(),s)).addOption("namespace",e.namespace,(t,s)=>d.HarnessPredicate.stringMatches(t.getNamespace(),s))}getType(){var e=this;return(0,c.Z)(function*(){return(yield(yield e.host()).getAttribute("data-mat-icon-type"))==="svg"?0:1})()}getName(){var e=this;return(0,c.Z)(function*(){const t=yield e.host(),s=yield t.getAttribute("data-mat-icon-name");return s||((yield e.getType())===1?t.text():null)})()}getNamespace(){var e=this;return(0,c.Z)(function*(){return(yield e.host()).getAttribute("data-mat-icon-namespace")})()}isInline(){var e=this;return(0,c.Z)(function*(){return(yield e.host()).hasClass("mat-icon-inline")})()}}o.hostSelector=".mat-icon";/**
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
 */class n{addSvgIcon(){return this}addSvgIconLiteral(){return this}addSvgIconInNamespace(){return this}addSvgIconLiteralInNamespace(){return this}addSvgIconSet(){return this}addSvgIconSetLiteral(){return this}addSvgIconSetInNamespace(){return this}addSvgIconSetLiteralInNamespace(){return this}registerFontClassAlias(){return this}classNameForFontAlias(e){return e}getDefaultFontSetClass(){return["material-icons"]}getSvgIconFromUrl(){return(0,g.of)(this._generateEmptySvg())}getNamedSvgIcon(){return(0,g.of)(this._generateEmptySvg())}setDefaultFontSetClass(){return this}addSvgIconResolver(){return this}ngOnDestroy(){}_generateEmptySvg(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.classList.add("fake-testing-svg"),e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),e}}n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(n,[{type:a.Injectable}],null,null)}();class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=a.\u0275\u0275defineInjector({providers:[{provide:l.MatIconRegistry,useClass:n}]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(r,[{type:a.NgModule,args:[{providers:[{provide:l.MatIconRegistry,useClass:n}]}]}],null,null)}();/**
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
 */},8239:(m,_,i)=>{i.d(_,{Z:()=>d});function c(a,l,g,o,n,r,u){try{var e=a[r](u),t=e.value}catch(s){g(s);return}e.done?l(t):Promise.resolve(t).then(o,n)}function d(a){return function(){var l=this,g=arguments;return new Promise(function(o,n){var r=a.apply(l,g);function u(t){c(r,o,n,u,e,"next",t)}function e(t){c(r,o,n,u,e,"throw",t)}u(void 0)})}}}}]);
