(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[4381],{85131:(e,n,t)=>{"use strict";t.d(n,{N:()=>w});var o=t(68680),i=t(7676),r=t(60599),s=function(e,n,t,o){return new(t||(t=Promise))((function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,l)}a((o=o.apply(e,n||[])).next())}))};const l=[{name:"Kui snapshot",extensions:["md"]}];var a=t(93364),c=function(e,n,t,o){return new(t||(t=Promise))((function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,l)}a((o=o.apply(e,n||[])).next())}))};function d(){return c(this,void 0,void 0,(function*(){(0,a.Z)("snapshot","pexec")}))}var u=t(18495),h=t(186);const p=()=>(0,a.Z)("tab close -A"),f="darwin"===h.platform?"Command+W":"Control+Shift+W",w=e=>{{const n=r.openNotebook.bind(void 0,e),c=(0,r.clientNotebooksDefinitionToElectron)((0,r.loadClientNotebooksMenuDefinition)(),n),w=[{label:"New Split",click:()=>(0,a.Z)("split"),accelerator:"CommandOrControl+Y"},{label:"New Tab",click:()=>(0,a.Z)("tab new"),accelerator:"CommandOrControl+T"},{label:"New Window",click:()=>e(),accelerator:"CommandOrControl+N"},{label:"Open",click:()=>function(e){return s(this,void 0,void 0,(function*(){const{app:n,dialog:o}=yield Promise.resolve().then(t.t.bind(t,7676,23)),i=yield o.showOpenDialog({title:"Select a Kui snapshot",filters:l});i.canceled||i.filePaths.forEach((t=>{n.addRecentDocument(t),(0,r.replay)(t,e)}))}))}(e),accelerator:"CommandOrControl+O"},{label:"Open Recent",role:"recentdocuments",submenu:[{label:"Clear Recent",role:"clearrecentdocuments"}]},{type:"separator"},{label:"Toggle Edit Mode",enabled:!((0,u.isReadOnlyClient)()||(0,u.isOfflineClient)()),click:()=>(0,a.Z)("tab edit toggle --current-tab")},{label:"Save as Notebook...",click:d,accelerator:"CommandOrControl+S"},{type:"separator"},{label:"Close Tab",click:p,accelerator:f},{role:"close",accelerator:void 0}];"darwin"!==h.platform&&(w.push({type:"separator"}),w.push({role:"quit"}));const b={label:"Choose a Theme",click:()=>{try{(0,a.Z)("themes","pexec")}catch(e){console.log(e)}}},m=[{label:`Getting Started with ${o.productName}`,click:()=>{try{(0,a.Z)("getting started","pexec")}catch(e){console.log(e)}}},{type:"separator"},{label:"Report Issue...",click(){t(7676).shell.openExternal("https://github.com/IBM/kui/issues/new")}}],g=[{label:"File",submenu:w},{label:"Edit",submenu:[{role:"undo"},{role:"redo"},{type:"separator"},{role:"cut"},{role:"copy"},{role:"paste"},{role:"pasteAndMatchStyle"},{role:"delete"},{role:"selectAll"}]}],v=[{label:"View",submenu:[b,{type:"separator"},{accelerator:"darwin"===h.platform?"Meta+R":"Shift+CmdOrCtrl+R",role:"reload"},{role:"toggleDevTools"},{type:"separator"},{role:"resetZoom"},{role:"zoomIn"},{role:"zoomOut"},{type:"separator"},{role:"togglefullscreen"}]}],y=[{role:"window",submenu:[{role:"minimize"},{role:"close",accelerator:f}]},{role:"help",submenu:m}],O=g.concat(v).concat(c?[c]:[]).concat(y),I={label:`About ${o.productName}`,click:()=>{try{(0,a.Z)("about","pexec")}catch(e){console.log(e)}}},N={type:"separator"},P=[I,N,{role:"services",submenu:[]},N,{role:"hide"},{role:"hideOthers"},{role:"unhide"},N,{role:"quit"}];"darwin"===h.platform?O.unshift({label:o.productName,submenu:P}):(m.push({type:"separator"}),m.push(I));const C=i.Menu.buildFromTemplate(O);i.Menu.setApplicationMenu(C)}}},60599:(e,n,t)=>{"use strict";t.r(n),t.d(n,{replay:()=>s,openNotebook:()=>l,clientNotebooksDefinitionToElectron:()=>a,loadClientNotebooksMenuDefinition:()=>c});var o=t(7676),i=t(93364),r=t(5379);function s(e,n){try{0===o.webContents.getAllWebContents().length?n(["replay",e]):(0,i.Z)(`replay ${(0,r.Z)(e)}`,"pexec")}catch(e){console.log(e)}}function l(e,n,t){return{label:n,click:()=>s(t,e)}}function a(e,n){if(e)return Object.assign({},{label:e.label,submenu:e.submenu.map((e=>function(e){const n=e;return"string"==typeof n.label&&Array.isArray(n.submenu)}(e)?a(e,n):function(e){const n=e;return"string"==typeof n.notebook&&"string"==typeof n.filepath}(e)?n(e.notebook,e.filepath):e))})}function c(){try{return t(Object(function(){var e=new Error("Cannot find module '@kui-shell/client/config.d/notebooks.json'");throw e.code="MODULE_NOT_FOUND",e}()))}catch(e){return}}},74381:(e,n,t)=>{"use strict";t.r(n),t.d(n,{createWindow:()=>g,getCommand:()=>v,initElectron:()=>y});var o=t(11227),i=t.n(o),r=t(26470);const s=1200,l=800,a=900,c=675;var d=t(79895),u=t(186),h=function(e,n,t,o){return new(t||(t=Promise))((function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,l)}a((o=o.apply(e,n||[])).next())}))};const p=i()("main/spawn-electron");p("loading");let f,w=0,b=[];function m(e){g(!0,e)}function g(e=!1,n,o,i,a=!1,c=!1){if(p("createWindow",n),i&&i.bringYourOwnWindow)return void i.bringYourOwnWindow();let v=i&&i.width||1280,O=i&&i.height||960;u.env.WINDOW_WIDTH&&(v=parseInt(u.env.WINDOW_WIDTH,10),isNaN(v)&&(console.error("Cannot parse WINDOW_WIDTH "+u.env.WINDOW_WIDTH),v=1280)),u.env.WINDOW_HEIGHT&&(O=parseInt(u.env.WINDOW_HEIGHT,10),isNaN(O)&&(console.error("Cannot parse WINDOW_HEIGHT "+u.env.WINDOW_HEIGHT),O=960));let I=Promise.resolve();f||(p("we need to spawn electron",o,i),delete i.synonymFor,I=y(["--"].concat(n),{},o,i,c).then((()=>h(this,void 0,void 0,(function*(){f=(yield Promise.resolve().then(t.t.bind(t,7676,23))).app})))).catch((e=>{p("not ready for graphics",e)}))),I.then((()=>h(this,void 0,void 0,(function*(){const{productName:c}=yield Promise.resolve().then(t.t.bind(t,68680,19)),{filesystem:f}=yield t.e(8055).then(t.t.bind(t,38055,19)),{screen:y,BrowserWindow:I,app:N}=yield Promise.resolve().then(t.t.bind(t,7676,23)),P=i&&i.position?yield i.position():function({screen:e,BrowserWindow:n}){if(e){const t=n.getAllWindows().length,{bounds:o}=e.getPrimaryDisplay(),i=40*t;return{x:Math.round((o.width-s)/2)+i,y:Math.round((o.height-l)/2)+i}}}({screen:y,BrowserWindow:I}),C=Object.assign({title:c,width:v,height:O,webPreferences:{enableRemoteModule:!0,backgroundThrottling:!1,contextIsolation:!1,nodeIntegration:!0}},P);C.webPreferences.zoomFactor=1;const k=N.getAppPath(),W=(0,r.join)(k,/dist\/headless$/.test(k)?"../../":"","node_modules/@kui-shell");if("linux"===u.platform){const e=(0,r.join)(W,"build",f.linux);C.icon=e}else if("win32"===u.platform){const e=(0,r.join)(W,"build",f.win32);C.icon=e}o&&(C.useContentSize=!0),u.env.KUI_POSITION_X&&(C.x=parseInt(u.env.KUI_POSITION_X,10)),u.env.KUI_POSITION_Y&&(C.y=parseInt(u.env.KUI_POSITION_Y,10)),p("createWindow::new BrowserWindow");const _=new I(C);w++,p("createWindow::new BrowserWindow success"),_.once("ready-to-show",(()=>{_.setVisibleOnAllWorkspaces(!0),_.show(),_.setVisibleOnAllWorkspaces(!1)}));const E={};_.webContents.on("did-finish-load",(()=>h(this,void 0,void 0,(function*(){})))),_.webContents.on("will-navigate",((e,n)=>h(this,void 0,void 0,(function*(){/kui-shell\/build\/index.html/.test(n)||(e.preventDefault(),(yield Promise.resolve().then(t.t.bind(t,7676,23))).shell.openExternal(n))})))),_.webContents.on("new-window",((e,n,o,i,r)=>h(this,void 0,void 0,(function*(){n.startsWith("https://youtu.be")?(e=>{const{type:n,event:t,url:o,size:i=_.getBounds(),position:r=_.getBounds()}=e,s=E[n]||{},{window:l,url:a}=s;if(!l||l.isDestroyed()){const e=new I({width:i.width,height:i.height,frame:!0});E[n]={window:e,url:o},e.setPosition(r.x+62,r.y+62),e.loadURL(o)}else a!==o&&(l.loadURL(o),s.url=o),l.focus();t.preventDefault()})({type:"videos",event:e,url:n,options:r,size:{width:800,height:600}}):(e.preventDefault(),(yield Promise.resolve().then(t.t.bind(t,7676,23))).shell.openExternal(n))}))));let x=n&&n.find((e=>/--command-context/.test(e)));x&&(n=n.filter((e=>!e.match(/--command-context/))),x=x.replace(/^--/,"")),!0===e&&n&&(p("setting argv",n),_.executeThisArgvPlease=n),p("subwindowPrefs",i),i&&Object.keys(i).length>0&&(_.subwindow=i);const T={pathname:(0,r.join)(W,"build","index.html"),protocol:"file:",search:x?`?${x}`:"",slashes:!0};p("mainWindow::loadURL",T);try{_.loadURL(t(8575).format(T))}catch(e){const n=e.message.includes("Inspected target navigated or closed")||e.message.includes("cannot determine loading status")||e.message.includes("Inspected target navigated or closed");if(!u.env.TRAVIS_JOB_ID||!n)throw e}if(p("install menus"),t(85131).N(m),_.once("closed",(function(){0==--w&&(b.forEach((e=>e())),b=[])})),!a&&0===b.length){const{ipcMain:e}=yield Promise.resolve().then(t.t.bind(t,7676,23));p("ipc registration");const n=(e,n,o)=>h(this,void 0,void 0,(function*(){try{const{clipboard:i,nativeImage:r,webContents:s}=yield Promise.resolve().then(t.t.bind(t,7676,23)),l=yield s.fromId(parseInt(n,10)).capturePage(o);try{const n=l.toPNG();i.writeImage(r.createFromBuffer(n)),e.sender.send("capture-page-to-clipboard-done",n)}catch(n){console.log(n),e.sender.send("capture-page-to-clipboard-done")}}catch(n){console.log(n),e.sender.send("capture-page-to-clipboard-done")}})),o=(e,n)=>{const t=JSON.parse(n);switch(t.operation){case"quit":N.quit();break;case"new-window":g(!0,t.argv,void 0,{initialTabTitle:t.title,quietExecCommand:void 0!==t.quietExecCommand&&t.quietExecCommand},!0);break;case"open-graphical-shell":g(!0);break;case"enlarge-window":_.setContentSize(1400,1050,!0);break;case"reduce-window":_.setContentSize(1024,768,!0);break;case"maximize-window":_.maximize();break;case"unmaximize-window":_.unmaximize()}e.returnValue="ok"},i=(e,n)=>h(this,void 0,void 0,(function*(){const o=JSON.parse(n),i=`/exec/response/${o.hash}`;p("invoke",o);try{const n=yield t(24992)("./plugin-"+(0,d.u)(o.module)+"/mdist/electron-main.js");p("invoke got module");const r=yield n[o.main||"main"](o.args,e.sender);p("invoke got returnValue",r),e.sender.send(i,JSON.stringify({success:!0,returnValue:r}))}catch(n){p("error in exec",n),e.sender.send(i,JSON.stringify({success:!1,error:n}))}}));e.on("/exec/invoke",i),e.on("synchronous-message",o),e.on("capture-page-to-clipboard",n),b.push((()=>e.off("/exec/invoke",i))),b.push((()=>e.off("synchronous-message",o))),b.push((()=>e.off("capture-page-to-clipboard",n)))}p("createWindow done")}))))}const v=(e,n)=>{p("getCommand",e);const t=e.lastIndexOf("--");e=(e=-1===t?e.slice(1):e.slice(t+1)).filter((e=>"--ui"!==e&&"--no-color"!==e&&!e.match(/^-psn/)));const o=!u.env.KUI_POPUP&&(0===e.length||e.find((e=>"shell"===e))||u.env.RUNNING_SHELL_TEST&&!u.env.KUI_TEE_TO_FILE);p("isShell",e,o);let i=!0,r={fullscreen:!0,width:s,height:l};return o?(e=["shell"],i=!1,r={}):u.env.KUI_POPUP&&(e=JSON.parse(u.env.KUI_POPUP)),u.env.KUI_POPUP_WINDOW_RESIZE&&(r={fullscreen:!0,position:()=>h(void 0,void 0,void 0,(function*(){return function({screen:e,BrowserWindow:n}){if(e){const t=n.getAllWindows().length,{bounds:o}=e.getPrimaryDisplay();return{x:o.width-a-50,y:Math.round((o.height-c)/4+40*(t-1))}}}(yield n())})),width:a,height:c}),p("using args",e,r),{argv:e,subwindowPlease:i,subwindowPrefs:r}};function y(e=[],{isRunningHeadless:n=!1}={},o,i,r=!1){return h(this,void 0,void 0,(function*(){if(p("initElectron",e,o,i),u.env.KUI_HEADLESS){if(!u.env.KUI_ELECTRON_HOME)throw new Error("Unable to locate graphics components");{const n=t.e(6161).then(t.t.bind(t,96161,23)),s=[".","--",...e];p("spawning electron",u.env.KUI_ELECTRON_HOME,s);const l={};o&&(p("passing through subwindowPlease",o),l.subwindowPlease=o.toString()),i&&Object.keys(i).length>0&&(p("passing through subwindowPrefs",i),l.subwindowPrefs=JSON.stringify(i));const a=Object.assign({},u.env,l);delete a.KUI_GRAPHICS,delete a.KUI_HEADLESS,delete a.ELECTRON_RUN_AS_NODE;const c=(yield n).spawn(u.env.KUI_ELECTRON_HOME,s,{stdio:p.enabled?"inherit":"ignore",env:a,detached:!0});p.enabled||c.unref(),p("spawning electron done, this process will soon exit"),r||u.exit(0)}}else{p("loading electron");const e=yield Promise.resolve().then(t.t.bind(t,7676,23));f=e.app}if(!u.env.RUNNING_SHELL_TEST){const e=i&&i.width,n=i&&i.height;if(f.on("second-instance",((o,i)=>{const{argv:r,subwindowPlease:s,subwindowPrefs:l}=v(i,(()=>h(this,void 0,void 0,(function*(){return Promise.resolve().then(t.t.bind(t,7676,23))}))));e&&(l.width=e),n&&(l.height=n),p("opening window for second instance",i,s,l),g(!0,r,s,l)})),!f.requestSingleInstanceLock())return p("exiting, since we are not the first instance"),f.exit(0)}f.on("open-file",((e,n)=>h(this,void 0,void 0,(function*(){const{replay:e}=yield Promise.resolve().then(t.bind(t,60599));e(n,m)})))),f.once("ready",(()=>{p("opening primary window",e),g(!0,e.length>0&&e,o,i)})),f.on("window-all-closed",(function(){"darwin"!==u.platform||n?f.quit():f.hide()})),f.on("activate",(function(){0===w&&g()}))}))}},93364:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var o=function(e,n,t,o){return new(t||(t=Promise))((function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,l)}a((o=o.apply(e,n||[])).next())}))};const i=(e,n="qexec")=>o(void 0,void 0,void 0,(function*(){const{webContents:o}=yield Promise.resolve().then(t.t.bind(t,7676,23)),i=o.getFocusedWebContents()||o.getAllWebContents()[0];if(o.getAllWebContents().map((e=>e.devToolsWebContents)).filter((e=>e)).find((e=>e.id===i.id))){const e=o.getAllWebContents().find((e=>e.devToolsWebContents&&e.devToolsWebContents.id===i.id));e&&e.closeDevTools()}else i.send(`/repl/${n}`,{command:e})}))},24992:(e,n,t)=>{var o={"./plugin-bash-like/mdist/electron-main.js":[13758,9267,9224,3200]};function i(e){if(!t.o(o,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],i=n[0];return Promise.all(n.slice(1).map(t.e)).then((()=>t(i)))}i.keys=()=>Object.keys(o),i.id=24992,e.exports=i}}]);