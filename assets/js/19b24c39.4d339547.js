"use strict";(self.webpackChunkoptimism_java=self.webpackChunkoptimism_java||[]).push([[198],{5136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(4848),a=n(8453),s=n(1470),o=n(9365);const l={},i="Use docker",c={id:"op-besu-docs/run-a-node/use_docker",title:"Use docker",description:"You can use Docker to run Op-Besu as an Optimism EL node on the testnets.",source:"@site/docs/op-besu-docs/run-a-node/use_docker.md",sourceDirName:"op-besu-docs/run-a-node",slug:"/op-besu-docs/run-a-node/use_docker",permalink:"/op-besu-docs/run-a-node/use_docker",draft:!1,unlisted:!1,editUrl:"https://github.com/optimism-java/optimism-java.github.io/tree/main/docs/op-besu-docs/run-a-node/use_docker.md",tags:[],version:"current",lastUpdatedBy:"thinkAfCod",lastUpdatedAt:1742539292e3,frontMatter:{},sidebar:"opBesuSidebar",previous:{title:"Use the packaged binaries",permalink:"/op-besu-docs/run-a-node/use_binaries"},next:{title:"Command line options",permalink:"/op-besu-docs/run-a-node/cmd_line_options"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Pull docker image",id:"pull-docker-image",level:2},{value:"Create a JWT Secret",id:"create-a-jwt-secret",level:2},{value:"Prepare the data directory",id:"prepare-the-data-directory",level:2},{value:"Start a Op-besu node",id:"start-a-op-besu-node",level:2},{value:"Start op-node to sync L2 state",id:"start-op-node-to-sync-l2-state",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-docker",children:"Use docker"}),"\n",(0,r.jsxs)(t.p,{children:["You can use Docker to run ",(0,r.jsx)(t.a,{href:"https://github.com/optimism-java/op-besu",children:"Op-Besu"})," as an Optimism EL node on the testnets."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Download and install ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"Docker"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"pull-docker-image",children:"Pull docker image"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"docker pull ghcr.io/optimism-java/op-besu:latest\n"})}),"\n",(0,r.jsx)(t.h2,{id:"create-a-jwt-secret",children:"Create a JWT Secret"}),"\n",(0,r.jsxs)(t.p,{children:["You can check the ",(0,r.jsx)(t.a,{href:"https://docs.optimism.io/builders/node-operators/tutorials/testnet#create-a-jwt-secret",children:"JWT secret creation tutorial"}),"\nto learn how to create a JWT secret."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"openssl rand -hex 32 > jwt.txt\n"})}),"\n",(0,r.jsx)(t.h2,{id:"prepare-the-data-directory",children:"Prepare the data directory"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir datadir\nchmod 777 datadir\n"})}),"\n",(0,r.jsx)(t.h2,{id:"start-a-op-besu-node",children:"Start a Op-besu node"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"op sepolia",label:"op sepolia",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'docker run -it --name op-besu -p 8545:8545 -p 8551:8551 -v ./jwt.txt:/jwt/jwtsecret \\\n-v ./datadir:/data/ \\\nghcr.io/optimism-java/op-besu:latest \\\n--network=OP_SEPOLIA \\\n--sync-mode=FULL \\\n--p2p-enabled=false \\\n--discovery-enabled=false \\\n--data-path="/data/" \\\n--engine-rpc-enabled \\\n--engine-jwt-secret="/jwt/jwtsecret" \\\n--rpc-http-enabled \\\n--host-allowlist="*" \\\n--engine-host-allowlist="*" \\\n--logging=INFO \\\n--version-compatibility-protection=false\n'})})}),(0,r.jsx)(o.A,{value:"devnet or other",label:"devnet or other",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'docker run -it --name op-besu-devnet -p 8545:8545 -p 8551:8551 -v ./jwt.txt:/jwt/jwtsecret \\\n-v ./datadir:/data/ \\\nghcr.io/optimism-java/op-besu:latest \\\n--genesis-file=<devnet genesis file> \\\n--network-id=<network id> \\\n--sync-mode=FULL \\\n--p2p-enabled=false \\\n--discovery-enabled=false \\\n--data-path="/data/" \\\n--engine-rpc-enabled \\\n--engine-jwt-secret="/jwt/jwtsecret" \\\n--rpc-http-enabled \\\n--host-allowlist="*" \\\n--engine-host-allowlist="*" \\\n--logging=INFO \\\n--version-compatibility-protection=false\n'})})})]}),"\n",(0,r.jsxs)(t.admonition,{title:"Warning",type:"danger",children:[(0,r.jsx)(t.p,{children:"The following settings are a security risk in production environments:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Enabling the HTTP JSON-RPC service (",(0,r.jsx)(t.code,{children:"--rpc-http-enabled"}),") and setting ",(0,r.jsx)(t.code,{children:"--rpc-http-host"})," to 0.0.0.0 exposes the RPC connection on your node to any remote connection."]}),"\n",(0,r.jsxs)(t.li,{children:["Setting ",(0,r.jsx)(t.code,{children:"--host-allowlist"})," to ",(0,r.jsx)(t.code,{children:'"*"'})," allows JSON-RPC API access from any host."]}),"\n",(0,r.jsxs)(t.li,{children:["Setting ",(0,r.jsx)(t.code,{children:"--rpc-http-cors-origins"})," to ",(0,r.jsx)(t.code,{children:'"all"'})," or ",(0,r.jsx)(t.code,{children:'"*"'})," allows cross-origin resource sharing (CORS) access from any domain."]}),"\n"]})]}),"\n",(0,r.jsx)(t.h2,{id:"start-op-node-to-sync-l2-state",children:"Start op-node to sync L2 state"}),"\n",(0,r.jsx)(t.p,{children:"After starting the Op-Besu node, you can start the op-node to sync state."}),"\n",(0,r.jsx)(t.p,{children:"Pull docker image of hildr:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"docker pull us-docker.pkg.dev/oplabs-tools-artifacts/images/op-node:v1.12.2\n"})}),"\n",(0,r.jsx)(t.p,{children:"Get IP of the op-besu container, and op-node container will use it to connect to op-besu via the docker bridge:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' op-besu\n"})}),"\n",(0,r.jsx)(t.p,{children:"Start op-node node:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"docker run -d -it --name op-node -p 11545:11545 \\\n-v ./jwt.txt:/jwt/jwt.txt \\\n--entrypoint op-node \\\nus-docker.pkg.dev/oplabs-tools-artifacts/images/op-node:v1.12.2 \\\n--network op-sepolia \\\n--l1.rpckind=basic \\\n--l1=<l1-rpc-url> \\\n--l2=<op-besu-engine-rpc-url> \\\n--rpc.addr=0.0.0.0 \\\n--rpc.port=11545 \\\n--l2.jwt-secret=/jwt/jwt.txt \\\n--l1.trustrpc \\\n--l1.beacon=<l1-beacon-sepolia-rpc-url> \\\n--syncmode=consensus-layer\n"})}),"\n",(0,r.jsx)(t.p,{children:"The synchronization needs to handle empty messages at the beginning, and the actual block synchronization will take place about 15 minutes later."}),"\n",(0,r.jsx)(t.p,{children:"For example, use curl get block data from op-besu:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl --request POST \'https://localhost:8545\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{"id":2, "jsonrpc":"2.0", "method": "eth_getBlockByNumber", "params":["0xe", true]}\'\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You can confirm whether the block and transaction information is correct through the ",(0,r.jsx)(t.a,{href:"https://sepolia-optimism.etherscan.io/",children:"Sepolia network's blockchain explorer"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(8215),s=n(3104),o=n(6347),l=n(205),i=n(7485),c=n(1682),d=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:n,groupId:a}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),j=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(c(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(x,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,f.jsx)(k,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);