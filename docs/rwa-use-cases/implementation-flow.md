---
id: lease-agreement-use-case
title: Use Case
sidebar_position: 4
---

In the world of loans there are a few actors that are involved in the process whether they in the real world as it has been done for decades or in the digital world as it is being done today. For this documentations we will be focusing on a traditional loan process abstracting away the complexities and specifications to a more generalized demonstration.

The actors involved in the loan process are the entity that lens the money, the entity that borrows the money, and the entity that facilitates the loan process.

For purposes of this documentation we will be using the following entities:

- The entity that lends the money will be called the **BankCredit**.
- The entity that borrows the money will be called the **Alice**.
- The entity that facilitates the loan process will be called the **GoodCar**.

## Real World Use Case

In the real world the entity that lends the money is a bank, the entity that borrows the money from a bank is a person, and the entity that facilitates the loan process to a person is a car dealership, for this example they are **BankCredit**, **Alice**, and **GoodCar** respectively.

BankCredit is a bank that only lends money for people that want to buy cars. Alice is a person that wants to buy a car from GoodCar. GoodCar is a car dealership that sells cars to people.

### Business Logic

BankCredit has a term that every borrower must now and agree if they want to proceed with them:

- The prospective borrower is required to demonstrate creditworthiness through a favorable credit score. Additionally, a stable employment history is essential. A down payment equivalent to a minimum of 20% of the car's appraised value is mandatory.

- Every car leasing that GoodCar sells is a 3 year lease. The monthly payment is calculated based on the car's value, the down payment, and the interest rate.
- Only brand-new vehicles are eligible for financing through BankCredit. Loan requests for any other vehicle types will be declined. The borrower assumes responsibility for making timely monthly payments commensurate with the appraised value of the car. Failure to remit two consecutive payments will result in the repossession of the vehicle by BankCredit, without any entitlement to a refund.

- In the event of a delayed monthly payment, the borrower will incur a late fee equivalent to 5% of the monthly payment amount.

- The lease spans a total of 36 payments. Borrowers are afforded flexibility in making payments throughout the month. However, it is imperative that payments are submitted before the month's end to avoid any sanctions or penalties.

- At the conclusion of the 3-year lease term, the borrower is required to return the vehicle to GoodCar following the outlined return procedures. The return process includes a comprehensive vehicle inspection to assess its condition. The borrower will be responsible for any excess wear and tear beyond normal usage, as defined by industry standards. If the vehicle meets the pre-established return conditions, the borrower has the option to purchase the vehicle at a discounted price, as specified in the lease agreement. Failure to return the vehicle in accordance with the agreed-upon procedures may result in additional charges and penalties.

- In the event that the borrower wishes to terminate the lease agreement before the end of the specified 3-year term, an early termination fee will be applicable. The early termination fee will be calculated as [X%] of the remaining payments, with a minimum fee of [Y]. Additionally, the borrower will be responsible for any outstanding fees or charges accrued up to the termination date. BankCredit reserves the right to repossess the vehicle if early termination conditions are not met according to the terms stipulated in the lease agreement.

- To maintain the residual value of the leased vehicle, the borrower agrees to adhere to the annual mileage limit specified in the lease agreement. In the event that the total mileage exceeds the agreed-upon limit at the end of the lease term, excess mileage charges will apply. The excess mileage charge is [Z] cents per mile over the limit. Borrowers are encouraged to monitor their mileage throughout the lease term to avoid additional charges.

> In a real bank there are a lot more terms and conditions that are not listed here, but this is no and neither intent to be an official one, we will only focus on the ones that are relevant to this case.

### System Architecture

There are four main components in this system required to take alive this use case:

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
   - Implement communication channels such as email or SMS for sending notifications and alerts.

### Lending Process Example

## Real World Tokenization Use Case

In the digital world the entity that lends the money is a bank, and the entity that borrows the money is a person, and the entity that facilitates the loan process is a car dealership.

### Business Logic

### System Architecture

### Lending Process Example
