"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[72625],{72625:(e,t,n)=>{n.r(t),n.d(t,{filepathForResponses:()=>d,fetchMarkdownFile:()=>l,default:()=>f});var o=n(8575),i=n(26470),r=n(91119),a=n(72442),s=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function s(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};function c(e){return/^https?:/.test(e)}function p(e,t){if(c(e)){const n=new URL(e);return n.pathname=(0,i.join)(n.pathname,t),n.toString()}return(0,i.join)(e,t)}function d(e){return p(function(e){if(c(e)){const t=new URL(e);return t.pathname=(0,i.dirname)(t.pathname),t.toString()}return(0,i.dirname)(e)}(e),(0,i.basename)(e).replace(/\..*$/,"")+".json")}function l(e,t){return s(this,void 0,void 0,(function*(){const{pathname:n}=/^https?:/.test(e)?new URL(e):{pathname:e};if(/\.md$/.test(n)){const[n,o]=yield Promise.all([(0,a.O)(e,t),(0,a.O)(d(e),t,!0)]);return{data:"string"==typeof n?n:JSON.stringify(n),codeBlockResponses:"string"==typeof o?JSON.parse(o):o}}throw new Error("File extension not support")}))}function u(e){return s(this,void 0,void 0,(function*(){const{edit:t,header:n,preview:a,"snippet-base-path":s,receive:c,send:d,title:u,readonly:f,replace:h}=e.parsedOptions,m=e.parsedOptions.file||e.parsedOptions.f,v=void 0===c&&(void 0!==d||t),y=void 0===c&&void 0===d&&n,w=void 0===d&&(void 0!==c||a),{data:g="#",codeBlockResponses:b}=m?yield l(m,e):{data:e.command.trim().slice(e.command.indexOf(" ")+1).trim().replace(/\\n/g,"\n").replace(/\\t/g,"\t").replace(/--(no-)?(header|edit|preview|readonly|replace)\s*/g,"").replace(/(-t|--title|--send|--receive)\s+\S+\s*/g,"").replace(/^\\#/,"#").replace(/^"/,"").replace(/"$/,""),codeBlockResponses:void 0};m&&f&&r.Events.eventBus.emitWithTabId("/kui/tab/edit/unset",(0,r.getPrimaryTabId)(e.tab));const k=e.parsedOptions["base-url"]?p(e.parsedOptions["base-url"],"{filename}"):m?function(e){if(/^http:/.test(e)){const t=new URL(e);return t.pathname=t.pathname.replace((0,i.basename)(t.pathname),"{filename}"),(0,o.format)(t)}return e.replace((0,i.basename)(e),"{filename}")}(m):void 0;if(void 0!==g)return"#"===g||"commentary"===e.command?{apiVersion:"kui-shell/v1",kind:"CommentaryResponse",props:{edit:v,header:y,preview:w,replace:h,receive:c,send:d,snippetBasePath:s,title:u,children:"",baseUrl:k}}:{apiVersion:"kui-shell/v1",kind:"CommentaryResponse",props:{edit:v,header:y,preview:w,replace:h,receive:c,send:d,snippetBasePath:s,title:u,filepath:m,children:g,codeBlockResponses:b,baseUrl:k}};throw new Error("Insufficient arguments: must specify either --file or -f, or provide a comment on the command line")}))}function f(e){const t={boolean:["edit","header","preview","readonly","replace"]};e.listen("/commentary",u,{outputOnly:!0,flags:t}),e.listen("/#",u,{outputOnly:!0,noCoreRedirect:!0,flags:t})}},72442:(e,t,n)=>{n.d(t,{O:()=>c});var o=n(11227),i=n.n(o),r=n(91119),a=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function s(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};const s=i()("plugin-client-common/notebook/load");function c(e,{REPL:t},n=!1){return a(this,void 0,void 0,(function*(){try{if(s("attempting to load guidebook data",e),/^https:/.test(e))return(yield t.rexec(`vfs _fetchfile ${(0,r.encodeComponent)(e)}`)).content[0];{const n=r.Util.absolute(r.Util.expandHomeDir(e)),o=(yield t.rexec(`vfs fstat ${(0,r.encodeComponent)(n)} --with-data`)).content;if(o.isDirectory)throw new Error("Invalid filepath");return o.data}}catch(t){if(s("error loading guidebook data",e,t),n)return;throw t}}))}}}]);