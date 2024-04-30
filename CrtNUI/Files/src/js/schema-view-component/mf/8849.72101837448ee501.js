(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[8849],{18849:(F,m,T)=>{T.r(m),T.d(m,{MatNestedTreeNode:()=>i,MatTree:()=>c,MatTreeFlatDataSource:()=>b,MatTreeFlattener:()=>I,MatTreeModule:()=>v,MatTreeNestedDataSource:()=>O,MatTreeNode:()=>_,MatTreeNodeDef:()=>l,MatTreeNodeOutlet:()=>s,MatTreeNodePadding:()=>u,MatTreeNodeToggle:()=>p});var r=T(28756),e=T(94450),N=T(66385),x=T(3127),y=T(60317),D=T(21322),M=T(27049);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const C=(0,N.mixinTabIndex)((0,N.mixinDisabled)(r.CdkTreeNode));class _ extends C{constructor(t,n,d){super(t,n),this.tabIndex=Number(d)||0}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}}_.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(r.CdkTree),e.\u0275\u0275injectAttribute("tabindex"))},_.\u0275dir=e.\u0275\u0275defineDirective({type:_,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["matTreeNode"],features:[e.\u0275\u0275ProvidersFeature([{provide:r.CdkTreeNode,useExisting:_}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(_,[{type:e.Directive,args:[{selector:"mat-tree-node",exportAs:"matTreeNode",inputs:["role","disabled","tabIndex"],providers:[{provide:r.CdkTreeNode,useExisting:_}],host:{class:"mat-tree-node"}}]}],function(){return[{type:e.ElementRef},{type:r.CdkTree},{type:void 0,decorators:[{type:e.Attribute,args:["tabindex"]}]}]},null)}();class l extends r.CdkTreeNodeDef{}l.\u0275fac=function(){let a;return function(n){return(a||(a=e.\u0275\u0275getInheritedFactory(l)))(n||l)}}(),l.\u0275dir=e.\u0275\u0275defineDirective({type:l,selectors:[["","matTreeNodeDef",""]],inputs:{when:["matTreeNodeDefWhen","when"],data:["matTreeNode","data"]},features:[e.\u0275\u0275ProvidersFeature([{provide:r.CdkTreeNodeDef,useExisting:l}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(l,[{type:e.Directive,args:[{selector:"[matTreeNodeDef]",inputs:["when: matTreeNodeDefWhen"],providers:[{provide:r.CdkTreeNodeDef,useExisting:l}]}]}],null,{data:[{type:e.Input,args:["matTreeNode"]}]})}();class i extends r.CdkNestedTreeNode{get disabled(){return this._disabled}set disabled(t){this._disabled=(0,x.coerceBooleanProperty)(t)}get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(t){this._tabIndex=t??0}constructor(t,n,d,o){super(t,n,d),this._disabled=!1,this.tabIndex=Number(o)||0}ngOnInit(){super.ngOnInit()}ngAfterContentInit(){super.ngAfterContentInit()}ngOnDestroy(){super.ngOnDestroy()}}i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(r.CdkTree),e.\u0275\u0275directiveInject(e.IterableDiffers),e.\u0275\u0275injectAttribute("tabindex"))},i.\u0275dir=e.\u0275\u0275defineDirective({type:i,selectors:[["mat-nested-tree-node"]],hostAttrs:[1,"mat-nested-tree-node"],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex",node:["matNestedTreeNode","node"]},exportAs:["matNestedTreeNode"],features:[e.\u0275\u0275ProvidersFeature([{provide:r.CdkNestedTreeNode,useExisting:i},{provide:r.CdkTreeNode,useExisting:i},{provide:r.CDK_TREE_NODE_OUTLET_NODE,useExisting:i}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(i,[{type:e.Directive,args:[{selector:"mat-nested-tree-node",exportAs:"matNestedTreeNode",inputs:["role","disabled","tabIndex"],providers:[{provide:r.CdkNestedTreeNode,useExisting:i},{provide:r.CdkTreeNode,useExisting:i},{provide:r.CDK_TREE_NODE_OUTLET_NODE,useExisting:i}],host:{class:"mat-nested-tree-node"}}]}],function(){return[{type:e.ElementRef},{type:r.CdkTree},{type:e.IterableDiffers},{type:void 0,decorators:[{type:e.Attribute,args:["tabindex"]}]}]},{node:[{type:e.Input,args:["matNestedTreeNode"]}],disabled:[{type:e.Input}],tabIndex:[{type:e.Input}]})}();class u extends r.CdkTreeNodePadding{get level(){return this._level}set level(t){this._setLevelInput(t)}get indent(){return this._indent}set indent(t){this._setIndentInput(t)}}u.\u0275fac=function(){let a;return function(n){return(a||(a=e.\u0275\u0275getInheritedFactory(u)))(n||u)}}(),u.\u0275dir=e.\u0275\u0275defineDirective({type:u,selectors:[["","matTreeNodePadding",""]],inputs:{level:["matTreeNodePadding","level"],indent:["matTreeNodePaddingIndent","indent"]},features:[e.\u0275\u0275ProvidersFeature([{provide:r.CdkTreeNodePadding,useExisting:u}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(u,[{type:e.Directive,args:[{selector:"[matTreeNodePadding]",providers:[{provide:r.CdkTreeNodePadding,useExisting:u}]}]}],null,{level:[{type:e.Input,args:["matTreeNodePadding"]}],indent:[{type:e.Input,args:["matTreeNodePaddingIndent"]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s{constructor(t,n){this.viewContainer=t,this._node=n}}s.\u0275fac=function(t){return new(t||s)(e.\u0275\u0275directiveInject(e.ViewContainerRef),e.\u0275\u0275directiveInject(r.CDK_TREE_NODE_OUTLET_NODE,8))},s.\u0275dir=e.\u0275\u0275defineDirective({type:s,selectors:[["","matTreeNodeOutlet",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:r.CdkTreeNodeOutlet,useExisting:s}])]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(s,[{type:e.Directive,args:[{selector:"[matTreeNodeOutlet]",providers:[{provide:r.CdkTreeNodeOutlet,useExisting:s}]}]}],function(){return[{type:e.ViewContainerRef},{type:void 0,decorators:[{type:e.Inject,args:[r.CDK_TREE_NODE_OUTLET_NODE]},{type:e.Optional}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class c extends r.CdkTree{}c.\u0275fac=function(){let a;return function(n){return(a||(a=e.\u0275\u0275getInheritedFactory(c)))(n||c)}}(),c.\u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["mat-tree"]],viewQuery:function(t,n){if(t&1&&e.\u0275\u0275viewQuery(s,7),t&2){let d;e.\u0275\u0275queryRefresh(d=e.\u0275\u0275loadQuery())&&(n._nodeOutlet=d.first)}},hostAttrs:["role","tree",1,"mat-tree"],exportAs:["matTree"],features:[e.\u0275\u0275ProvidersFeature([{provide:r.CdkTree,useExisting:c}]),e.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(t,n){t&1&&e.\u0275\u0275elementContainer(0,0)},dependencies:[s],styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}"],encapsulation:2}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(c,[{type:e.Component,args:[{selector:"mat-tree",exportAs:"matTree",template:"<ng-container matTreeNodeOutlet></ng-container>",host:{class:"mat-tree",role:"tree"},encapsulation:e.ViewEncapsulation.None,changeDetection:e.ChangeDetectionStrategy.Default,providers:[{provide:r.CdkTree,useExisting:c}],styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}"]}]}],null,{_nodeOutlet:[{type:e.ViewChild,args:[s,{static:!0}]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class p extends r.CdkTreeNodeToggle{}p.\u0275fac=function(){let a;return function(n){return(a||(a=e.\u0275\u0275getInheritedFactory(p)))(n||p)}}(),p.\u0275dir=e.\u0275\u0275defineDirective({type:p,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:["matTreeNodeToggleRecursive","recursive"]},features:[e.\u0275\u0275ProvidersFeature([{provide:r.CdkTreeNodeToggle,useExisting:p}]),e.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(p,[{type:e.Directive,args:[{selector:"[matTreeNodeToggle]",providers:[{provide:r.CdkTreeNodeToggle,useExisting:p}],inputs:["recursive: matTreeNodeToggleRecursive"]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const E=[i,l,u,p,c,_,s];class v{}v.\u0275fac=function(t){return new(t||v)},v.\u0275mod=e.\u0275\u0275defineNgModule({type:v}),v.\u0275inj=e.\u0275\u0275defineInjector({imports:[r.CdkTreeModule,N.MatCommonModule,N.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(v,[{type:e.NgModule,args:[{imports:[r.CdkTreeModule,N.MatCommonModule],exports:[N.MatCommonModule,E],declarations:E}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class I{constructor(t,n,d,o){this.transformFunction=t,this.getLevel=n,this.isExpandable=d,this.getChildren=o}_flattenNode(t,n,d,o){const f=this.transformFunction(t,n);if(d.push(f),this.isExpandable(f)){const g=this.getChildren(t);g&&(Array.isArray(g)?this._flattenChildren(g,n,d,o):g.pipe((0,M.take)(1)).subscribe(h=>{this._flattenChildren(h,n,d,o)}))}return d}_flattenChildren(t,n,d,o){t.forEach((f,g)=>{let h=o.slice();h.push(g!=t.length-1),this._flattenNode(f,n+1,d,h)})}flattenNodes(t){let n=[];return t.forEach(d=>this._flattenNode(d,0,n,[])),n}expandFlattenedNodes(t,n){let d=[],o=[];return o[0]=!0,t.forEach(f=>{let g=!0;for(let h=0;h<=this.getLevel(f);h++)g=g&&o[h];g&&d.push(f),this.isExpandable(f)&&(o[this.getLevel(f)+1]=n.isExpanded(f))}),d}}class b extends y.DataSource{get data(){return this._data.value}set data(t){this._data.next(t),this._flattenedData.next(this._treeFlattener.flattenNodes(this.data)),this._treeControl.dataNodes=this._flattenedData.value}constructor(t,n,d){super(),this._treeControl=t,this._treeFlattener=n,this._flattenedData=new D.BehaviorSubject([]),this._expandedData=new D.BehaviorSubject([]),this._data=new D.BehaviorSubject([]),d&&(this.data=d)}connect(t){return(0,D.merge)(t.viewChange,this._treeControl.expansionModel.changed,this._flattenedData).pipe((0,M.map)(()=>(this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value,this._treeControl)),this._expandedData.value)))}disconnect(){}}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class O extends y.DataSource{constructor(){super(...arguments),this._data=new D.BehaviorSubject([])}get data(){return this._data.value}set data(t){this._data.next(t)}connect(t){return(0,D.merge)(t.viewChange,this._data).pipe((0,M.map)(()=>this.data))}disconnect(){}}/**
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
