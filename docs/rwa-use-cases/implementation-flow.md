---
id: lease-agreement-use-case
title: Use Case
sidebar_position: 4
---

## Real-World Use Case

In the world of loans there are some actors that are involved in the process of lending money whether they in the real-world as it has been done for decades or if they are in the digital world as it has starting been doing nowadays. This document focus on traditional loan process abstracting away the complexities and specifications to a more generalized example to illustrate how each process differs from the other.

In this tangible realm, several entities play integral roles in the lending process. To illustrate, the entity extending the loan is typically a banking institution, denoted as BankCredit. The individual procuring the loan from the bank is a person, referred to as Alice. Further, the entity orchestrating the loan process on behalf of the person is a car dealership, identified as GoodCar. For the purposes of this example, we will consider these entities as **BankCredit**, **Alice**, and **GoodCar**, respectively.

The following scenario is designed to broaden the reader's perspective on the potential applications of tokenization in the lending process. It endeavors to illuminate how tokenization can be harnessed to facilitate processes of the tangible world that, due to their inherent nature, might otherwise be deemed impractical or challenging.

**BankCredit exclusively provides financing services for individuals seeking to purchase automobiles. Alice, an aspiring car owner, is currently in the process of acquiring a vehicle from GoodCar, a reputable dealership specializing in car sales.**

### Business Logic

As a finance institutions, BankCredit has terms and conditions that every borrower must know and agree if they want to proceed with them:

- The prospective borrower is required to demonstrate creditworthiness through a favorable credit score. Additionally, a stable employment history is essential. A down payment equivalent to a minimum of 20% of the car's appraised value is mandatory.

- Every car leasing that GoodCar sells is a 3 year lease. The first payment will be the following after the vehicle is delivered and it is calculated based on the car's value, the down payment, and the interest rate of `5%` that'll be constant over the lease period.

- Only brand-new vehicles are eligible for financing through BankCredit. Loan requests for any other vehicle types will be declined. The borrower assumes responsibility for making timely monthly payments commensurate with the appraised value of the car. Failure to remit three consecutive payments will result in the repossession of the vehicle by BankCredit, without any entitlement to a refund.

- In the event of a delayed monthly payment, the borrower will incur a late fee equivalent to 5% of the monthly payment amount.

- The lease spans a total of 36 payments. Borrowers are afforded flexibility in making payments throughout the month. However, it is imperative that payments are submitted before the month's end to avoid any sanctions or penalties.

- At the conclusion of the 3-year lease term, the borrower is required to return the vehicle to GoodCar following the outlined return procedures. The return process includes a comprehensive vehicle inspection to assess its condition. The borrower will be responsible for any excess wear and tear beyond normal usage, as defined by industry standards. If the vehicle meets the pre-established return conditions, the borrower has the option to purchase the vehicle at a discounted price, as specified in the lease agreement. Failure to return the vehicle in accordance with the agreed-upon procedures may result in additional charges and penalties.

- In the event that the borrower wishes to terminate the lease agreement before the end of the specified 3-year term, an early termination fee will be applicable. The early termination fee will be calculated as `70%` of the remaining payments, with a minimum fee of `10%`. Additionally, the borrower will be responsible for any outstanding fees or charges accrued up to the termination date. BankCredit reserves the right to repossess the vehicle if early termination conditions are not met according to the terms stipulated in the lease agreement.

- To maintain the residual value of the leased vehicle, the borrower agrees to adhere to the annual mileage limit specified in the lease agreement. In the event that the total mileage exceeds the agreed-upon limit at the end of the lease term, excess mileage charges will apply. The excess mileage charge is `$0.1` per mile over the limit. Borrowers are encouraged to monitor their mileage throughout the lease term to avoid additional charges.

> In a real bank there are a lot more terms and conditions that are not listed here, but this is no and neither intent to be an official one, this is only for demonstration purposes, please, do not consider it at all as an equivalent document of a real term and conditions document.

### System Architecture

There are four main components in this system required to simulate this use case:

#### Backend Technology

1. Database

   - Use a relational database to store borrower information, lease details, payment history, and other relevant data.
   - Ensure the database is secure and compliant with data protection regulations.

1. Server-Side Logic

   - Implement server-side logic to handle credit score verification, employment history checks, and down payment calculations.
   - Develop algorithms for lease payment calculations based on car value, down payment, and interest rate.

1. Payment Processing

   - Integrate with a secure payment gateway to handle monthly lease payments and late fees.
   - Implement a scheduler for recurring payments and automate late fee assessments.

1. Mileage Tracking

   - Create a system to track and record mileage throughout the lease term.
   - Implement logic to calculate excess mileage charges based on the agreed-upon limit.

1. Lease Termination and Return
   - Develop processes for handling lease termination requests, calculating early termination fees, and managing the return of vehicles.
   - Include a module for vehicle inspections and condition assessments.

#### Security Measures

1. Data Encryption:

   - Encrypt sensitive data, including personal information, financial details, and transaction data.

1. Authentication and Authorization

   - Implement secure authentication mechanisms for user login.
   - Define role-based access controls to restrict access to sensitive functionalities.

1. Secure Communication

   - Use HTTPS protocols for secure communication between the web app and the server.
   - Implement secure APIs for communication between different system components.

1. Audit Trail
   Maintain an audit trail to log and monitor user activities, especially those related to financial transactions.

#### User Interface (Web App)

1. User Registration and Authentication

   - Create a user-friendly registration process with multi-factor authentication.
   - Provide a dashboard for borrowers to access lease details, payment history, and other relevant information.

1. Payment Management

   - Include a payment portal for borrowers to make monthly payments and view payment history.
   - Implement notifications for upcoming payments and late fees.

1. Lease Details and Termination

   - Display lease details, including car information, terms, and conditions.
   - Allow borrowers to request lease termination and provide information on early termination fees.

1. Mileage Tracking and Alerts

   - Include a section for borrowers to monitor their mileage and receive alerts when approaching the agreed-upon limit.

1. Return Process

   - Guide borrowers through the return process, including scheduling inspections and viewing purchase options.
   - Provide a clear interface for purchasing the vehicle at the end of the lease.

1. Customer Support
   - Integrate a support system, allowing borrowers to contact customer service for assistance.

#### Integration Points

1. Credit Score Verification

   - Integrate with credit reporting agencies to verify the creditworthiness of prospective borrowers.

1. Vehicle Appraisal

   - Connect with GoodCar's systems to obtain real-time information on car values and availability.

1. Payment Gateway

   - Integrate with a secure payment gateway for processing lease payments.

1. Communication
   - Implement communication channels such as email, SMS or modern messaging system for sending notifications and alerts.

### Lending Process Example

With the rules now clearly defined for all parties involved, let's examine how the process would unfold in the real world, without the intervention of blockchain technology.

The process initiates when an individual, in this instance, Alice, expresses the intention to lease a car from **GoodCar** without the immediate means or desire to make a full upfront payment. Subsequently, she approaches **BankCredit** to request a loan, intending to settle the entire cost of the car upfront and subsequently repay the loan through monthly installments. As a financial institution, **BankCredit** engages in the practice of lending money to individuals. However, to execute this, the bank must establish mechanisms ensuring that borrowers adhere to specified terms and conditions. Consequently, the bank's infrastructure must be equipped to perform crucial tasks, including validating Alice's creditworthiness and cultivating an environment where she is comfortable with the ensuing transparent lending process.

#### General Information of the Leasing

Alice Information:

- name: `Alice`
- address: `123 Main St, New York, NY 10001`
- contact info:
  - phone: `+1 123 456 7890`
  - email: `alice@mail.com`
- employment data:
  - company: `Good Software`
  - position: `Software Engineer`
  - annual salary: `$100,000`
  - start date: `2020-01-01`
  - end date: `currently working`

Vehicle Information:

- make: `Toyota`
- model: `Camry`
- year: `2024`
- color: `Silver`
- vin: `1234567890`
- value: `$26,420`

Lease Information:

- duration: `36` months
- monthly rate: `$616.47`
- mileage allowance: `4,473.876` miles per year

Payment Information:

- constant interest rate: `5%`
- initial payment: `$5,284.00`
- monthly payments: `$587.11` + `$29.36` = `$616.47`
- late fee: `5%` of the monthly payment amount
- excess mileage charge: `$0.1` per mile over the limit
- lease termination fee: `80%` of the remaining payments, with a minimum fee of `10%` for each remaining month
- total loan amount: `$21,136.00`
- due date: day `01` of each month
- status: `active`
- start date: `2024-01-01`
- end date: `2027-02-01`

#### Loan Process

Alice approaches to the bank for a loan:

1. The bank will ask Alice for her personal information to verify her identity and credit score.
1. The bank will ask Alice for her employment history to verify her income.
1. The bank will ask Alice for a down payment (`20%`) to make sure she is committed to the process.
1. The bank will ask Alice for the car information to ensure it is a brand new car.
1. The bank will ask Alice for the car value to calculate the monthly payments.
1. The bank will show Alice the interest (`5%`) for the monthly payments.
1. The bank will initiate communications with GoodCar to ensure the car is available and the information provided by Alice is correct.
1. Based on the car specifications, the bank stipulates the maximum mileage per year is `4,473.876 miles`.
1. The bank shows Alice the terms and conditions, including sanctions in case of default for the loan and maximum mileage usage per month.
1. The bank will ask Alice to sign the terms and conditions.
1. The bank will notify the car dealership that the loan has been approved.
1. The bank will notify Alice that the loan has been approved.
1. The car dealership will notify Alice that the car is ready to be picked up.
1. Alice will go to the car dealership to pick up the car.
1. Alice will sign the last required documents provided by the car dealership to pick up the car.
1. Alice now owns the car.

Alice's payments will start the following month after the vehicle is delivered. By this point, she has completed the paperwork for the car delivery and is now required to commence paying the loan to the bank. The bank will initiate the process to collect the monthly payments from Alice and ensure that she pays on time, adhering to the terms and conditions of the loan agreed upon by both parties.

> Quick note: If the bank determines that Alice is not a suitable candidate for a loan (due to internal restrictions, such as the requirement that borrowers must be older than 30 years old), the bank will notify Alice of the loan denial. In such a case, the process will conclude without further verification, despite her meeting all other requirements except the age restriction.

Based on all the terms and conditions agreed up to this point by both parties and considering that Alice's deadline payment is the 1st of each month, let's simulate the following scenario of payments by Alice, assuming that a month has only 30 days:

**Day 0**

- Alice acquires possession of the vehicle.

**Day 12**

- Alice accumulates an odometer reading of 100.00 miles.

**Day 20**

- Alice increases the cumulative mileage of the vehicle to 200.00 miles.

**Day 31**

- Alice adheres to the stipulated terms and conditions, thereby avoiding any penalties.
- Timely remittance of the monthly installment is executed by Alice.

**First year**

- The vehicle's odometer registers a total mileage of 3,400.00 miles under Alice's operation.
- Alice consistently fulfills her obligation by punctually remitting 12 monthly payments.

**Day 398 (One year and two months)**

- Alice deviates from the agreed-upon payment schedule by 2 days.
- In consequence, a penalty is imposed, along with an additional charge of `5%` in accordance with the agreement.
- The resultant total due amounts to `$616.47` + `$29.36` = `$645.83`.

**Day 425 (One year and three months)**

- Alice delays the payment by 1 day, incurring a penalty and an extra charge of `5%`, bringing the total payable to `$645.83`.

**Second year**

- Alice logs a total mileage of `4,500.00 miles` on the vehicle, surpassing the annual limit of `4,473.876 miles` by `26,124 miles`.
- Consequently, a fine of `$2,612.4` is levied.
- Alice maintains timely payment of 12 monthly installments and additionally remits `$2,612.4` for the excess mileage.

**Third year**

- Alice adheres to the annual mileage limit of `4,473.876 miles`, avoiding any fines.
- Timely settlement of 12 monthly payments is accomplished, marking the conclusion of all financial obligations.

Given that Alice has fulfilled all monthly payments, she is presented with two alternatives for terminating the lease agreement:

1. Surrender the vehicle to the authorized car dealership.
1. Opt to purchase the vehicle outright.

Alice decides to return the car to the car dealership, so the bank will notify the car dealership that Alice is going to return the car and the car dealership will notify Alice the process to return the car.

In order to facilitate these interactions, Alice must be afforded the capability to execute payments through a web application provided by the bank. This web application serves as a comprehensive platform enabling Alice to access detailed information pertaining to the loan and the associated vehicle. Concurrently, the bank utilizes this platform to notify Alice promptly about any alterations in the terms and conditions of the loan, fostering an open and transparent line of communication. This includes notifications regarding warnings for excess mileage, delayed payments or any other the bank may consider important.

To operationalize this solution, the bank necessitates a repository of essential documents to empower Alice in executing payments, comprehending terms and conditions, and reviewing pertinent car details. This mandate underscores the imperative for a robust database to store all loan and vehicle-related information. Furthermore, a server-side logic is indispensable for handling the intricate business logic associated with loans and vehicles. A dedicated payment processing system assumes the role of managing all transactions, encompassing regular payments and late fees. Additionally, a mileage tracking system is imperative to systematically record and monitor mileage throughout the duration of the lease. Finally, a well-structured lease termination and return process is requisite to manage the intricacies surrounding the return of the vehicle.

Having provided a brief overview of the real-world lending process, let's delve deeper to dissect the intricacies of each interaction that occurred between Alice, the bank, and the car dealership.

The key interactions discernible from the preceding flow example include:

- Authenticate user identity through a login process on a website or mobile app.
- Verify user credit score.
- Validate user employment history.
- Confirm user down payment.
- Verify car details.
- Validate car valuation.
- Compute monthly payment amounts.
- Facilitate the execution of monthly payments.
- Process payments for late fees.
- Process payments for excess mileage charges.
- Ensure ongoing validity of user identity and an active session.
- Display the terms and conditions of the loan.
- Conclude the loan agreement.
- Establish communication with the car dealership to notify the approval of the loan.
- Establish communication with the car dealership to communicate the conclusion of the loan.

Now, let's focus on the primary interactions to contrast with a Blockchain solution. For instance, for Alice to qualify for credit and secure a loan, approval must exclusively come from the bank entity, adhering to their comprehensive set of rules. Subsequently:

1. User credit score: The bank entity, comprised of individuals responsible for evaluating a person's likelihood to repay the loan based on established metrics and criteria, undertakes the verification of the user's credit score.
1. User employment history: Similar to the credit score verification, the bank entity, staffed by individuals, assesses the user's employment history to ascertain the stability of their job and income, aligning with predefined metrics and criteria.
1. Make monthly payments: Typically, a system provided by the bank entity, integrated with a database solution, validates various aspects such as the number of payments made, timeliness of payments, payment validity, and resolution of late fees.
1. Pay late fees: The bank entity's system is responsible for validating and imposing charges, if necessary, when a user fails to make timely payments, with corresponding amounts applied as appropriate.
1. Finish or conclude the loan: The completion of a loan entails the user fulfilling all monthly payments, settling any accrued late fees, and adhering to all the terms and conditions stipulated in the loan agreement. This process involves direct communication with the bank entity, which records and stores all transactions in a database, providing a comprehensive view of each user's payment history and the current stage of their loan.

This previous examples illustrate how the process of lending money works in the real-world, but to apply the same process in the digital world some part of the flow needs to be changed? Let's see how the process would looks like in the digital world with the intervention of the Blockchain technology.

#### Layer Diagram

<!-- TODO: create a diagram to showcase where each part of the logic is going to be running base on the business rules -->

## Real-World Tokenization Use Case

The key actors in this process mirror those in the real-world use case, with a notable difference being the incorporation of a new technology in the lending process. Rather than entirely replacing the existing flow, this update introduces a new agent or entity within the process.

### Business Logic

Let's extend the business logic from the real-world use case to the digital world use case where any new agreement between the bank and the borrower will need to follow the same rules and conditions as the real-world use case plus the new terms and conditions related to the Blockchain integration and agreements.

- Users must comply with all applicable laws and regulations in their jurisdiction when interacting with the Contract.

- Users acknowledge and accept the inherent risks associated with decentralized financial protocols. Loss of funds, market fluctuations, and smart contract vulnerabilities are possible, and users participate at their own risk.

- Users can lend USDC into specific pools by providing the desired amount. Lenders earn rewards based on the pool's reward rate.

- Users can borrow USDC from pools by collateralizing assets. Borrowed funds include interest, and collateral must be provided upfront.

- Borrowers must repay borrowed amounts with interest within the specified time frame. Collateral is returned upon successful repayment.

- After pool closure, lenders can claim rewards based on their participation. Rewards are distributed according to the pool's reward distribution mechanism.

- Users failing to repay on time can claim unliquidated collateral after pool closure. This process is subject to specific conditions.

- The Contract may undergo updates and improvements. Users are encouraged to stay informed about any changes.

The key distinction from the real-world example is that, in this scenario, when a new loan request arises, the bank's conditions can be more lenient as the funds are originated from network users rather than the bank itself. Consequently, the assessment process leans heavily on the collective judgment of the lenders, affording the bank greater flexibility in shaping the terms and conditions of the loan.

Once a loan request is approved, a fundraising period ensues, during which a percentage of the loan amount is gathered. Upon the conclusion of this fundraising phase, the standard leasing process proceeds until its culmination. At this point, the loan is closed, and lenders become eligible to claim the rewards associated with their participation in the lending pool. This model introduces a decentralized and collaborative approach to lending, wherein user contributions influence the terms of the loan and the subsequent distribution of rewards.

### System Architecture

There are four main components already described from the beginning of this example, now, with the introduction of Blockchain there is new component that is integrated into the process which is the smart contract interaction.

The architectural framework for a blockchain solution is inherently provided by the network itself. The novel component in this context is the introduction of a smart contract, managed and deployed by `Defactor`. The integration of this smart contract into the existing lending logic is the primary requirement for the bank to leverage the benefits of blockchain technology. A notable advantage of interfacing with the `ERC20CollateralPool` contract is that the bank is relieved of concerns related to fund security and liquidity. In this paradigm, the bank establishes a loan pool for each borrower, utilizing the same car that is being leased as collateral.

Consequently, the fundamental infrastructure of the bank remains largely unchanged, requiring only minor adaptations to align the borrowing process with the options available for borrowing within a blockchain network. This integration allows the bank to tap into the security and efficiency benefits offered by blockchain technology without overhauling its existing operational framework.

#### Backend Technology

1. Smart Contract

   - Implement a smart contract on the blockchain for lease agreements. These contracts can automate and enforce the terms of the lease and penalties.
   - Ensure that smart contract are tamper-proof and provide a transparent ledger of all contractual actions.

1. System Wallet Signer

   - Integrate with a secure wallet provider to sign actions.
   - Implement a secure authentication mechanism for admin users of the bank entity to get privilege access to interact with the smart contract.

1. Database

   - Use a relational database to store borrower information, lease details, payment history, smart contract linking, and other relevant data.
   - Ensure the database is secure and compliant with data protection regulations.

1. Server-Side Logic

   - Implement server-side logic to handle credit score verification, employment history checks, and down payment calculations.
   - Develop algorithms for lease payment calculations based on car value, down payment, and interest rate.

1. Payment Processing

   - Integrate with a secure payment gateway to handle monthly lease payments and late fees.
   - Implement a scheduler for recurring payments and automate late fee assessments.

1. Mileage Tracking

   - Create a system to track and record mileage throughout the lease term.
   - Implement logic to calculate excess mileage charges based on the agreed-upon limit.

1. Lease Termination and Return
   - Develop processes for handling lease termination requests, calculating early termination fees, and managing the return of vehicles.
   - Include a module for vehicle inspections and condition assessments.

#### Security Measures

1. Data Encryption:

   - Encrypt sensitive data, including personal information, financial details, and transaction data.

1. Authentication and Authorization

   - Implement secure authentication mechanisms for user login.
   - Define role-based access controls to restrict access to sensitive functionalities.

1. Secure Communication

   - Use HTTPS protocols for secure communication between the web app and the server.
   - Implement secure APIs for communication between different system components.

1. Audit Trail
   Maintain an audit trail to log and monitor user activities, especially those related to financial transactions.

#### User Interface (Web App)

1. User Registration and Authentication

   - Create a user-friendly registration process with multi-factor authentication.
   - Provide a dashboard for borrowers to access lease details, payment history, and other relevant information.

1. Payment Management

   - Include a payment portal for borrowers to make monthly payments and view payment history.
   - Implement notifications for upcoming payments and late fees.

1. Funding and Pool Tracking Health

   - Display pool details, including the information of the loan, deadline, and other.

1. Lease Details and Termination

   - Display lease details, including car information, terms, and conditions.
   - Allow borrowers to request lease termination and provide information on early termination fees.

1. Mileage Tracking and Alerts

   - Include a section for borrowers to monitor their mileage and receive alerts when approaching the agreed-upon limit.

1. Return Process

   - Guide borrowers through the return process, including scheduling inspections and viewing purchase options.
   - Provide a clear interface for purchasing the vehicle at the end of the lease.

1. Customer Support

   - Integrate a support system, allowing borrowers to contact customer service for assistance.

1. User Anonymity Information

   - Implement a system to ensure user anonymity and privacy.
   - Create an scoring solution to present important data to lender of a pool to help them to decide whether or not to lend money to a given pool.

#### Integration Points

1. Credit Score Verification

   - Integrate with credit reporting agencies to verify the creditworthiness of prospective borrowers.

1. Vehicle Appraisal

   - Connect with GoodCar's systems to obtain real-time information on car values and availability.

1. Payment Gateway

   - Integrate with a secure payment gateway for processing lease payments.

1. Communication
   - Implement communication channels such as email, SMS or modern messaging system for sending notifications and alerts.

### Lending Process Example

With the rules now clearly defined for all parties involved, let's examine how the process would unfold in the real world, with the intervention of blockchain technology.

The process starts when an individual, illustrated by Alice in our example, expresses the desire to lease a car from **GoodCar** without the immediate means or inclination to make a full upfront payment. In pursuit of this, Alice approaches **BankCredit** to request a loan, intending to cover the entire cost of the car upfront and subsequently repay the loan through monthly installments. As a financial institution offering both traditional and blockchain-integrated leasing methods, **BankCredit** must ensure that Alice aligns with the stipulated terms and conditions.

Consequently, the bank's infrastructure must be equipped to perform essential tasks. Depending on the leasing method chosen by Alice, the bank should provide a tool for lenders to assess the health of Alice's finances. This tool should present relevant information in an anonymized manner, respecting Alice's privacy, allowing lenders to independently evaluate whether Alice is a favorable candidate for lending. This crucial step ensures transparency in the lending process and aligns with privacy considerations.

#### General Information of the Leasing

Alice Information:

- name: `Alice`
- address: `123 Main St, New York, NY 10001`
- contact info:
  - phone: `+1 123 456 7890`
  - email: `alice@mail.com`
- employment data:
  - company: `Good Software`
  - position: `Software Engineer`
  - annual salary: `$100,000`
  - start date: `2020-01-01`
  - end date: `currently working`

Vehicle Information:

- make: `Toyota`
- model: `Camry`
- year: `2024`
- color: `Silver`
- vin: `1234567890`
- value: `$26,420`

Lease Information:

- duration: `36` months
- monthly rate: `$616.47` + `pool fee`
- mileage allowance: `4,473.876` miles per year

Payment Information:

- constant interest rate: `5%` + `pool fee`
- initial payment: `$5,284.00`
- monthly payments: `$587.11` + `$29.36` + `pool fee` = `$616.47`
- late fee: `5%` of the monthly payment amount
- excess mileage charge: `$0.1` per mile over the limit
- lease termination fee: `80%` of the remaining payments, with a minimum fee of `10%` for each remaining month
- total loan amount: `$21,136.00`
- due date: day `01` of each month
- status: `active`
- start date: `2024-01-01`
- end date: `2027-02-01`

#### Loan Process

Alice approaches to the bank for a loan:

1. The bank will ask Alice for her personal information to verify her identity and credit score.
1. The bank will ask Alice for her employment history to verify her income.
1. The bank will ask Alice for a down payment (`20%`) to make sure she is committed to the process.
1. The bank will ask Alice for the car information to ensure it is a brand new car.
1. The bank will ask Alice for the car value to calculate the monthly payments.
1. The bank will show Alice the interest (`5%`) for the monthly payments.
1. The bank will initiate communications with GoodCar to ensure the car is available and the information provided by Alice is correct.
1. Based on the car specifications, the bank stipulates the maximum mileage per year is `4,473.876 miles`.
1. The bank shows Alice the terms and conditions, including sanctions in case of default for the loan and maximum mileage usage per month.
1. The bank will provide Alice with an overview of the initial phase, elucidating the process of collecting funds to cover the cost of lending the car.
1. Subsequently, the bank will apprise Alice that upon the successful collection of funds, the incurred cost can be settled, thereby facilitating the progression of the lending process.
1. The bank will ask Alice to sign the terms and conditions.
1. The bank will initiate the creation of a new pool in the blockchain specifically designated for Alice's loan, with the objective of raising the necessary funds.
1. Subsequently, the bank will inform Alice, following the outlined procedure in previous points, that the dedicated pool for her loan has been successfully created, signaling the commencement of the fund-raising phase.
1. Upon the completion of fund collection, the bank will notify Alice that the pool has been adequately funded, allowing the subsequent phases of the lending process to proceed.
1. The bank will notify the car dealership that the loan has been approved.
1. The bank will notify Alice that the loan has been approved.
1. The car dealership will notify Alice that the car is ready to be picked up.
1. Alice will go to the car dealership to pick up the car.
1. Alice will sign the last required documents provided by the car dealership to pick up the car.
1. Alice now owns the car.

Alice's payments will start the following month after the vehicle is delivered. By this point, she has completed the paperwork and blockchain interactions (made by the bank) for the car delivery and is now required to commence paying the loan to the bank. The bank will initiate the process to collect the monthly payments from Alice and ensure that she pays on time, adhering to the terms and conditions of the loan agreed upon by both parties.

Given that the contract permits only a final payment, the bank will be required to securely store the monthly payments in a designated wallet or central system until the final payment becomes due. Alice will receive notification from the bank, conveying that her monthly payments are safely stored in a secure wallet or central system. Additionally, she will be informed that she will be duly notified when the final payment is impending. This proactive communication ensures that the pool will be closed without the need for liquidation.

Based on all the terms and conditions agreed up to this point by both parties and considering that Alice's deadline payment is the 1st of each month, let's simulate the following scenario of payments by Alice, assuming that a month has only 30 days:

> Quick note: For each payment made by Alice, the bank will retain it until the final payment becomes due, at which point the bank will execute the payment and subsequently close the pool. It's important for Alice to be aware that the `ERC20CollateralPool` contract necessitates an additional fee to compensate lenders with rewards. This fee is distinct from the regular monthly payment, so the bank will calculate it and incorporate it into each monthly payment. It's crucial to note that this interest fee may fluctuate based on the specific pool, the total loan amount and total time the loan has been taken.

**Day 0**

- Alice acquires possession of the vehicle.

**Day 12**

- Alice accumulates an odometer reading of 100.00 miles.

**Day 20**

- Alice increases the cumulative mileage of the vehicle to 200.00 miles.

**Day 31**

- Alice adheres to the stipulated terms and conditions, thereby avoiding any penalties.
- Timely remittance of the monthly installment is executed by Alice.

**First year**

- The vehicle's odometer registers a total mileage of 3,400.00 miles under Alice's operation.
- Alice consistently fulfills her obligation by punctually remitting 12 monthly payments.

**Day 398 (One year and two months)**

- Alice deviates from the agreed-upon payment schedule by 2 days.
- In consequence, a penalty is imposed, along with an additional charge of `5%` in accordance with the agreement.
- The resultant total due amounts to `$616.47` + `pool fee` + `$29.36` = `$645.83` + `pool fee`.

**Day 425 (One year and three months)**

- Alice delays the payment by 1 day, incurring a penalty and an extra charge of `5%`, bringing the total payable to `$645.83` + `pool fee`.

**Second year**

- Alice logs a total mileage of `4,500.00 miles` on the vehicle, surpassing the annual limit of `4,473.876 miles` by `26,124 miles`.
- Consequently, a fine of `$2,612.4` is levied.
- Alice maintains timely payment of 12 monthly installments and additionally remits `$2,612.4` for the excess mileage.

**Third year**

- Alice adheres to the annual mileage limit of `4,473.876 miles`, avoiding any fines.
- Timely settlement of 12 monthly payments is accomplished, marking the conclusion of all financial obligations.

Given that Alice has fulfilled all monthly payments, the bank makes the full payment to the pool covering the reward fees for the lenders and the total amount lent so, now the pool is closed with success status and then, she is presented with two alternatives for terminating the lease agreement:

1. Surrender the vehicle to the authorized car dealership.
1. Opt to purchase the vehicle outright.

Upon Alice's decision to return the car to the dealership, the bank notifies the car dealership about Alice's intent to return the vehicle. Subsequently, the car dealership reciprocates by informing Alice about the requisite steps and procedures involved in the car return process. This mutual notification process ensures a seamless and coordinated transition in the return of the vehicle.

In order to facilitate these interactions, Alice must be afforded the capability to execute payments through a web application provided by the bank. This web application serves as a comprehensive platform enabling Alice to access detailed information pertaining to the loan, the associated vehicle and the pool status. Concurrently, the bank utilizes this platform to notify Alice promptly about any alterations in the terms and conditions of the loan, fostering an open and transparent line of communication. This includes notifications regarding warnings for excess mileage, delayed payments or any other the bank may consider important.

To operationalize this solution, the bank necessitates a repository of essential documents to empower Alice in executing payments, comprehending terms and conditions, and reviewing pertinent car details. This mandate underscores the imperative for a robust database to store all loan, vehicle-related information and pool associated with the loan. Furthermore, a server-side logic is indispensable for handling the intricate business logic associated with loans and vehicles. A dedicated payment processing system assumes the role of managing all transactions, encompassing regular payments, late fees and poo fees. Additionally, a mileage tracking system is imperative to systematically record and monitor mileage throughout the duration of the lease. Finally, a well-structured lease termination and return process is requisite to manage the intricacies surrounding the return of the vehicle.

Having provided a brief overview of the real-world lending process with blockchain integration, let's delve deeper to dissect the intricacies of each interaction that occurred between Alice, the bank, and the car dealership.

The key interactions discernible from the preceding flow example include:

- Authenticate user identity through a login process on a website or mobile app.
- Verify user credit score.
- Validate user employment history.
- Confirm user down payment.
- Verify car details.
- Validate car valuation.
- Compute monthly payment amounts including pool fees.
- Facilitate the execution of monthly payments.
- Process payments for late fees.
- Process payments for excess mileage charges.
- Ensure ongoing validity of user identity and an active session.
- Display the terms and conditions of the loan including the pool requirements.
- Conclude the loan agreement.
- Establish communication with the car dealership to notify the approval of the loan.
- Establish communication with the car dealership to communicate the conclusion of the loan.

Now, let's focus on the key interactions that distinguish this blockchain-based solution from a real-world one. For Alice to qualify for credit and secure a loan, approval is contingent upon the evaluation by potential lenders within the pool. These lenders rely on their knowledge and experience, leveraging the anonymous information presented by the bank entity. Following this initial evaluation:

1. User credit score: The bank entity, comprised of individuals responsible for evaluating a person's likelihood to repay the loan based on established metrics and criteria, undertakes the verification of the user's credit score.
1. User employment history: Similar to the credit score verification, the bank entity, staffed by individuals, assesses the user's employment history to ascertain the stability of their job and income, aligning with predefined metrics and criteria.
1. Make monthly payments: Typically, a system provided by the bank entity, integrated with a database solution, validates various aspects such as the number of payments made, timeliness of payments, payment validity, and resolution of late fees, at the end of the pool period, the bank will execute the full payment made partially by Alice to the pool and conclude it.
1. Pay late fees: The bank entity's system is responsible for validating and imposing charges, if necessary, when a user fails to make timely payments, with corresponding amounts applied as appropriate.
1. Finish or conclude the loan: The completion of a loan entails the user fulfilling all monthly payments, settling any accrued late fees, and adhering to all the terms and conditions stipulated in the loan agreement and the contract agreement. This process involves direct communication with the blockchain that stores relevant information of the loan and the bank entity, which records and stores all transactions in a database, providing a comprehensive view of each user's payment history and the current stage of their loan.

#### Layer Diagram

<!-- TODO: create a diagram to showcase where each part of the logic is going to be running base on the business rules -->
