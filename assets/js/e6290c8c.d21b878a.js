"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[9585],{7233:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=o(5893),r=o(1151);const l={title:"New Project Onboarding",sidebar_position:2},t=void 0,s={id:"resources/project-onboarding",title:"New Project Onboarding",description:"The following guide provides a list of resources needed to launch your own lending pools with Defactor Pools for liquidity and funding.",source:"@site/docs/resources/project-onboarding.md",sourceDirName:"resources",slug:"/resources/project-onboarding",permalink:"/docs/resources/project-onboarding",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/resources/project-onboarding.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"New Project Onboarding",sidebar_position:2},sidebar:"docSidebar",previous:{title:"Additional Resources",permalink:"/docs/resources/additional-resources"},next:{title:"Technology Roadmap",permalink:"/docs/resources/roadmap"}},a={},c=[{value:"Domain Name",id:"domain-name",level:3},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Backend Configuration and Deployment",id:"backend-configuration-and-deployment",level:2},{value:"Webapp Branding",id:"webapp-branding",level:2},{value:"Logos",id:"logos",level:3},{value:"Organization data",id:"organization-data",level:3},{value:"Color Scheme",id:"color-scheme",level:3},{value:"Fonts",id:"fonts",level:3},{value:"Deploy Frontend Instance",id:"deploy-frontend-instance",level:2},{value:"Set Up Pools",id:"set-up-pools",level:2},{value:"Testing",id:"testing",level:2},{value:"Post-Deployment",id:"post-deployment",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The following guide provides a list of resources needed to launch your own lending pools with ",(0,i.jsx)(n.a,{href:"https://www.defactor.com/pools",children:(0,i.jsx)(n.strong,{children:"Defactor Pools"})})," for liquidity and funding."]}),"\n",(0,i.jsx)(n.h3,{id:"domain-name",children:"Domain Name"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project name / description"}),"\n",(0,i.jsx)(n.li,{children:"Domain DNS changes and verification"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Define ",(0,i.jsx)(n.a,{href:"../smart-contracts/pools-contract/smart-contract-erc20-collateral-pool",children:"smart contract"})," type","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../smart-contracts/pools-contract/smart-contract-erc20-collateral-pool",children:(0,i.jsx)(n.code,{children:"Pools"})}),", allows users to create, manage, and interact with funding pools using ",(0,i.jsx)(n.code,{children:"ERC20"}),", ",(0,i.jsx)(n.code,{children:"ERC721"}),", and ",(0,i.jsx)(n.code,{children:"ERC1155"})," tokens as collaterals. Every pool can have as many collateral tokens as needed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../smart-contracts/erc20-collateral-pool-contract/smart-contract-erc20-collateral-pool",children:(0,i.jsx)(n.code,{children:"ERC20CollateralPool"})}),", designed for EVM based blockchains, manages pools of collateralized loans using ",(0,i.jsx)(n.code,{children:"ERC20"})," standard token. Every pool has only a ",(0,i.jsx)(n.code,{children:"ERC20"})," collateral pool. Also, for every collateral token it requires an address as an oracle to indicate the price of that token."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Define network deployment (Testnet for testing and Mainnet for live deployment)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../blockchain-and-web3/ethereum",children:"Ethereum"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../blockchain-and-web3/polygon",children:"Polygon"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../blockchain-and-web3/algorand",children:"Algorand"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Define a ",(0,i.jsx)(n.code,{children:"ERC20"})," base token with a precision of 6 (e.g., usdc, euroc, etc.)"]}),"\n",(0,i.jsx)(n.li,{children:"Define whether it is necessary to deploy new tokens to use as collateral."}),"\n",(0,i.jsx)(n.li,{children:"Smart contract deployment and testing"}),"\n",(0,i.jsx)(n.li,{children:"Private Key Management"}),"\n",(0,i.jsx)(n.li,{children:"Auditing and security checks"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"backend-configuration-and-deployment",children:"Backend Configuration and Deployment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Server setup and configuration","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The backend uses ",(0,i.jsx)(n.code,{children:"CoinGecko API"})," to get the price of the collateral token in terms of base token: For example, if the collateral token is ",(0,i.jsx)(n.code,{children:"FACTR"})," it must be available in the API coin list, which is under the name ",(0,i.jsx)(n.code,{children:"defactor"}),".\nAlso, the base token must be available in the currency list, for example for ",(0,i.jsx)(n.code,{children:"usdc"})," the usd currency must be supported, because they have a 1:1 ratio."]}),"\n",(0,i.jsx)(n.li,{children:"Setup the contract, admin and borrower addresses"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Database setup and management"}),"\n",(0,i.jsx)(n.li,{children:"Integration with smart contracts and blockchain"}),"\n",(0,i.jsx)(n.li,{children:"Security measures and data protection"}),"\n",(0,i.jsx)(n.li,{children:"Deployment and continuous integration/continuous deployment (CI/CD) setup"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"webapp-branding",children:"Webapp Branding"}),"\n",(0,i.jsx)(n.h3,{id:"logos",children:"Logos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Design and integration","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SVG project logo"}),"\n",(0,i.jsx)(n.li,{children:"Social media preview image"}),"\n",(0,i.jsx)(n.li,{children:"Favicon"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"organization-data",children:"Organization data"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Project name"}),"\n",(0,i.jsx)(n.li,{children:"Project Description"}),"\n",(0,i.jsx)(n.li,{children:"URL of the company logo"}),"\n",(0,i.jsx)(n.li,{children:"Website URL and X URL"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"color-scheme",children:"Color Scheme"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Define the color scheme of your project","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The background color"}),"\n",(0,i.jsxs)(n.li,{children:["The primary and secondary color with the following variants:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"main"}),": The main color of the webapp"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"light"}),": A lighter color than ",(0,i.jsx)(n.code,{children:"main"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dark"}),": A darker color than ",(0,i.jsx)(n.code,{children:"main"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fonts",children:"Fonts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Selection and integration"}),"\n",(0,i.jsx)(n.li,{children:"Branding consistency across all platforms and materials"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deploy-frontend-instance",children:"Deploy Frontend Instance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Google Analytics Tracking Code"}),"\n",(0,i.jsxs)(n.li,{children:["Frontend CI / CD Configuration","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setup the contract, token and collateral token addresses"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"set-up-pools",children:"Set Up Pools"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"URL with the token icon image image"}),"\n",(0,i.jsx)(n.li,{children:"Pool Name and Description for metadata"}),"\n",(0,i.jsxs)(n.li,{children:["Create Pools","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you use the ",(0,i.jsx)(n.code,{children:"erc20collateralpool"})," contract you can use the ",(0,i.jsx)(n.a,{href:"../back-end-api/erc20CollateralToken/restful#create-pool",children:"RESTful"})," or ",(0,i.jsx)(n.a,{href:"../back-end-api/erc20CollateralToken/graphql#create-pool",children:"GraphQL"})," endpoints, and update their metadata using the corresponding endpoint"]}),"\n",(0,i.jsxs)(n.li,{children:["If you use the ",(0,i.jsx)(n.code,{children:"pool"})," contract use the ",(0,i.jsx)(n.a,{href:"../back-end-api/pools/insertPool",children:"insert pool"})," endpoint."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Functional testing (features and functionalities work as expected)"}),"\n",(0,i.jsx)(n.li,{children:"Integration testing (different parts of the project work together)"}),"\n",(0,i.jsx)(n.li,{children:"User acceptance testing (real users test the project in a staged environment)"}),"\n",(0,i.jsx)(n.li,{children:"Performance testing (app\u2019s performance under various conditions)"}),"\n",(0,i.jsx)(n.li,{children:"Security testing (identification of vulnerabilities and fixing)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"post-deployment",children:"Post-Deployment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Monitoring tools setup (for performance, errors, and security)"}),"\n",(0,i.jsx)(n.li,{children:"Feedback loop establishment for continuous improvement"}),"\n",(0,i.jsx)(n.li,{children:"Marketing and outreach strategy implementation"}),"\n",(0,i.jsx)(n.li,{children:"User support and documentation"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>t});var i=o(7294);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);