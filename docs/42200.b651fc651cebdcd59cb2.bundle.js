"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[42200,6033],{6033:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var a=l(67294);const s=a.lazy((()=>Promise.all([l.e(33676),l.e(23749),l.e(79279)]).then(l.bind(l,79279))));function n(e){return a.createElement(s,Object.assign({},e))}},42200:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(67294),s=l(21030),n=l(6033);class r extends a.PureComponent{constructor(e){super(e),this.state={selectedIdx:e.table.defaultSelectedIdx}}render(){return a.createElement(n.default,{toggle:"caret",actions:this.props.table.body.map(((e,t)=>({label:(0,s.radioTableCellToString)(e.cells[e.nameIdx||0]),isSelected:this.state.selectedIdx===t,handler:()=>(0,s.pexecInCurrentTab)(e.onSelect)}))),position:"left"})}}}}]);