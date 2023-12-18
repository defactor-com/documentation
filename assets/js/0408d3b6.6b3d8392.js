"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[671],{8166:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=l(5893),t=l(1151);const c={id:"smart-contract-erc20-collateral-pool-technical-aspects",title:"Technical Aspects",sidebar_position:2,tags:["Technical Aspects"]},s=void 0,o={id:"smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool-technical-aspects",title:"Technical Aspects",description:"Contract Modules",source:"@site/docs/smart-contracts/ERC20CollateralPool/technical_aspects.md",sourceDirName:"smart-contracts/ERC20CollateralPool",slug:"/smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool-technical-aspects",permalink:"/documentation/docs/smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool-technical-aspects",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/smart-contracts/ERC20CollateralPool/technical_aspects.md",tags:[{label:"Technical Aspects",permalink:"/documentation/docs/tags/technical-aspects"}],version:"current",sidebarPosition:2,frontMatter:{id:"smart-contract-erc20-collateral-pool-technical-aspects",title:"Technical Aspects",sidebar_position:2,tags:["Technical Aspects"]},sidebar:"docSidebar",previous:{title:"Introduction",permalink:"/documentation/docs/smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool"},next:{title:"Example",permalink:"/documentation/docs/smart-contracts/ERC20CollateralPool/smart-contract-erc20-collateral-pool-example"}},r={},a=[{value:"Contract Modules",id:"contract-modules",level:2},{value:"Key Components",id:"key-components",level:2},{value:"Constants",id:"constants",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Pool Management",id:"pool-management",level:3},{value:"Contract Control",id:"contract-control",level:3},{value:"User Interactions",id:"user-interactions",level:3},{value:"Calculation Utilities",id:"calculation-utilities",level:3},{value:"View Functions",id:"view-functions",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Event Logging",id:"event-logging",level:3},{value:"Security Features",id:"security-features",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Upgradeability",id:"upgradeability",level:3},{value:"Important Considerations",id:"important-considerations",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"contract-modules",children:"Contract Modules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ERC20CollateralPool.sol"}),": Main contract."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ERC20CollateralPool.interface.sol"}),": Interface for contract structures and events."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ERC20CollateralPool.storage.sol"}),": Storage contract for state management."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AggregatorV3Interface.sol"}),": Interface for Chainlink price feeds."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"key-components",children:"Key Components"}),"\n",(0,i.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LIQUIDATION_PROTOCOL_FEE"}),": Fixed fee for liquidation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LIQUIDATION_FEE"}),": Additional liquidation fee."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OZ_IN_G"}),": Ounces to grams conversion constant."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ONE_YEAR"}),": One year in seconds."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HOUNDRED"}),": Constant for percentage calculations."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"__ERC20CollateralPool_init"}),": Initialize the contract with admin, USDC token, and pools."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pool-management",children:"Pool Management"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"addPool"}),": Add a new pool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"announceEditPool"}),": Announce upcoming pool edits."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"commitEditPool"}),": Commit announced pool edits."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cancelEditPool"}),": Cancel announced pool edits."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contract-control",children:"Contract Control"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pause"})," / ",(0,i.jsx)(n.code,{children:"unpause"}),": Pause or unpause contract operations."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"user-interactions",children:"User Interactions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lend"}),": Lend USDC to a pool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"borrow"}),": Borrow USDC against collateral."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repay"}),": Repay borrowed USDC with interest."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"claimRewards"}),": Claim rewards after pool closure."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"claimUnliquidatedCollateral"}),": Claim back collateral if not repaid."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"liquidatePool"}),": Liquidate a pool after closure."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"calculation-utilities",children:"Calculation Utilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"calculateRepayInterest"}),": Calculate repayment interest."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"calculateCollateralTokenAmount"}),": Calculate required collateral token amount."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"view-functions",children:"View Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getPools"}),": Get details of all pools."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsxs)(n.p,{children:["Defined errors for exceptional scenarios, like ",(0,i.jsx)(n.code,{children:"PoolEndsAtIsInThePast"})," and ",(0,i.jsx)(n.code,{children:"AdminMustNotBeZeroAddress"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"event-logging",children:"Event Logging"}),"\n",(0,i.jsxs)(n.p,{children:["Events like ",(0,i.jsx)(n.code,{children:"LendEvent"}),", ",(0,i.jsx)(n.code,{children:"BorrowEvent"}),", and ",(0,i.jsx)(n.code,{children:"RepayEvent"})," for activity tracking."]}),"\n",(0,i.jsx)(n.h3,{id:"security-features",children:"Security Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pausable"}),": Stop activities in emergencies."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Control"}),": Restricted functions for specific roles."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Chainlink Integration"}),": For accurate price information."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["Uses OpenZeppelin's ",(0,i.jsx)(n.code,{children:"SafeERC20Upgradeable"}),", ",(0,i.jsx)(n.code,{children:"AccessControlUpgradeable"}),", ",(0,i.jsx)(n.code,{children:"PausableUpgradeable"}),", and math utilities."]}),"\n",(0,i.jsx)(n.h3,{id:"upgradeability",children:"Upgradeability"}),"\n",(0,i.jsx)(n.p,{children:"Designed with OpenZeppelin's upgradeable contracts framework."}),"\n",(0,i.jsx)(n.h3,{id:"important-considerations",children:"Important Considerations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Precision and Rounding"}),": Handle mathematical calculations accurately."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Time Dependencies"}),": Time-sensitive functions need careful handling."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security"}),": Regular audits and reviews are recommended."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>s});var i=l(7294);const t={},c=i.createContext(t);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);