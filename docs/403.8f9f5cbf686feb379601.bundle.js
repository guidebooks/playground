"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[403],{40403:(e,t,a)=>{a.r(t),a.d(t,{getNodeData:()=>y,getSystemOverhead:()=>h,strip:()=>p,topNode:()=>v});var r=a(18495),n=a(53450),o=a(67294);function i(e,t){return o.createElement("span",null,e,o.createElement("span",{className:"even-lighter-text"},"／"),t)}function u(e){return function(e){return"number"==typeof e.fraction}(e)?100*e.fraction+"%":e.fractionString}function c(e){const t={backgroundColor:e.color,bodrerRight:"1px solid var(--color-stripe-02)",width:u(e)};return o.createElement("div",{style:{display:"flex",backgroundColor:"var(--color-stripe-01)",height:"1em",width:"5em"}},o.createElement("div",{style:t}))}function l(e){const t={display:"flex",flexDirection:e.flexDirection||"column",justifyContent:e.alignment||"space-between"};return e.onClick?o.createElement("a",{style:t,href:"#",onClick:()=>(0,r.getCurrentTab)().REPL.pexec(e.onClick)},e.children):o.createElement("div",{style:t},e.children)}function s(e){return o.createElement(l,{alignment:"center",flexDirection:"row"},o.createElement(c,Object.assign({},e)),e.text&&o.createElement("span",{className:"even-smaller-text sub-text small-left-pad"},u(e)))}function d(e){return o.createElement(s,Object.assign({},e))}var b=function(e,t,a,r){return new(a||(a=Promise))((function(n,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))};const m=(0,r.i18n)("plugin-kubectl","view-utilization-table");function y(e,t=!1,a=""){return b(this,void 0,void 0,(function*(){const{parsedOptions:r,REPL:n}=e,o=r.l||r.selector||r.label,i=o?`-l ${o}`:"",u=r.context?`--context ${r.context}`:"",c="{'\\\\t'}",l=`kubectl ${u} get nodes ${i} ${(t?"--field-selector=spec.unschedulable=false":"")+(a?t?"":`--field-selector=metadata.name=${a}`:"")} -o=jsonpath={range .items[*]}{.metadata.name}${c}{.status.allocatable.cpu}${c}{.status.allocatable.memory}${c}{.status.capacity.cpu}${c}{.status.capacity.memory}{'\\\\n'}{end}`;return function(e,t,a){return{title:"Nodes",header:{name:"Node",attributes:[{value:"CPU"},{value:"Memory"}]},body:e.split(/\n/).map((e=>{const[r,n,o,i,u]=e.split(/\t/);return{name:r,onclick:`kubectl get node ${r} -o yaml ${a} ${t}`,attributes:[{key:"cpuAllocatable",value:n},{key:"memoryAllocatable",value:o},{key:"cpuCapacity",value:i},{key:"memoryCapacity",value:u}]}}))}}(yield n.qexec(l),i,u)}))}function h(e,t,a=!1){return b(this,void 0,void 0,(function*(){const r=yield y(e,a,t),o=r.body.reduce(((e,t)=>e+n._b.cpuShare(t.attributes[2].value)-n._b.cpuShare(t.attributes[0].value)),0),i=r.body.reduce(((e,t)=>e+n._b.cpuShare(t.attributes[2].value)),0);return{cpuOverhead:o,memOverhead:r.body.reduce(((e,t)=>e+n._b.memShare(t.attributes[3].value)-n._b.memShare(t.attributes[1].value)),0),cpuCapacity:i,memCapacity:r.body.reduce(((e,t)=>e+n._b.memShare(t.attributes[3].value)),0)}}))}function p(e,t,a=0){e.command=0===a?e.command.replace(t,""):e.command.replace(new RegExp(`${t}\\s+\\S+`),""),e.argv.splice(e.argv.indexOf(t),a+1)}function v(e,t){return b(this,void 0,void 0,(function*(){if(e.parsedOptions.summary)return function(e,t){return b(this,void 0,void 0,(function*(){p(e,"--summary");const a=yield t(e);return{mode:"raw",content:{cpuFrac:a.body.reduce(((e,t)=>e+n._b.cpuFraction(t.attributes[1].value)),0)/a.body.length/100,memFrac:a.body.reduce(((e,t)=>e+n._b.cpuFraction(t.attributes[3].value)),0)/a.body.length/100}}}))}(e,t);const[a,r]=yield Promise.all([t(e),y(e,!0)]);a.header.attributes.push({outerCSS:"hide-with-sidecar not-displayed",key:"Allocatable CPU",value:m("Allocatable CPU")}),a.header.attributes.push({outerCSS:"hide-with-sidecar not-displayed",key:"Allocatable Memory",value:m("Allocatable Memory")});const o=a.header.attributes.findIndex((e=>"CPU(cores)"===e.key));o>=0&&(a.header.attributes[o].outerCSS=`${a.header.attributes[o].outerCSS||""} hide-with-sidecar`);const u=a.header.attributes.findIndex((e=>"MEMORY(bytes)"===e.key));u>=0&&(a.header.attributes[u].outerCSS=`${a.header.attributes[u].outerCSS||""} hide-with-sidecar`);const c=a.header.attributes.findIndex((e=>"MEMORY%"===e.key));return a.header.attributes[c].outerCSS=a.header.attributes[c].outerCSS.replace(/hide-with-sidecar/,""),a.body.forEach((t=>{t.onclick=`kubectl top pod --node ${e.REPL.encodeComponent(t.name)}`;const a=t.attributes.find((e=>"CPU(cores)"===e.key));a&&(a.outerCSS=`${a.outerCSS||""} hide-with-sidecar`);const o=t.attributes.find((e=>"CPU%"===e.key));o&&(o.valueDom=d({color:"var(--color-latency-0)",fractionString:o.value,text:!0}));const u=t.attributes.find((e=>"MEMORY%"===e.key));u&&(u.valueDom=d({color:"var(--color-latency-1)",fractionString:u.value,text:!0}));const c=r.body.find((e=>e.name===t.name));c&&(t.attributes[0].valueDom=i(t.attributes[0].value,c.attributes[2].value),t.attributes[2].valueDom=i(t.attributes[2].value,n._b.formatAsBytes(n._b.memShare(c.attributes[3].value))),t.attributes[3].outerCSS=t.attributes[2].outerCSS.replace(/hide-with-sidecar/,""),t.attributes.push({outerCSS:"not-displayed",key:"Allocatable CPU",value:void 0===c?"&emdash;":c.attributes[2].value}),t.attributes.push({outerCSS:"not-displayed",key:"Allocatable Memory",value:void 0===c?"&emdash;":n._b.formatAsBytes(n._b.memShare(c.attributes[3].value))}))})),a}))}}}]);