---
id: lease-agreement-use-case
title: Use Case
sidebar_position: 4
---

In the world of loans there are some actors that are involved in the process of lending money whether they in the real world as it has been done for decades or in the digital world as it has starting been doing nowadays. For this documentation, we will be focusing on traditional loan process abstracting away the complexities and specifications to a more generalized example to illustrate how each process differs from the other.

## Real World Use Case

In the real world there are some entities involved in the process of lending money, for example, the entity that lends the money is a bank, the entity that borrows the money from a bank is a person, and the entity that facilitates the loan process to a person is a car dealership, for this example let's assume they are **BankCredit**, **Alice**, and **GoodCar** respectively.

The following is the scenario that this document is intended to illustrate and open the mind of the reader to the possibilities that the tokenization of the lending process can bring and how it can help to be applied to facilitate some process in the real world that for its nature is not possible.

**BankCredit exclusively provides financing services for individuals seeking to purchase automobiles. Alice, an aspiring car owner, is currently in the process of acquiring a vehicle from GoodCar, a reputable dealership specializing in car sales.**

### Business Logic

As a real finance institutions, BankCredit has terms and conditions that every borrower must know and agree if they want to proceed with them:

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

Now that the rules are defined and clear for all the parties involved—the Bank, Borrower, and Intermediary—let's explore how the process would look in the real world with no intervention of Blockchain technology.

The flow starts when a person, for our example, Alice, wants to lease a car from **GoodCar** but does not have or want to pay for the car in full. She goes to the **BankCredit** to ask for a loan to pay for the car in full and then repay the loan in monthly installments. The bank is a financial institution that lends money to people, but to do so, the bank needs to ensure that borrowers meet the terms and conditions. Therefore, the bank infrastructure needs to be prepared to accomplish the following required tasks, validating that Alice is a good prospect to lend money and ensuring she feels comfortable with this transparent process.

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

Based on all the terms and conditions agreed up to this point by both parties and considering that Alice's deadline payment is the 30th of each month, let's simulate the following scenario of payments by Alice, assuming that a month has only 30 days:

**Day 0**

- Alice acquires possession of the vehicle..

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

For this example, let's suppose that Alice decides to return the car to the car dealership, so the bank will notify the car dealership that Alice is going to return the car and the car dealership will notify Alice the process to return the car.

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
1. Make monthly payments: Typically, a system provided by the bank entity, integrated with a database solution, validates various aspects such as the number of payments made, timeliness of payments, and resolution of late fees.
1. Pay late fees: The bank entity's system is responsible for validating and imposing charges, if necessary, when a user fails to make timely payments, with corresponding amounts applied as appropriate.
1. Finish or conclude the loan: The completion of a loan entails the user fulfilling all monthly payments, settling any accrued late fees, and adhering to all the terms and conditions stipulated in the loan agreement. This process involves direct communication with the bank entity, which records and stores all transactions in a database, providing a comprehensive view of each user's payment history and the current stage of their loan.

This previous examples illustrate how the process of lending money works in the real world, but to apply the same process in the digital world some part of the flow needs to be changed? Let's see how the process would looks like in the digital world with the intervention of the Blockchain technology.

#### Layer Diagram

<!-- TODO: create a diagram to showcase where each part of the logic is going to be running base on the business rules -->

## Real World Tokenization Use Case

In the digital world the entity that lends the money is a bank, and the entity that borrows the money is a person, and the entity that facilitates the loan process is a car dealership.

### Business Logic

### System Architecture

### Lending Process Example
