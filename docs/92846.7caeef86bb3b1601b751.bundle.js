"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[92846],{92846:(e,t,a)=>{a.r(t),a.d(t,{evaluate:()=>m,toKuiTableForUpdateFromCustomColumns:()=>d,toKuiTableFromCustomColumns:()=>y,default:()=>k});var o=a(51437),n=a.n(o),r=a(91119),u=a(84323),s=a(58853),c=a(25218),i=a(98919);function l(e){const t=e.match(/custom-columns=(.+)/);if(!t)throw new Error("Invalid custom column specification"+e);return t[1].split(/,/).map((e=>{const t=e.indexOf(":");if(t>=0){const a=e.slice(0,t),o=e.slice(t+1);if(a&&o)return{key:a,query:n().parse("$"+o.replace(/\.(\w+-\w+)/g,((e,t)=>`["${t}"]`)))}}throw new Error("Invalid custom column: "+e)})).filter((e=>e))}function m(e,t,a,o,c){const l=c.map((({key:t,query:a})=>{const r=n().value(e,a);return{key:t,value:r,tag:i.Qi[t]||i.VH[o]&&i.VH[o][t],outerCSS:i.jT[t],css:[i.RA[t],i.O2[r],/Ready/i.test(t)?(0,i.QW)(r):"",/failed/i.test(r)?u.Z.Red:""].join(" ")}}));return{key:l[0].key,rowKey:(0,i.Rx)(e.metadata,o),name:l[0].value,attributes:l.slice(1),onclick:(0,s.QG)(t,`${a} get ${o} ${(0,r.encodeComponent)(e.metadata.name)} -o yaml -n ${e.metadata.namespace}`)}}function d(e,t,a,o,n){const r=l(n),u={name:r[0].key,attributes:r.slice(1).map((e=>({key:e.key,value:e.key})))},s=[m(e,t,a,o,r)];return(0,i.jU)({header:u,body:s})}function y(e,t,a,o,n){const r=l(n),u={name:r[0].key,attributes:r.slice(1).map((e=>({key:e.key,value:e.key})))},s=(0,c.oe)(e)?e.items.map((e=>m(e,t,a,o,r))):[m(e,t,a,o,r)];return(0,i.jU)({header:u,body:s,resourceVersion:e.metadata.resourceVersion})}const k=y}}]);