(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[6178],{86178:(ut,et,S)=>{S.r(et),S.d(et,{BaseChartDirective:()=>A,ChartsModule:()=>j,ThemeService:()=>O,defaultColors:()=>q,monkeyPatchChartJsLegend:()=>pt,monkeyPatchChartJsTooltip:()=>ft});var i=S(94450),ct=S.n(i),V=S(33936),gt=S.n(V),rt=S(21322),Ct=S.n(rt),at=S(97600),vt=S.n(at);const q=[[255,99,132],[54,162,235],[255,206,86],[231,233,237],[75,192,192],[151,187,205],[220,220,220],[247,70,74],[70,191,189],[253,180,92],[148,159,177],[77,83,96]];function nt(r,t,e){if(r==="pie"||r==="doughnut")return tt(G(e));if(r==="polarArea")return dt(G(e));if(r==="line"||r==="radar")return lt(st(t));if(r==="bar"||r==="horizontalBar")return ht(st(t));if(r==="bubble"||r==="scatter")return tt(G(e));throw new Error(`getColors - Unsupported chart type ${r}`)}function b(r,t){return"rgba("+r.concat(t).join(",")+")"}function z(r,t){return Math.floor(Math.random()*(t-r+1))+r}function lt(r){return{backgroundColor:b(r,.4),borderColor:b(r,1),pointBackgroundColor:b(r,1),pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:b(r,.8)}}function ht(r){return{backgroundColor:b(r,.6),borderColor:b(r,1),hoverBackgroundColor:b(r,.8),hoverBorderColor:b(r,1)}}function tt(r){return{backgroundColor:r.map(t=>b(t,.6)),borderColor:r.map(()=>"#fff"),pointBackgroundColor:r.map(t=>b(t,1)),pointBorderColor:r.map(()=>"#fff"),pointHoverBackgroundColor:r.map(t=>b(t,1)),pointHoverBorderColor:r.map(t=>b(t,1))}}function dt(r){return{backgroundColor:r.map(t=>b(t,.6)),borderColor:r.map(t=>b(t,1)),hoverBackgroundColor:r.map(t=>b(t,.8)),hoverBorderColor:r.map(t=>b(t,1))}}function ot(){return[z(0,255),z(0,255),z(0,255)]}function st(r){return q[r]||ot()}function G(r){const t=new Array(r);for(let e=0;e<r;e++)t[e]=q[e]||ot();return t}class O{constructor(){this.pColorschemesOptions={},this.colorschemesOptions=new rt.BehaviorSubject({})}setColorschemesOptions(t){this.pColorschemesOptions=t,this.colorschemesOptions.next(t)}getColorschemesOptions(){return this.pColorschemesOptions}}O.\u0275fac=function(t){return new(t||O)},O.\u0275prov=i.\u0275\u0275defineInjectable({token:O,factory:O.\u0275fac,providedIn:"root"}),O.ctorParameters=()=>[],O.ngInjectableDef=(0,i.\u0275\u0275defineInjectable)({factory:function(){return new O},token:O,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(O,[{type:i.Injectable,args:[{providedIn:"root"}]}],function(){return[]},null)}();const d={Default:0,Update:1,Refresh:2};d[d.Default]="Default",d[d.Update]="Update",d[d.Refresh]="Refresh";class A{constructor(t,e){this.element=t,this.themeService=e,this.options={},this.chartClick=new i.EventEmitter,this.chartHover=new i.EventEmitter,this.old={dataExists:!1,dataLength:0,datasetsExists:!1,datasetsLength:0,datasetsDataObjects:[],datasetsDataLengths:[],colorsExists:!1,colors:[],labelsExist:!1,labels:[],legendExists:!1,legend:{}},this.subs=[]}static registerPlugin(t){V.Chart.plugins.register(t)}static unregisterPlugin(t){V.Chart.plugins.unregister(t)}ngOnInit(){this.ctx=this.element.nativeElement.getContext("2d"),this.refresh(),this.subs.push(this.themeService.colorschemesOptions.subscribe(t=>this.themeChanged(t)))}themeChanged(t){this.refresh()}ngDoCheck(){if(!this.chart)return;let t=d.Default;const e=a=>{t=a>t?a:t};switch(!!this.data!==this.old.dataExists&&(this.propagateDataToDatasets(this.data),this.old.dataExists=!!this.data,e(d.Update)),this.data&&this.data.length!==this.old.dataLength&&(this.old.dataLength=this.data&&this.data.length||0,e(d.Update)),!!this.datasets!==this.old.datasetsExists&&(this.old.datasetsExists=!!this.datasets,e(d.Update)),this.datasets&&this.datasets.length!==this.old.datasetsLength&&(this.old.datasetsLength=this.datasets&&this.datasets.length||0,e(d.Update)),this.datasets&&this.datasets.filter((a,s)=>a.data!==this.old.datasetsDataObjects[s]).length&&(this.old.datasetsDataObjects=this.datasets.map(a=>a.data),e(d.Update)),this.datasets&&this.datasets.filter((a,s)=>a.data.length!==this.old.datasetsDataLengths[s]).length&&(this.old.datasetsDataLengths=this.datasets.map(a=>a.data.length),e(d.Update)),!!this.colors!==this.old.colorsExists&&(this.old.colorsExists=!!this.colors,this.updateColors(),e(d.Update)),this.colors&&this.colors.filter((a,s)=>!this.colorsEqual(a,this.old.colors[s])).length&&(this.old.colors=this.colors.map(a=>this.copyColor(a)),this.updateColors(),e(d.Update)),!!this.labels!==this.old.labelsExist&&(this.old.labelsExist=!!this.labels,e(d.Update)),this.labels&&this.labels.filter((a,s)=>!this.labelsEqual(a,this.old.labels[s])).length&&(this.old.labels=this.labels.map(a=>this.copyLabel(a)),e(d.Update)),!!this.options.legend!==this.old.legendExists&&(this.old.legendExists=!!this.options.legend,e(d.Refresh)),this.options.legend&&this.options.legend.position!==this.old.legend.position&&(this.old.legend.position=this.options.legend.position,e(d.Refresh)),t){case d.Default:break;case d.Update:this.update();break;case d.Refresh:this.refresh();break}}copyLabel(t){return Array.isArray(t)?[...t]:t}labelsEqual(t,e){return Array.isArray(t)===Array.isArray(e)&&(Array.isArray(t)||t===e)&&(!Array.isArray(t)||t.length===e.length)&&(!Array.isArray(t)||t.filter((a,s)=>a!==e[s]).length===0)}copyColor(t){return{backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderColor:t.borderColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,pointBorderColor:t.pointBorderColor,pointBackgroundColor:t.pointBackgroundColor,pointBorderWidth:t.pointBorderWidth,pointRadius:t.pointRadius,pointHoverRadius:t.pointHoverRadius,pointHitRadius:t.pointHitRadius,pointHoverBackgroundColor:t.pointHoverBackgroundColor,pointHoverBorderColor:t.pointHoverBorderColor,pointHoverBorderWidth:t.pointHoverBorderWidth,pointStyle:t.pointStyle,hoverBackgroundColor:t.hoverBackgroundColor,hoverBorderColor:t.hoverBorderColor,hoverBorderWidth:t.hoverBorderWidth}}colorsEqual(t,e){return!t!=!e?!1:!t||t.backgroundColor===e.backgroundColor&&t.borderWidth===e.borderWidth&&t.borderColor===e.borderColor&&t.borderCapStyle===e.borderCapStyle&&t.borderDash===e.borderDash&&t.borderDashOffset===e.borderDashOffset&&t.borderJoinStyle===e.borderJoinStyle&&t.pointBorderColor===e.pointBorderColor&&t.pointBackgroundColor===e.pointBackgroundColor&&t.pointBorderWidth===e.pointBorderWidth&&t.pointRadius===e.pointRadius&&t.pointHoverRadius===e.pointHoverRadius&&t.pointHitRadius===e.pointHitRadius&&t.pointHoverBackgroundColor===e.pointHoverBackgroundColor&&t.pointHoverBorderColor===e.pointHoverBorderColor&&t.pointHoverBorderWidth===e.pointHoverBorderWidth&&t.pointStyle===e.pointStyle&&t.hoverBackgroundColor===e.hoverBackgroundColor&&t.hoverBorderColor===e.hoverBorderColor&&t.hoverBorderWidth===e.hoverBorderWidth}updateColors(){this.datasets.forEach((t,e)=>{this.colors&&this.colors[e]?Object.assign(t,this.colors[e]):Object.assign(t,nt(this.chartType,e,t.data.length),Object.assign({},t))})}ngOnChanges(t){let e=d.Default;const a=s=>{e=s>e?s:e};switch(t.hasOwnProperty("data")&&t.data.currentValue&&(this.propagateDataToDatasets(t.data.currentValue),a(d.Update)),t.hasOwnProperty("datasets")&&t.datasets.currentValue&&(this.propagateDatasetsToData(t.datasets.currentValue),a(d.Update)),t.hasOwnProperty("labels")&&(this.chart&&(this.chart.data.labels=t.labels.currentValue),a(d.Update)),t.hasOwnProperty("legend")&&(this.chart&&(this.chart.config.options.legend.display=t.legend.currentValue,this.chart.generateLegend()),a(d.Update)),t.hasOwnProperty("options")&&a(d.Refresh),e){case d.Update:this.update();break;case d.Refresh:case d.Default:this.refresh();break}}ngOnDestroy(){this.chart&&(this.chart.destroy(),this.chart=void 0),this.subs.forEach(t=>t.unsubscribe())}update(t,e){if(this.chart)return this.chart.update(t,e)}hideDataset(t,e){this.chart.getDatasetMeta(t).hidden=e,this.chart.update()}isDatasetHidden(t){return this.chart.getDatasetMeta(t).hidden}toBase64Image(){return this.chart.toBase64Image()}getChartConfiguration(){const t=this.getDatasets(),e=Object.assign({},this.options);this.legend===!1&&(e.legend={display:!1}),e.hover=e.hover||{},e.hover.onHover||(e.hover.onHover=(h,u)=>{u&&!u.length||this.chartHover.emit({event:h,active:u})}),e.onClick||(e.onClick=(h,u)=>{this.chartClick.emit({event:h,active:u})});const a=this.smartMerge(e,this.themeService.getColorschemesOptions());return{type:this.chartType,data:{labels:this.labels||[],datasets:t},plugins:this.plugins,options:a}}getChartBuilder(t){const e=this.getChartConfiguration();return new V.Chart(t,e)}smartMerge(t,e,a=0){if(a===0&&(t=(0,at.cloneDeep)(t)),Object.keys(e).forEach(h=>{if(Array.isArray(e[h])){const u=t[h];u&&u.forEach(K=>{this.smartMerge(K,e[h][0],a+1)})}else typeof e[h]=="object"?(h in t||(t[h]={}),this.smartMerge(t[h],e[h],a+1)):t[h]=e[h]}),a===0)return t}isMultiLineLabel(t){return Array.isArray(t)}joinLabel(t){return t?this.isMultiLineLabel(t)?t.join(" "):t:null}propagateDatasetsToData(t){this.data=this.datasets.map(e=>e.data),this.chart&&(this.chart.data.datasets=t),this.updateColors()}propagateDataToDatasets(t){this.isMultiDataSet(t)?this.datasets&&t.length===this.datasets.length?this.datasets.forEach((e,a)=>{e.data=t[a]}):(this.datasets=t.map((e,a)=>({data:e,label:this.joinLabel(this.labels[a])||`Label ${a}`})),this.chart&&(this.chart.data.datasets=this.datasets)):this.datasets?(this.datasets[0].data=t,this.datasets.splice(1)):(this.datasets=[{data:t}],this.chart&&(this.chart.data.datasets=this.datasets)),this.updateColors()}isMultiDataSet(t){return Array.isArray(t[0])}getDatasets(){if(!this.datasets&&!this.data)throw new Error(`ng-charts configuration error, data or datasets field are required to render chart ${this.chartType}`);if(this.datasets)return this.propagateDatasetsToData(this.datasets),this.datasets;if(this.data)return this.propagateDataToDatasets(this.data),this.datasets}refresh(){this.chart&&(this.chart.destroy(),this.chart=void 0),this.ctx&&(this.chart=this.getChartBuilder(this.ctx))}}A.\u0275fac=function(t){return new(t||A)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(O))},A.\u0275dir=i.\u0275\u0275defineDirective({type:A,selectors:[["canvas","baseChart",""]],inputs:{options:"options",data:"data",datasets:"datasets",labels:"labels",chartType:"chartType",colors:"colors",legend:"legend",plugins:"plugins"},outputs:{chartClick:"chartClick",chartHover:"chartHover"},exportAs:["base-chart"],features:[i.\u0275\u0275NgOnChangesFeature]}),A.ctorParameters=()=>[{type:i.ElementRef},{type:O}],A.propDecorators={data:[{type:i.Input}],datasets:[{type:i.Input}],labels:[{type:i.Input}],options:[{type:i.Input}],chartType:[{type:i.Input}],colors:[{type:i.Input}],legend:[{type:i.Input}],plugins:[{type:i.Input}],chartClick:[{type:i.Output}],chartHover:[{type:i.Output}]},function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(A,[{type:i.Directive,args:[{selector:"canvas[baseChart]",exportAs:"base-chart"}]}],function(){return[{type:i.ElementRef},{type:O}]},{options:[{type:i.Input}],chartClick:[{type:i.Output}],chartHover:[{type:i.Output}],data:[{type:i.Input}],datasets:[{type:i.Input}],labels:[{type:i.Input}],chartType:[{type:i.Input}],colors:[{type:i.Input}],legend:[{type:i.Input}],plugins:[{type:i.Input}]})}();class j{}j.\u0275fac=function(t){return new(t||j)},j.\u0275mod=i.\u0275\u0275defineNgModule({type:j}),j.\u0275inj=i.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(j,[{type:i.NgModule,args:[{declarations:[A],imports:[],exports:[A]}]}],null,null)}(),function(){(typeof ngJitMode>"u"||ngJitMode)&&i.\u0275\u0275setNgModuleScope(j,{declarations:[A],exports:[A]})}();function pt(){if(typeof Chart>"u"){console.log("Chart not defined (guessing this is a universal build, and I don't know why this happens -- Aviad)");return}const t=Chart.plugins.getAll().filter(o=>o.id==="legend")[0];t._element.prototype.fit=u,t._element.prototype.draw=K;const e=Chart.helpers,a=Chart.defaults,s=e.valueOrDefault;function h(o,M){return o.usePointStyle&&o.boxWidth>M?M:o.boxWidth}function u(){var o=this,M=o.options,p=M.labels,_=M.display,k=o.ctx,m=e.options._parseFont(p),D=m.size,T=o.legendHitBoxes=[],v=o.minSize,U=o.isHorizontal();U?(v.width=o.maxWidth,v.height=_?10:0):(v.width=_?10:0,v.height=o.maxHeight);var $=function(y){return y.map(function(B){return k.measureText(B).width}).reduce(function(B,g){return g>B?g:B},0)};if(_)if(k.font=m.string,U){var H=o.lineWidths=[0],n=o.lineHeights=[],x=0,X=0;k.textAlign="left",k.textBaseline="top",e.each(o.legendItems,function(y,B){var g,l;e.isArray(y.text)?(g=$(y.text),l=D*y.text.length+p.padding):(g=k.measureText(y.text).width,l=D+p.padding),g+=h(p,D)+D/2,H[H.length-1]+g+2*p.padding>v.width&&(n.push(x),x=0,H[H.length-(B>0?0:1)]=0,X++),y.lineOrColumnIndex=X,l>x&&(x=l),T[B]={left:0,top:0,width:g,height:l},H[H.length-1]+=g+p.padding}),n.push(x),v.height+=n.reduce(function(y,B){return y+B},0)}else{var E=p.padding,c=o.columnWidths=[],w=o.columnHeights=[],I=p.padding,L=0,J=0,Y=0;e.each(o.legendItems,function(y,B){var g,l;e.isArray(y.text)?(g=$(y.text),l=D*y.text.length):(g=k.measureText(y.text).width,l=D),g+=h(p,D)+D/2,J+D+2*E>v.height&&(I+=L+p.padding,c.push(L),w.push(J),L=0,J=0,Y++),y.lineOrColumnIndex=Y,L=Math.max(L,g),J+=l+E,T[B]={left:0,top:0,width:g,height:l}}),I+=L,c.push(L),w.push(J),v.width+=I}o.width=v.width,o.height=v.height}function K(){var o=this,M=o.options,p=M.labels,_=a.global,k=_.defaultColor,m=_.elements.line,D=o.height,T=o.columnHeights,v=o.columnWidths,U=o.width,$=o.lineWidths,H=o.lineHeights;if(M.display){var n=o.ctx,x=s(p.fontColor,_.defaultFontColor),X=e.options._parseFont(p),E=X.size,c;n.textAlign="left",n.textBaseline="middle",n.lineWidth=.5,n.strokeStyle=x,n.fillStyle=x,n.font=X.string;var w=h(p,E),I=o.legendHitBoxes,L=function(l,C,f){if(!(isNaN(w)||w<=0)){n.save();var R=s(f.lineWidth,m.borderWidth);if(n.fillStyle=s(f.fillStyle,k),n.lineCap=s(f.lineCap,m.borderCapStyle),n.lineDashOffset=s(f.lineDashOffset,m.borderDashOffset),n.lineJoin=s(f.lineJoin,m.borderJoinStyle),n.lineWidth=R,n.strokeStyle=s(f.strokeStyle,k),n.setLineDash&&n.setLineDash(s(f.lineDash,m.borderDash)),M.labels&&M.labels.usePointStyle){var W=w*Math.SQRT2/2,F=l+w/2,P=C+E/2;e.canvas.drawPoint(n,f.pointStyle,W,F,P)}else R!==0&&n.strokeRect(l,C,w,E),n.fillRect(l,C,w,E);n.restore()}},J=function(l,C,f){n.beginPath(),n.lineWidth=2,n.moveTo(l,C),n.lineTo(l+f,C),n.stroke()},Y=function(l,C,f,R){n.beginPath(),n.lineWidth=2,n.moveTo(l,C),n.lineTo(l+f,C+R),n.moveTo(l,C+R),n.lineTo(l+f,C),n.stroke()},y=function(l,C,f,R){var W=E/2,F=w+W+l,P=C+W;e.isArray(f.text)?e.each(f.text,function(Q,Z){var N=Z*E;n.fillText(Q,F,P+N)}):n.fillText(f.text,F,P),f.hidden&&(e.isArray(f.text)?Y(F,P,R,(f.text.length-1)*(E-1)):J(F,P,R))},B=function(l,C){switch(M.align){case"start":return p.padding;case"end":return l-C;default:return(l-C+p.padding)/2}},g=o.isHorizontal();g?c={x:o.left+B(U,$[0]),y:o.top+p.padding,line:0}:c={x:o.left+p.padding,y:o.top+B(D,T[0]),line:0},e.each(o.legendItems,function(l,C){var f,R,W;l.lineOrColumnIndex>c.line&&(g?(c.y+=H[c.line],c.line=l.lineOrColumnIndex,c.x=o.left+B(U,$[c.line])):(c.x+=v[c.line]+p.padding,c.line=l.lineOrColumnIndex,c.y=o.top+B(D,T[c.line]))),e.isArray(l.text)?(f=l.text.map(function(N){return n.measureText(N).width}).reduce(function(N,it){return it>N?it:N},0),W=E/2*(l.text.length-1),R=E*l.text.length):(f=n.measureText(l.text).width,W=0,R=E);var F=w+E/2+f,P=c.x,Q=c.y,Z=g?Math.trunc((H[c.line]-I[C].height)/2):0;L(P,Q+W+Z,l),I[C].left=P,I[C].top=Q,y(P,Q+Z,l,f),g?c.x+=F+p.padding:c.y+=R+p.padding})}}}function ft(){if(typeof Chart>"u"){console.log("Chart not defined (guessing this is a universal build, and I don't know why this happens -- Aviad)");return}Chart.Tooltip.prototype.drawBody=e;const r=Chart.helpers;function t(a,s){return s==="center"?a.x+a.width/2:s==="right"?a.x+a.width-a.xPadding:a.x+a.xPadding}function e(a,s,h){var u=s.bodyFontSize,K=s.bodySpacing,o=s._bodyAlign,M=s.body,p=s.displayColors,_=s.labelColors,k=0,m=p?t(s,"left"):0,D;h.textAlign=o,h.textBaseline="top",h.font=r.fontString(u,s._bodyFontStyle,s._bodyFontFamily),a.x=t(s,o);var T=function(v){h.fillText(v,a.x+k,a.y),a.y+=u+K};h.fillStyle=s.bodyFontColor,r.each(s.beforeBody,T),k=p&&o!=="right"?o==="center"?u/2+1:u+2:0,r.each(M,function(v,U){D=s.labelTextColors[U],h.fillStyle=D,r.each(v.before,T),p&&(h.fillStyle=s.legendColorBackground,h.fillRect(m,a.y,u,u),h.lineWidth=1,h.strokeStyle=_[U].borderColor,h.strokeRect(m,a.y,u,u),h.fillStyle=_[U].backgroundColor,h.fillRect(m+1,a.y+1,u-2,u-2),h.fillStyle=D),r.each(v.lines,T),r.each(v.after,T)}),k=0,r.each(s.afterBody,T),a.y-=K}}}}]);
