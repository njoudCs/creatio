(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[5237],{25237:(A,M,f)=>{f.r(M),f.d(M,{MatGridAvatarCssMatStyler:()=>h,MatGridList:()=>d,MatGridListModule:()=>u,MatGridTile:()=>l,MatGridTileFooterCssMatStyler:()=>m,MatGridTileHeaderCssMatStyler:()=>c,MatGridTileText:()=>g,\u0275TileCoordinator:()=>L});var i=f(94450),s=f(66385),x=f(3127),v=f(99852);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const S=["*"],b=[[["","mat-grid-avatar",""],["","matGridAvatar",""]],[["","mat-line",""],["","matLine",""]],"*"],D=["[mat-grid-avatar], [matGridAvatar]","[mat-line], [matLine]","*"],G=".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}";class T{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}update(t,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(n=>this._trackTile(n))}_trackTile(t){const e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new I(this.rowIndex,e)}_findMatchingGap(t){if(t>this.tracker.length&&(typeof ngDevMode>"u"||ngDevMode))throw Error(`mat-grid-list: tile with colspan ${t} is wider than grid with cols="${this.tracker.length}".`);let e=-1,n=-1;do{if(this.columnIndex+t>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),n=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),n=this._findGapEndIndex(e);continue}n=this._findGapEndIndex(e),this.columnIndex=e+1}while(n-e<t||n==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let e=t+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(t,e){for(let n=0;n<e.colspan;n++)this.tracker[t+n]=e.rowspan}}class I{constructor(t,e){this.row=t,this.col=e}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _=new i.InjectionToken("MAT_GRID_LIST");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class l{constructor(t,e){this._element=t,this._gridList=e,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,x.coerceNumberProperty)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,x.coerceNumberProperty)(t))}_setStyle(t,e){this._element.nativeElement.style[t]=e}}l.\u0275fac=function(t){return new(t||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(_,8))},l.\u0275cmp=i.\u0275\u0275defineComponent({type:l,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,e){t&2&&i.\u0275\u0275attribute("rowspan",e.rowspan)("colspan",e.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:S,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,e){t&1&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"div",0),i.\u0275\u0275projection(1),i.\u0275\u0275elementEnd())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(l,[{type:i.Component,args:[{selector:"mat-grid-tile",exportAs:"matGridTile",host:{class:"mat-grid-tile","[attr.rowspan]":"rowspan","[attr.colspan]":"colspan"},encapsulation:i.ViewEncapsulation.None,changeDetection:i.ChangeDetectionStrategy.OnPush,template:`<div class="mat-grid-tile-content">
  <ng-content></ng-content>
</div>
`,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"]}]}],function(){return[{type:i.ElementRef},{type:void 0,decorators:[{type:i.Optional},{type:i.Inject,args:[_]}]}]},{rowspan:[{type:i.Input}],colspan:[{type:i.Input}]})}();class g{constructor(t){this._element=t}ngAfterContentInit(){(0,s.setLines)(this._lines,this._element)}}g.\u0275fac=function(t){return new(t||g)(i.\u0275\u0275directiveInject(i.ElementRef))},g.\u0275cmp=i.\u0275\u0275defineComponent({type:g,selectors:[["mat-grid-tile-header"],["mat-grid-tile-footer"]],contentQueries:function(t,e,n){if(t&1&&i.\u0275\u0275contentQuery(n,s.MatLine,5),t&2){let a;i.\u0275\u0275queryRefresh(a=i.\u0275\u0275loadQuery())&&(e._lines=a)}},ngContentSelectors:D,decls:4,vars:0,consts:[[1,"mat-grid-list-text"]],template:function(t,e){t&1&&(i.\u0275\u0275projectionDef(b),i.\u0275\u0275projection(0),i.\u0275\u0275elementStart(1,"div",0),i.\u0275\u0275projection(2,1),i.\u0275\u0275elementEnd(),i.\u0275\u0275projection(3,2))},encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(g,[{type:i.Component,args:[{selector:"mat-grid-tile-header, mat-grid-tile-footer",changeDetection:i.ChangeDetectionStrategy.OnPush,encapsulation:i.ViewEncapsulation.None,template:`<ng-content select="[mat-grid-avatar], [matGridAvatar]"></ng-content>
<div class="mat-grid-list-text"><ng-content select="[mat-line], [matLine]"></ng-content></div>
<ng-content></ng-content>
`}]}],function(){return[{type:i.ElementRef}]},{_lines:[{type:i.ContentChildren,args:[s.MatLine,{descendants:!0}]}]})}();class h{}h.\u0275fac=function(t){return new(t||h)},h.\u0275dir=i.\u0275\u0275defineDirective({type:h,selectors:[["","mat-grid-avatar",""],["","matGridAvatar",""]],hostAttrs:[1,"mat-grid-avatar"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(h,[{type:i.Directive,args:[{selector:"[mat-grid-avatar], [matGridAvatar]",host:{class:"mat-grid-avatar"}}]}],null,null)}();class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275dir=i.\u0275\u0275defineDirective({type:c,selectors:[["mat-grid-tile-header"]],hostAttrs:[1,"mat-grid-tile-header"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(c,[{type:i.Directive,args:[{selector:"mat-grid-tile-header",host:{class:"mat-grid-tile-header"}}]}],null,null)}();class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275dir=i.\u0275\u0275defineDirective({type:m,selectors:[["mat-grid-tile-footer"]],hostAttrs:[1,"mat-grid-tile-footer"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(m,[{type:i.Directive,args:[{selector:"mat-grid-tile-footer",host:{class:"mat-grid-tile-footer"}}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const E=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class w{constructor(){this._rows=0,this._rowspan=0}init(t,e,n,a){this._gutterSize=C(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=n,this._direction=a}getBaseTileSize(t,e){return`(${t}% - (${this._gutterSize} * ${e}))`}getTilePosition(t,e){return e===0?"0":p(`(${t} + ${this._gutterSize}) * ${e}`)}getTileSize(t,e){return`(${t} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(t,e,n){let a=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(t,n,a,o),this.setRowStyles(t,e,a,o)}setColStyles(t,e,n,a){let o=this.getBaseTileSize(n,a),y=this._direction==="rtl"?"right":"left";t._setStyle(y,this.getTilePosition(o,e)),t._setStyle("width",p(this.getTileSize(o,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}}class k extends w{constructor(t){super(),this.fixedRowHeight=t}init(t,e,n,a){if(super.init(t,e,n,a),this.fixedRowHeight=C(this.fixedRowHeight),!E.test(this.fixedRowHeight)&&(typeof ngDevMode>"u"||ngDevMode))throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`)}setRowStyles(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",p(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",p(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}}class R extends w{constructor(t){super(),this._parseRatio(t)}setRowStyles(t,e,n,a){let o=n/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,a),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",p(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",p(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(t){const e=t.split(":");if(e.length!==2&&(typeof ngDevMode>"u"||ngDevMode))throw Error(`mat-grid-list: invalid ratio given for row-height: "${t}"`);this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}}class z extends w{setRowStyles(t,e){let n=100/this._rowspan,a=(this._rows-1)/this._rows,o=this.getBaseTileSize(n,a);t._setStyle("top",this.getTilePosition(o,e)),t._setStyle("height",p(this.getTileSize(o,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}}function p(r){return`calc(${r})`}function C(r){return r.match(/([A-Za-z%]+)$/)?r:`${r}px`}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const H="fit";class d{constructor(t,e){this._element=t,this._dir=e,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,x.coerceNumberProperty)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const e=`${t??""}`;e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){if(!this.cols&&(typeof ngDevMode>"u"||ngDevMode))throw Error('mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">')}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===H?this._tileStyler=new z:t&&t.indexOf(":")>-1?this._tileStyler=new R(t):this._tileStyler=new k(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new T);const t=this._tileCoordinator,e=this._tiles.filter(a=>!a._gridList||a._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,e),this._tileStyler.init(this.gutterSize,t,this.cols,n),e.forEach((a,o)=>{const y=t.positions[o];this._tileStyler.setStyle(a,y.row,y.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}d.\u0275fac=function(t){return new(t||d)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(v.Directionality,8))},d.\u0275cmp=i.\u0275\u0275defineComponent({type:d,selectors:[["mat-grid-list"]],contentQueries:function(t,e,n){if(t&1&&i.\u0275\u0275contentQuery(n,l,5),t&2){let a;i.\u0275\u0275queryRefresh(a=i.\u0275\u0275loadQuery())&&(e._tiles=a)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,e){t&2&&i.\u0275\u0275attribute("cols",e.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[i.\u0275\u0275ProvidersFeature([{provide:_,useExisting:d}])],ngContentSelectors:S,decls:2,vars:0,template:function(t,e){t&1&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"div"),i.\u0275\u0275projection(1),i.\u0275\u0275elementEnd())},styles:[G],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(d,[{type:i.Component,args:[{selector:"mat-grid-list",exportAs:"matGridList",host:{class:"mat-grid-list","[attr.cols]":"cols"},providers:[{provide:_,useExisting:d}],changeDetection:i.ChangeDetectionStrategy.OnPush,encapsulation:i.ViewEncapsulation.None,template:`<div>
  <ng-content></ng-content>
</div>`,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"]}]}],function(){return[{type:i.ElementRef},{type:v.Directionality,decorators:[{type:i.Optional}]}]},{_tiles:[{type:i.ContentChildren,args:[l,{descendants:!0}]}],cols:[{type:i.Input}],gutterSize:[{type:i.Input}],rowHeight:[{type:i.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=i.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=i.\u0275\u0275defineInjector({imports:[s.MatLineModule,s.MatCommonModule,s.MatLineModule,s.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(u,[{type:i.NgModule,args:[{imports:[s.MatLineModule,s.MatCommonModule],exports:[d,l,g,s.MatLineModule,s.MatCommonModule,c,m,h],declarations:[d,l,g,c,m,h]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const L=T;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
