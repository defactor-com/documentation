"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[7200],{4899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),c=n(8453);const o={id:"erc20-factory-smart-contract",title:"Factory",sidebar_position:1},r=void 0,a={id:"assets/smart-contracts/ERC-20/erc20-factory-smart-contract",title:"Factory",description:"ERC20Factory.sol this contract allows anyone to create new instances of ERC20 tokens.",source:"@site/docs/assets/smart-contracts/ERC-20/factory.md",sourceDirName:"assets/smart-contracts/ERC-20",slug:"/assets/smart-contracts/ERC-20/erc20-factory-smart-contract",permalink:"/docs/assets/smart-contracts/ERC-20/erc20-factory-smart-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/assets/smart-contracts/ERC-20/factory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"erc20-factory-smart-contract",title:"Factory",sidebar_position:1},sidebar:"docSidebar",previous:{title:"ERC-20",permalink:"/docs/category/erc-20"},next:{title:"Token",permalink:"/docs/assets/smart-contracts/ERC-20/erc20-token-smart-contract"}},i={},l=[{value:"Contract versions",id:"contract-versions",level:2},{value:"Smart Contract Documentation",id:"smart-contract-documentation",level:2},{value:"Overview",id:"overview",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Constants",id:"constants",level:3},{value:"Roles",id:"roles",level:3},{value:"Functions",id:"functions",level:3},{value:"User",id:"user",level:4}];function d(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ERC20Factory.sol"})," this contract allows anyone to create new instances of ",(0,s.jsx)(t.code,{children:"ERC20"})," tokens."]}),"\n",(0,s.jsx)(t.h2,{id:"contract-versions",children:"Contract versions"}),"\n",(0,s.jsx)(t.p,{children:"There is currently only 1 version of ERC-20 factory."}),"\n",(0,s.jsx)(t.h2,{id:"smart-contract-documentation",children:"Smart Contract Documentation"}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The Factory contract allows anyone to create ERC20 tokens, which have static data hash hardcoded in a constant."}),"\n",(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ERC20"}),": Openzeppelin's ERC20 Token implementation."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ERC20Burnable"}),": Openzeppelin's ERC20 extension, which allows token burnings ."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Ownable"}),": Openzeppelin's single access control role implementation."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"constants",children:"Constants"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"DECIMALS"}),": Multiplier for percentage calculations (100)."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"roles",children:"Roles"}),"\n",(0,s.jsx)(t.p,{children:"Factory is open to anyone and therefore has no roles implemented."}),"\n",(0,s.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h4,{id:"user",children:"User"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"createERC20Token"}),": Creates a new instance of ERC20 token and mints the starting supply to the caller."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"staticData"}),": StaticData is a public mapping, which includes static data for every created ERC20 token."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const c={},o=s.createContext(c);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);