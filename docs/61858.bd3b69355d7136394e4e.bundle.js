"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[61858],{61858:(i,n,o)=>{o.r(n),o.d(n,{default:()=>c});var t=o(21030),e=o(33271),u=function(i,n,o,t){return new(o||(o=Promise))((function(e,u){function d(i){try{c(t.next(i))}catch(i){u(i)}}function r(i){try{c(t.throw(i))}catch(i){u(i)}}function c(i){var n;i.done?e(i.value):(n=i.value,n instanceof o?n:new o((function(i){i(n)}))).then(d,r)}c((t=t.apply(i,n||[])).next())}))};const d=(0,t.i18n)("plugin-client-common/user-settings"),r=["prompt","_for_testing_"],c=i=>u(void 0,void 0,void 0,(function*(){i.listen("/kuiconfig/reset",(()=>u(void 0,void 0,void 0,(function*(){return yield(0,e.mc)(),!0})))),r.forEach((n=>{i.listen(`/kuiconfig/get/${n}`,(()=>u(void 0,void 0,void 0,(function*(){const i=yield(0,e.U2)(n);if(i)return"string"==typeof i||"boolean"==typeof i||"number"==typeof i?i:i.toString();{const i=new Error(d("You have not specified a value for this setting"));throw i.code=404,i}})))),i.listen(`/kuiconfig/set/${n}`,(i=>u(void 0,void 0,void 0,(function*(){return yield(0,e.t8)(n,i.argvNoOptions[3]),!0})))),i.listen(`/kuiconfig/is/set/${n}`,(()=>u(void 0,void 0,void 0,(function*(){return void 0!==(yield(0,e.U2)(n))})))),i.listen(`/kuiconfig/not/set/${n}`,(()=>u(void 0,void 0,void 0,(function*(){return void 0===(yield(0,e.U2)(n))})))),i.listen(`/kuiconfig/unset/${n}`,(()=>u(void 0,void 0,void 0,(function*(){return yield(0,e.zN)(n),!0}))))}))}))}}]);