(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[4309],{44309:(x,s,c)=>{c.r(s),c.d(s,{DiagramUtils:()=>h.T,ElementType:()=>r.H,Handlers:()=>r.r,Inject:()=>m});var l=c(4311),u=c.n(l),i={};for(const _ in l)["default","Inject"].indexOf(_)<0&&(i[_]=()=>l[_]);c.d(s,i);var h=c(53452),r=c(74322),E=c(33177),g=c.n(E);const m=E.Inject},53452:(x,s,c)=>{c.d(s,{T:()=>_});var l=c(4311),u=c.n(l),i=c(33177),h=c.n(i),r=c(97600),E=c.n(r),g=c(64960),m=c(74322);class _{static centerViewboxOnElement(t,a){const o=a.viewbox(),e=(0,g.jY)(t),n={x:Math.round(e.x+e.width/2-o.outer.width/2),y:Math.round(e.y+e.height/2-o.outer.height/2),width:o.outer.width,height:o.outer.height};a.viewbox(n),a.zoom(o.scale)}static isLabel(t){return t.type===m.H.label}static isRoot(t){return t.type===m.H.root}static getCorrectSpaceToolDelta(t,a){const o=a.context,e=o.axis,n=o.minAllowedDelta;return n!==null&&(e==="x"&&t.x<n&&(t.x=n),e==="y"&&t.y<n&&(t.y=n)),t}static getOriginalWaypoint(t,a){return[a.y,a.y+a.height].includes(t.y)?{x:t.x,y:a.y+Math.round(a.height/2)}:{x:a.x+Math.round(a.width/2),y:t.y}}getContainersType(){return[]}setProcessRelativePosition(t,a){const o=(e,n)=>{n.id===l.Roots.root.id?(!r.isNumber(e.rx)&&e.x&&(e.rx=e.x),!r.isNumber(e.ry)&&e.y&&(e.ry=e.y)):(!r.isNumber(e.rx)&&e.x&&n.x&&(e.rx=e.x-n.x),!r.isNumber(e.ry)&&e.y&&n.y&&(e.ry=e.y-n.y))};Object.keys((0,i.toObject)(t.elements)).forEach(e=>{const n=t.elements[e],d=t.elements[n.parent];o(n,d||{id:"root1"})}),Object.keys((0,i.toObject)(t.labels)).forEach(e=>{const n=t.labels[e],d=t.connections[n.parent]||t.elements[n.parent];let v=d;if(d)this.isConnection(d)&&(v=t.elements[d.source]);else{const y=`Element with id "${d}" - not found in process "${t.id}"`;a.error(y,{loggerName:"setProcessRelativePosition"}),console.error(y)}o(n,v||{id:"root1"})})}isConnection(t){return m.H.connection===t.type}isFlow(t){return m.H.connection===t.type}findRealElementParent(t,a,o){for(const e of a)if(t.x>e.x&&t.x<e.x+e.width&&t.y>e.y&&t.y<e.y+e.height)return e;return o}getAllContainers(t){const a=this.getContainersType(),o=[];return t.forEach(e=>{if(a.includes(e.type)){const n=e.children?e.children.filter(d=>a.includes(d.type)):[];o.push({container:e,count:n.length})}},this),o.sort((e,n)=>e.count-n.count).map(e=>e.container)}}},74322:(x,s,c)=>{c.d(s,{H:()=>u,r:()=>l});const l={element:{deleteElementsExecuted:"commandStack.elements.delete.executed",paste:"elements.paste",updateLabel:"element.updateLabel",updateLabelExecuted:"commandStack.element.updateLabel.executed",mouseDown:"element.mousedown",doubleClick:"element.dblclick",update:"element.update",updated:"element.updated",typeUpdated:"element.typeUpdated",click:"element.click",updateExecuted:"commandStack.element.update.executed",validation:"element.validation",canUpdateType:"element.canUpdateType"},elements:{create:"elements.create",move:"elements.move",delete:"elements.delete",removing:"elements.removing",updatingTypeValidate:"elements.updatingTypeValidate",canCopy:"elements.canCopy",changed:"elements.changed"},directEditing:{activate:"directEditing.activate",complete:"directEditing.complete",cancel:"directEditing.cancel",resize:"directEditing.resize"},label:{createExecuted:"commandStack.label.create.executed",create:"label.create"},lane:{create:"lane.create",resize:"lane.resize",split:"lane.split"},diagram:{create:"diagram.create",changed:"diagram.changed",initialized:"diagram.initialized"},selection:{changed:"selection.changed"},shape:{createExecuted:"commandStack.shape.create.executed",moveExecuted:"commandStack.shape.move.executed",resizeExecuted:"commandStack.shape.resize.executed",deleteExecuted:"commandStack.shape.delete.executed",move:"shape.move.move",end:"shape.move.end",shapeMove:"shape.move",shapeCreate:"shape.create",shapeResize:"shape.resize",shapeDelete:"shape.delete"},import:{elementAdd:"import.element.add"},connection:{createExecuted:"commandStack.connection.create.executed",update:"connection.update",updateExecuted:"commandStack.connection.update.executed",moveExecuted:"commandStack.connection.move.executed",layoutExecuted:"commandStack.connection.layout.executed",reconnectEndExecuted:"commandStack.connection.reconnectEnd.executed",updateWaypointsExecuted:"commandStack.connection.updateWaypoints.executed",reconnectExecuted:"commandStack.connection.reconnect.executed",deleteExecuted:"commandStack.connection.delete.executed",changeDirection:"connection.changeDirection",changeDirectionExecuted:"commandStack.connection.changeDirection.executed",reconnect:"connection.reconnect",moveConnectionLabel:"connection.move.label",highlight:"commandStack.connection.highlight.executed"},connect:{move:"connect.move",hover:"connect.hover",end:"connect.end"},create:{move:"create.move",end:"create.end"}};var u;(function(i){i.connection="connection",i.root="root",i.shape="shape",i.label="label"})(u||(u={}))}}]);
