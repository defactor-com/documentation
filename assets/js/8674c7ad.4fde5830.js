"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[2549],{7986:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(4848),i=n(8453);const a={title:"Mailing",sidebar_position:1},o=void 0,r={id:"assets/back-end-api/API Endpoints/mailing",title:"Mailing",description:"The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API.",source:"@site/docs/assets/back-end-api/API Endpoints/mailing.md",sourceDirName:"assets/back-end-api/API Endpoints",slug:"/assets/back-end-api/API Endpoints/mailing",permalink:"/docs/assets/back-end-api/API Endpoints/mailing",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/assets/back-end-api/API Endpoints/mailing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Mailing",sidebar_position:1},sidebar:"docSidebar",previous:{title:"IPFS",permalink:"/docs/assets/back-end-api/API Endpoints/ipfs"},next:{title:"Stats",permalink:"/docs/assets/back-end-api/API Endpoints/stats"}},c={},d=[{value:"Security Details",id:"security-details",level:2},{value:"Mailing",id:"mailing",level:2},{value:"<code>Send email</code>",id:"send-email",level:3}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The Defactor Postman Collection comprises a suite of pre-configured API requests designed for seamless integration into the Postman application, facilitating access to the services offered by the Defactor API."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"security-details",children:"Security Details"}),"\n",(0,t.jsxs)(s.p,{children:["To secure the API access control, all requests are made through ",(0,t.jsx)(s.a,{href:"https://hasura.io/",children:"Hasura"})," which provides secure GraphQL, and RESTful endpoints restricted by a role-based authorization system."]}),"\n",(0,t.jsxs)(s.p,{children:["Those endpoints that return public data do not require authentication for use. Query type requests are opened under the ",(0,t.jsx)(s.code,{children:"guest"})," role, while mutation type needs a token with ",(0,t.jsx)(s.code,{children:"user"})," role."]}),"\n",(0,t.jsx)(s.p,{children:"For those that can modify data the API expects a valid authorization header containing a bearer token. These tokens are implemented as JSON Web Tokens (JWTs) issued by the server."}),"\n",(0,t.jsx)(s.p,{children:"The security of the JWT is because it is signed by a secret key and has a configurable expiration time, which by default is 240 minutes."}),"\n",(0,t.jsx)(s.p,{children:"Upon receiving a request, Hasura decodes and validates the JWT, which contains user account data, and their corresponding role. If the role lacks the necessary permissions or the token is invalid, expired or missing, the request is promptly rejected."}),"\n",(0,t.jsx)(s.h2,{id:"mailing",children:"Mailing"}),"\n",(0,t.jsx)(s.h3,{id:"send-email",children:(0,t.jsx)(s.code,{children:"Send email"})}),"\n",(0,t.jsx)(s.p,{children:"Send an email containing all asset's static and dynamic data to audit company, in order to either verify or reject the claim."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"HTTP Request Method"}),": POST"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Roles"}),": User"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Request URL"}),": ",(0,t.jsx)(s.code,{children:"{{BASE_RESTFUL_URL}}/v1/send-email"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Request Body"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "email": "nal@noctocode.com",\n  "entryFormId": "e6fe36fc-6d48-4029-8d44-15dbf960fe10"\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Response"})}),"\n",(0,t.jsx)(s.p,{children:"Upon successful completion of a request, the server will issue a status code of 200. Successful response should look like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "sendEmail": true\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var t=n(6540);const i={},a=t.createContext(i);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);