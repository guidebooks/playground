"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[2633],{42633:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(67294);const i=s.lazy((()=>Promise.all([n.e(7316),n.e(236),n.e(745)]).then(n.bind(n,79291))));function a(e){return s.createElement(i,Object.assign({},e))}var o=n(18495);const r=(0,o.i18n)("plugin-core-support");function c(e){return e.isActive}class l extends s.PureComponent{constructor(e){super(e),this.initEvents(),this.state={isActive:!1}}initEvents(){const e=`/kui-shell/Confirm/v1/tab/${this.props.uuid}`;o.Events.eventChannelUnsafe.on(e,this.onConfirmStart.bind(this))}onConfirmStart({command:e,asking:t,execUUID:n}){this.setState({isActive:!0,command:e,asking:t,execUUID:n})}onConfirm(e){if(c(this.state)){this.setState({isActive:!1});const t=`/kui-shell/Confirm/v1/tab/${this.props.uuid}/execUUID/${this.state.execUUID}/confirmed`;o.Events.eventChannelUnsafe.emit(t,{confirmed:e})}}render(){return c(this.state)?s.createElement(a,{id:"confirm-dialog",isOpen:!0,titleIconVariant:"danger",title:r("pleaseConfirm"),primaryButtonText:r("yesIAmSure"),secondaryButtonText:r("cancel"),onSubmit:()=>this.onConfirm(!0),onClose:()=>this.onConfirm(!1)},s.createElement("p",{className:"bx--modal-content__text"},r("aboutToExecute")),s.createElement("p",{className:"bx--modal-content__text"},s.createElement("strong",{className:"red-text"},this.state.command)),s.createElement("p",{className:"bx--modal-content__text"},this.state.asking||r("areYouSure"))):s.createElement(s.Fragment,null)}}}}]);