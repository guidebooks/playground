"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[5746],{5746:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s(67294),o=s(91119),a=s(55080),r=s(58065),n=s(64639);const h=(0,o.i18n)("plugin-client-common");class d extends n.default{constructor(t){super(t),this.state=Object.assign(this.state,{isWatching:!0,lastUpdatedMillis:Date.now(),progress:{},progressVersion:1})}componentDidMount(){this.initWatch()}isWatching(){return this.state.isWatching}dataAttrs(){return{"data-table-watching":this.isWatching(),"data-table-as-grid":this.state.asGrid}}render(){return this.props.onRender&&setTimeout((()=>this.props.onRender(!0))),super.render()}initWatch(){const t=this.update.bind(this),e=this.progress.bind(this),s=this.batchUpdateDone.bind(this),i=this.offline.bind(this),o=this.done.bind(this),a=this.allOffline.bind(this),r=this.header.bind(this),n=this.footer.bind(this),h=this.setBody.bind(this);this.props.response.watch.init({update:t,progress:e,setBody:h,batchUpdateDone:s,offline:i,done:o,allOffline:a,header:r,footer:n})}pauseWatch(){this.props.response.watch.xoff?this.props.response.watch.xoff():this.props.response.watch.abort(),this.setState({isWatching:!1})}resumeWatch(){this.props.response.watch.xon&&(this.props.response.watch.xon(),this.setState({isWatching:!0}))}watchControll(){this.state.isWatching?this.pauseWatch():this.resumeWatch()}caption(){if(this.state.lastUpdatedMillis){const t=this.state.isWatching?"Eye":"EyeSlash",e=this.state.isWatching?"green-text":"sub-text",s=(0,o.isSuspendable)(this.props.response.watch)?this.state.isWatching?h("Abort watcher"):"":this.state.isWatching?h("Pause watcher"):h("Resume watcher");return i.createElement(i.Fragment,null,i.createElement("a",{href:"#",className:"kui--toolbar-button-watch","data-online":this.state.isWatching,onClick:this.watchControll.bind(this),onMouseDown:t=>t.preventDefault(),title:s,"aria-label":s},i.createElement(a.default,{icon:t,className:"small-right-pad "+e})),h("Last updated",new Date(this.state.lastUpdatedMillis).toLocaleTimeString()))}}setBody(t){let e=!1,s=!1;const i=(t,e)=>t.findIndex((({rowKey:t,name:s})=>t&&e.rowKey?t===e.rowKey:s===e.name));this.props.response.body.forEach(((s,o)=>{-1===i(t,s)&&(e=!0,this.props.response.body.splice(o,1))})),t.forEach((t=>{const e=i(this.props.response.body,t);-1!==e&&(0,o.sameRow)(t,this.props.response.body[e])||(s=!0,this.update(t,!0,void 0,e))})),s?this.batchUpdateDone():e&&this.setState({lastUpdatedMillis:Date.now()})}offline(t){const e=this.state.body,s=e.findIndex((e=>e.rowKey?e.rowKey===t:e.name===t));if(-1===s)console.error("table row went offline, but not found in view model",t,e);else{const t=this.props.response.body[s];t.attributes.forEach((t=>{/STATUS/i.test(t.key)&&(t.value="Offline",t.css="red-background")}));const i=t,o=e.slice(0,s).concat([i]).concat(e.slice(s+1));this.setState({lastUpdatedMillis:Date.now(),body:o})}}allOffline(){this.props.response.body=[],this.setState({isWatching:!1,body:[],lastUpdatedMillis:Date.now()})}progress(...t){this.setState((e=>{const s=t[0];if(this.props.response.body[s.rowIdx]){const t=this.props.response.body[s.rowIdx].rowKey;e.progress[t]=s}return{progressVersion:e.progressVersion+1}}))}update(t,e=!1,s=!0,i){if(!this.props.response.header){const e=(0,r.Z)([t]);e&&this.header(e)}const o=e=>e.findIndex((e=>e.rowKey&&t.rowKey?e.rowKey===t.rowKey:e.name===t.name)),a=void 0!==i?i:o(this.props.response.body);if(-1===a?this.props.response.body.push(t):this.props.response.body[a]=t,e){this._deferredUpdate||(this._deferredUpdate=[]);const e=o(this._deferredUpdate);e>=0?this._deferredUpdate[e]=t:this._deferredUpdate.push(t)}else this.setState({lastUpdatedMillis:Date.now()})}batchUpdateDone(){this._deferredUpdate&&(this._deferredUpdate=void 0,this.setState((t=>({body:t.body.slice(),lastUpdatedMillis:Date.now()}))))}header(t){(0,o.sameRow)(t,this.previouslyReceivedHeader)||(this.previouslyReceivedHeader=t,this.props.response.header=t,this.setState({header:t,lastUpdatedMillis:Date.now()}))}footer(t){this.props.response.footer=this.props.response.footer?this.props.response.footer.concat(t):t,this.setState((e=>({lastUpdatedMillis:Date.now(),footer:e.footer?e.footer.concat(t):t})))}done(){this.setState({isWatching:!1,lastUpdatedMillis:Date.now()})}}}}]);