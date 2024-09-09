---
title: Assets New Project Onboarding
---

## Tokenizing an asset
Any kind of asset can easily be tokenized using Assets. When tokenizing an asset, the first step is always gathering the data relevant to that particular asset. This data can then be entered into Assets, after which the tokens representing the asset can be created. 

### Templates
Assets are tokenized according to templates. Templates outline which data is needed to tokenize an asset. Assets already contains templates for a wide variety of Assets, or you can create a custom template yourself. A template should contain all the relevant dynamic data (data which gets updated throughout the lifetime of the asset) and static data (characteristics, id, etc.) of the asset.

### Asset verification
For certain asset types you may want to add an additional layer of trust. This can be done by having an external third party verifying the asset and data attached to it. Once an asset has been verified, other users can see this on the page of the asset. Assets supports this in the pre-configured templates.

## ERC-20 vs ERC-3643
When it comes to asset tokenization, ERC-20 and ERC-3643 tokens offer different advantages based on their design and features. ERC-20 tokens provide a straightforward and flexible option for creating fungible tokens, making them suitable for tokenizing assets where regulatory oversight is minimal and interoperability with various platforms is prioritized. However, ERC-3643 tokens are specifically tailored for asset tokenization that requires stringent regulatory compliance, incorporating advanced features such as KYC/AML verification, whitelisting, and the ability to mint or burn tokens according to regulatory needs. While ERC-20 is ideal for broader applications, ERC-3643 offers a more robust framework for tokenizing assets that demand higher levels of control, security, and compliance.

### ERC-20

* **Widespread Adoption:** ERC-20 tokens are the most commonly used token standard on the Ethereum blockchain. Their simplicity and flexibility have led to their adoption by a wide range of projects, making them the default standard for fungible tokens in the cryptocurrency ecosystem.
* **Interoperability:** ERC-20 tokens are designed to be easily integrated with various wallets, exchanges, and decentralized applications (dApps) across the Ethereum network. This compatibility ensures that ERC-20 tokens can be transferred and used seamlessly across different platforms, enhancing their usability and liquidity.
* **Efficient and Reliable:** ERC-20 tokens benefit from Ethereum's (and all EVM-compatible blockchain's) robust infrastructure, including its well-established network of nodes and miners. This ensures efficient transactions and high reliability, with strong security measures embedded in the underlying blockchain protocol.

ERC-20 tokens have become a cornerstone of the Ethereum ecosystem, offering a simple yet powerful tool for creating fungible assets. While they may not include advanced compliance features, their flexibility and compatibility make them an excellent choice for a wide range of decentralized finance (DeFi) applications, token sales, and other blockchain-based activities.

### ERC-3643
* **Regulatory Compliance:** ERC-3643 tokens are specifically designed to meet regulatory requirements. This includes features for KYC/AML (Know Your Customer/Anti-Money Laundering) compliance, ensuring that only authorized and verified participants can hold and trade these tokens.
* **Whitelisting and Identity Management:** The ERC-3643 standard supports whitelisting, allowing issuers to control who can own and transfer tokens. This is crucial for maintaining compliance and ensuring that only eligible participants engage with the tokens.
* **Advanced Features:** ERC-3643 provides additional functionality such as the ability to mint and burn tokens based on regulatory requirements, enhancing the flexibility and control over the token lifecycle.
Enhanced Security: The standard includes mechanisms to enforce compliance and prevent unauthorized access, ensuring a secure environment for asset tokenization.

ERC-3643 tokens offer a sophisticated solution for asset tokenization, providing the necessary tools to meet regulatory standards and manage complex compliance requirements effectively. This makes ERC-3643 an ideal choice for tokenizing financial instruments and other assets that require stringent oversight and control.
