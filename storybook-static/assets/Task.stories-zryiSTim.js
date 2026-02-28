import{j as e}from"./jsx-runtime-u17CrQMm.js";function o({task:{id:s,title:i,state:t},onArchiveTask:c,onPinTask:u}){return e.jsxs("div",{className:`list-item ${t}`,children:[e.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${s}`,className:"checkbox",children:[e.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${s}`,checked:t==="TASK_ARCHIVED"}),e.jsx("span",{className:"checkbox-custom",onClick:()=>t==="TASK_INBOX"||t==="TASK_PINNED"?c(s):null})]}),e.jsx("label",{htmlFor:"title","aria-label":i,className:"title",children:e.jsx("input",{type:"text",value:i,readOnly:!0,name:"title",placeholder:"Input title"})}),t!=="TASK_ARCHIVED"&&e.jsx("button",{className:"pin-button",onClick:()=>u(s),id:`pinTask-${s}`,"aria-label":`pinTask-${s}`,children:e.jsx("span",{className:"icon-star"})},`pinTask-${s}`)]})}o.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	id: string,
	title: string,
	state: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"string",required:!0}}]}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const l={title:"Task",component:o,tags:["autodocs"]},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...a.args.task,state:"TASK_PINNED"}}},n={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...n.parameters?.docs?.source}}};const d=["Default","Pinned","Archived"],m=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:a,Pinned:r,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{a as D,o as T,m as a};
