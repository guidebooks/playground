"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[7775],{87775:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=s(67294),n=s(11894),a=s(31833);const i=r.lazy((()=>s.e(3816).then(s.bind(s,23816))));class c extends r.PureComponent{render(){return r.createElement(r.Suspense,{fallback:r.createElement("div",null)},r.createElement(i,Object.assign({},this.props)))}}var u=s(17425);const o=r.lazy((()=>s.e(1126).then(s.bind(s,71126))));class d extends u.Z{constructor(e){super(e),this._onChange=this.changeCurrent.bind(this),this.state=this.getState(e.tab,e.response)}defaultWidth(){return"70%"}getState(e,t){const s=[];return t.menus.forEach((t=>{const r=(0,a.getStateFromMMR)(e,{modes:t.items});s.push(Object.assign({title:t.label},r))})),{allNavs:s,allLinks:t.links||[],current:{menuIdx:0,tabIdx:s[0].currentTabIndex},response:t}}changeCurrent(e,t){this.setState((({current:s})=>({current:Object.assign({},s,{menuIdx:e,tabIdx:t})})))}nav(){return r.createElement(c,{tab:this.props.tab,current:this.current,changeCurrent:this._onChange})}bodyContent(e,t=0){return r.createElement(r.Suspense,{fallback:r.createElement("div",null)},r.createElement(o,{key:`${t}-${e}`,tab:this.props.tab,mode:this.current.allNavs[t].tabs[e],isActive:!0,args:{argsForMode:void 0,argvNoOptions:this.props.argvNoOptions,parsedOptions:this.props.parsedOptions},response:{modes:this.current.response.menus[t].items},execUUID:this.props.execUUID}))}bodyContainer(e,t){return r.createElement("div",{className:"kui--sidecar-content"},this.bodyContent(e,t))}render(){return this.current&&this.current.response?r.createElement("div",{className:"kui--sidecar kui--nav-view kui--sidecar-nested "+this.width(),ref:this.dom,"data-view":"leftnav"}," ",this.title({breadcrumbs:this.current.response.breadcrumbs}),r.createElement("div",{className:"kui--sidecar-header-and-body zoomable"},this.nav(),this.bodyContainer(this.current.current.tabIdx,this.current.current.menuIdx))):r.createElement(n.gb,null)}}}}]);