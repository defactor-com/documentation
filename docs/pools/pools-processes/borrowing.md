---
id: pool-borrowing-process
title: Pool Borrowing Process
sidebar_position: 2
---

Overcollateralized crypto borrowing is the predominant form of lending and borrowing on the blockchain. It allows for the creation of a lending and borrowing market without the need for credit history checks. Borrowers can use their volatile crypto assets as collateral to borrow stablecoins, providing a way to access liquidity without selling their crypto assets and thus protecting those crypto assets from market volatility.

### How do I borrow crypto assets from a pool?

If you choose to borrow from a pool, start by connecting your wallet to the platform, navigate to the supply/borrow button in the tab of the pool of your choice, or navigate to the pool page and choose borrow from the top right corner. Once you decide on the amount you would like to borrow, simply input that amount and the pool will calculate how much collateral you need to supply before completing the borrow action. The minimum collateral amount is calculated according to the pool's [loan-to-value (LTV) ratio](/docs/resources/glossary#loan-to-value-ltv-ratio-also-called-collateral-token-percentage). If you have sufficient funds to complete the transaction then proceed with the borrow action and sign the transaction in your wallet.

### How is Interest Calculated on My Position

When you have an open borrow position (borrowing liquidity from a pool) interest is accrued on your position every second that the position is open. When deciding which pool suits your needs, you first need to look at the APY (annual percentage yield) of that pool. If you want to know how much interest you will be paying every second your position is open, you simply have to take into consideration 2 metrics:

- **The time elapsed since borrow:** The duration of your loan refers to the time between your loan action and the current time `((Current date) - (Borrow date))` measured in seconds to accurately capture the time your loan has been sitting in the pool.
- **The interest rate of the pool:** Reflected in the pool metric calculated on a per second basis. `APY / (365 Days * 24 Hours * 60 Minutes * 60 Seconds)`.

Your interest payment is then calculated as follows: 

```plaintext
(Amount Borrowed * Duration * Interest rate) / (Year in Seconds * bps divider)
```

### Loan Repayment

Repaying a loan involves the borrower paying back the principal amount plus any accrued interest to reclaim their collateral. The overcollateralized nature of the loans provides an economic incentive for borrowers to repay their loans and reclaim their collateral.

### How it works?

Once you choose to repay your loan go to the borrowed page that shows you all your borrowed positions in different pools (open and closed), or you can also go to the pool page where you borrowed from. Choose the borrow position you would like to repay. A window will pop up showing you the position details including how much you borrowed, the interest that accrued since you opened that position and the total amount that you would need to pay to close that position. You can choose if repay your loan partially or completely. If you proceed with the transaction you pay the required amounts and sign the transaction from your wallet and once the transaction is confirmed, then you will get your collateral back.
