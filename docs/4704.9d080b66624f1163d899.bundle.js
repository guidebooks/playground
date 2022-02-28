"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[4704,30617,72625],{30617:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var o=n(67294);const i=o.lazy((()=>Promise.all([n.e(33676),n.e(23749),n.e(20237),n.e(81250)]).then(n.bind(n,6066))));function r(e){return o.createElement(o.Suspense,{fallback:o.createElement("div",null)},o.createElement(i,Object.assign({},e)))}},4704:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(30617),i=n(72625),r=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};const a={command:"card",strict:"card",example:"card [<card body text>] [--title <card title text>]",docs:"Card",optional:[{name:"body",docs:"card body text"},{name:"--title",docs:"Content rendered inside the CardTitle"},{name:"-f",docs:"File that contains the texts"},{name:"--file",docs:"File that contains the texts"}]};function c(e){return r(this,void 0,void 0,(function*(){const t=e.argvNoOptions,n=e.parsedOptions,{title:r}=n,a=n.filename||n.f;if(a){const{data:t}=yield(0,i.fetchMarkdownFile)(a,e);return{react:(0,o.default)({title:r,children:t})}}{const e=t.slice(1);if(e)return{react:(0,o.default)({title:r,children:e})};throw new Error("Invalid arguments: need card body text")}}))}const s=e=>r(void 0,void 0,void 0,(function*(){e.listen("/card",c,{usage:a})}))},72625:(e,t,n)=>{n.r(t),n.d(t,{filepathForResponses:()=>l,fetchMarkdownFile:()=>u,default:()=>f});var o=n(8575),i=n(26470),r=n(91119),a=n(72442),c=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};function s(e){return/^https?:/.test(e)}function d(e,t){if(s(e)){const n=new URL(e);return n.pathname=(0,i.join)(n.pathname,t),n.toString()}return(0,i.join)(e,t)}function l(e){return d(function(e){if(s(e)){const t=new URL(e);return t.pathname=(0,i.dirname)(t.pathname),t.toString()}return(0,i.dirname)(e)}(e),(0,i.basename)(e).replace(/\..*$/,"")+".json")}function u(e,t){return c(this,void 0,void 0,(function*(){const{pathname:n}=/^https?:/.test(e)?new URL(e):{pathname:e};if(/\.md$/.test(n)){const[n,o]=yield Promise.all([(0,a.O)(e,t),(0,a.O)(l(e),t,!0)]);return{data:"string"==typeof n?n:JSON.stringify(n),codeBlockResponses:"string"==typeof o?JSON.parse(o):o}}throw new Error("File extension not support")}))}function p(e){return c(this,void 0,void 0,(function*(){const{edit:t,header:n,preview:a,"snippet-base-path":c,receive:s,send:l,title:p,readonly:f,replace:h}=e.parsedOptions,m=e.parsedOptions.file||e.parsedOptions.f,v=void 0===s&&(void 0!==l||t),y=void 0===s&&void 0===l&&n,w=void 0===l&&(void 0!==s||a),{data:b="#",codeBlockResponses:g}=m?yield u(m,e):{data:e.command.trim().slice(e.command.indexOf(" ")+1).trim().replace(/\\n/g,"\n").replace(/\\t/g,"\t").replace(/--(no-)?(header|edit|preview|readonly|replace)\s*/g,"").replace(/(-t|--title|--send|--receive)\s+\S+\s*/g,"").replace(/^\\#/,"#").replace(/^"/,"").replace(/"$/,""),codeBlockResponses:void 0};m&&f&&r.Events.eventBus.emitWithTabId("/kui/tab/edit/unset",(0,r.getPrimaryTabId)(e.tab));const k=e.parsedOptions["base-url"]?d(e.parsedOptions["base-url"],"{filename}"):m?function(e){if(/^http:/.test(e)){const t=new URL(e);return t.pathname=t.pathname.replace((0,i.basename)(t.pathname),"{filename}"),(0,o.format)(t)}return e.replace((0,i.basename)(e),"{filename}")}(m):void 0;if(void 0!==b)return"#"===b||"commentary"===e.command?{apiVersion:"kui-shell/v1",kind:"CommentaryResponse",props:{edit:v,header:y,preview:w,replace:h,receive:s,send:l,snippetBasePath:c,title:p,children:"",baseUrl:k}}:{apiVersion:"kui-shell/v1",kind:"CommentaryResponse",props:{edit:v,header:y,preview:w,replace:h,receive:s,send:l,snippetBasePath:c,title:p,filepath:m,children:b,codeBlockResponses:g,baseUrl:k}};throw new Error("Insufficient arguments: must specify either --file or -f, or provide a comment on the command line")}))}function f(e){const t={boolean:["edit","header","preview","readonly","replace"]};e.listen("/commentary",p,{outputOnly:!0,flags:t}),e.listen("/#",p,{outputOnly:!0,noCoreRedirect:!0,flags:t})}},72442:(e,t,n)=>{n.d(t,{O:()=>s});var o=n(11227),i=n.n(o),r=n(91119),a=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};const c=i()("plugin-client-common/notebook/load");function s(e,{REPL:t},n=!1){return a(this,void 0,void 0,(function*(){try{if(c("attempting to load guidebook data",e),/^https:/.test(e))return(yield t.rexec(`vfs _fetchfile ${(0,r.encodeComponent)(e)}`)).content[0];{const n=r.Util.absolute(r.Util.expandHomeDir(e)),o=(yield t.rexec(`vfs fstat ${(0,r.encodeComponent)(n)} --with-data`)).content;if(o.isDirectory)throw new Error("Invalid filepath");return o.data}}catch(t){if(c("error loading guidebook data",e,t),n)return;throw t}}))}}}]);