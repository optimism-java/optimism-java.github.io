"use strict";(self.webpackChunkoptimism_java=self.webpackChunkoptimism_java||[]).push([[10],{7412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(4848),a=r(8453),l=r(1470),o=r(9365);const s={},i="Use docker",u={id:"hildr-docs/run-a-node/use_docker",title:"Use docker",description:"You can use Docker to run Hildr as an Optimism rollup node.",source:"@site/docs/hildr-docs/run-a-node/use_docker.md",sourceDirName:"hildr-docs/run-a-node",slug:"/hildr-docs/run-a-node/use_docker",permalink:"/hildr-docs/run-a-node/use_docker",draft:!1,unlisted:!1,editUrl:"https://github.com/optimism-java/optimism-java.github.io/tree/main/docs/hildr-docs/run-a-node/use_docker.md",tags:[],version:"current",lastUpdatedBy:"thinkAfCod",lastUpdatedAt:1742539292e3,frontMatter:{},sidebar:"hildrSidebar",previous:{title:"Use the Hildr jar",permalink:"/hildr-docs/run-a-node/use_jar"},next:{title:"Command line options",permalink:"/hildr-docs/run-a-node/cmd_line_options"}},c={},d=[{value:"Pull docker image",id:"pull-docker-image",level:2},{value:"Copy in the JWT secret",id:"copy-in-the-jwt-secret",level:2},{value:"Start a Hildr node",id:"start-a-hildr-node",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-docker",children:"Use docker"}),"\n",(0,n.jsxs)(t.p,{children:["You can use Docker to run ",(0,n.jsx)(t.a,{href:"https://github.com/optimism-java/hildr",children:"Hildr"})," as an Optimism rollup node."]}),"\n",(0,n.jsx)(t.h2,{id:"pull-docker-image",children:"Pull docker image"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"docker pull ghcr.io/optimism-java/hildr:latest\n"})}),"\n",(0,n.jsx)(t.h2,{id:"copy-in-the-jwt-secret",children:"Copy in the JWT secret"}),"\n",(0,n.jsx)(t.p,{children:"Copy the JWT secret you generated when start execution client."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cp /path/to/jwt.txt .\n"})}),"\n",(0,n.jsx)(t.h2,{id:"start-a-hildr-node",children:"Start a Hildr node"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"op sepolia",label:"op sepolia",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'docker run -it -p 11545:11545 \\\n-v <you jwt secret>:/jwt/jwt.hex \\\nghcr.io/optimism-java/hildr:latest \\\n--network optimism-sepolia \\ # can be either: "optimism","base","base-sepolia"\n--jwt-file /jwt/jwt.hex \\\n--l1-rpc-url http://localhost:9545 \\\n--l1-ws-rpc-url ws://localhost:9546 \\\n--l1-beacon-url http://localhost:4000 \\\n--l2-rpc-url http://localhost:8545 \\\n--l2-engine-url http://localhost:8551 \\\n--rpc-port 11545 \\\n--log-level INFO \\ # can be either: "DEBUG","TRACE","WARN","ERROR"\n--sync-mode full\n'})})}),(0,n.jsx)(o.A,{value:"devnet or other",label:"devnet or other",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'docker run -it -p 11545:11545 \\\n-v <your jwt secret>:/jwt/jwt.hex \\\n-v <your rollup.json file>:/network-configs/rollup.json\nghcr.io/optimism-java/hildr:latest \\\n--devnet \\\n--network=/network-configs/rollup.json \\\n--jwt-file /jwt/jwt.hex \\\n--l1-rpc-url http://localhost:9545 \\\n--l1-ws-rpc-url ws://localhost:9546 \\\n--l1-beacon-url http://localhost:4000 \\\n--l2-rpc-url http://localhost:8545 \\\n--l2-engine-url http://localhost:8551 \\\n--rpc-port 11545 \\\n--log-level INFO \\ # can be either: "DEBUG","TRACE","WARN","ERROR"\n--sync-mode full\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(8215);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(6540),a=r(8215),l=r(3104),o=r(6347),s=r(205),i=r(7485),u=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),v=(()=>{const e=u??f;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=s[r].value;a!==n&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(w,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,j.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(6540);const a={},l=n.createContext(a);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);