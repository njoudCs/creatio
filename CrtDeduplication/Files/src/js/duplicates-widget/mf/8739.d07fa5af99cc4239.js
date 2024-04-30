(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[8739,8124,8239,5036,6118,7344,8160,1034,8056],{38124:(p,c,a)=>{a.r(c),a.d(c,{MatTooltipHarness:()=>o,_MatTooltipHarnessBase:()=>i});var n=a(8239),h=a(21936);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class i extends h.ComponentHarness{show(){var t=this;return(0,n.Z)(function*(){const e=yield t.host();yield e.dispatchEvent("touchstart",{changedTouches:[]}),yield e.hover(),yield(yield t._optionalPanel())?.dispatchEvent("animationend",{animationName:t._showAnimationName})})()}hide(){var t=this;return(0,n.Z)(function*(){const e=yield t.host();yield e.dispatchEvent("touchend"),yield e.mouseAway(),yield(yield t._optionalPanel())?.dispatchEvent("animationend",{animationName:t._hideAnimationName})})()}isOpen(){var t=this;return(0,n.Z)(function*(){const e=yield t._optionalPanel();return!!e&&!(yield e.hasClass(t._hiddenClass))})()}getTooltipText(){var t=this;return(0,n.Z)(function*(){const e=yield t._optionalPanel();return e?e.text():""})()}}class o extends i{constructor(){super(...arguments),this._optionalPanel=this.documentRootLocatorFactory().locatorForOptional(".mat-mdc-tooltip"),this._hiddenClass="mat-mdc-tooltip-hide",this._showAnimationName="mat-mdc-tooltip-show",this._hideAnimationName="mat-mdc-tooltip-hide"}static with(t={}){return new h.HarnessPredicate(this,t)}}o.hostSelector=".mat-mdc-tooltip-trigger";/**
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
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */},8239:(p,c,a)=>{a.d(c,{Z:()=>h});function n(i,o,l,t,e,s,d){try{var _=i[s](d),r=_.value}catch(u){l(u);return}_.done?o(r):Promise.resolve(r).then(t,e)}function h(i){return function(){var o=this,l=arguments;return new Promise(function(t,e){var s=i.apply(o,l);function d(r){n(s,t,e,d,_,"next",r)}function _(r){n(s,t,e,d,_,"throw",r)}d(void 0)})}}}}]);
