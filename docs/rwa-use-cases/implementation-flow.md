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

- Every car leasing that GoodCar sells is a 3 year lease. The monthly payment is calculated based on the car's value, the down payment, and the interest rate of `5%` that'll be constant over the lease period.

- Only brand-new vehicles are eligible for financing through BankCredit. Loan requests for any other vehicle types will be declined. The borrower assumes responsibility for making timely monthly payments commensurate with the appraised value of the car. Failure to remit three consecutive payments will result in the repossession of the vehicle by BankCredit, without any entitlement to a refund.

- In the event of a delayed monthly payment, the borrower will incur a late fee equivalent to 5% of the monthly payment amount.

- The lease spans a total of 36 payments. Borrowers are afforded flexibility in making payments throughout the month. However, it is imperative that payments are submitted before the month's end to avoid any sanctions or penalties.

- At the conclusion of the 3-year lease term, the borrower is required to return the vehicle to GoodCar following the outlined return procedures. The return process includes a comprehensive vehicle inspection to assess its condition. The borrower will be responsible for any excess wear and tear beyond normal usage, as defined by industry standards. If the vehicle meets the pre-established return conditions, the borrower has the option to purchase the vehicle at a discounted price, as specified in the lease agreement. Failure to return the vehicle in accordance with the agreed-upon procedures may result in additional charges and penalties.

- In the event that the borrower wishes to terminate the lease agreement before the end of the specified 3-year term, an early termination fee will be applicable. The early termination fee will be calculated as `70%` of the remaining payments, with a minimum fee of `10%`. Additionally, the borrower will be responsible for any outstanding fees or charges accrued up to the termination date. BankCredit reserves the right to repossess the vehicle if early termination conditions are not met according to the terms stipulated in the lease agreement.

- To maintain the residual value of the leased vehicle, the borrower agrees to adhere to the annual mileage limit specified in the lease agreement. In the event that the total mileage exceeds the agreed-upon limit at the end of the lease term, excess mileage charges will apply. The excess mileage charge is `$5` per mile over the limit. Borrowers are encouraged to monitor their mileage throughout the lease term to avoid additional charges.

> In a real bank there are a lot more terms and conditions that are not listed here, but this is no and neither intent to be an official one, this is only for demostration purposes, please, do not considerer it at all an equivalent to a real term and contiditions document.

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

Now that the rules are defined an clear for all the parties involved: the Bank, Borrower and Intermediary; let's see how the process would looks like in the real world with no intevention of the Blockchain technology.

The flow start when a person, for our example, Alice wants to lease a car from **GoodCar** but she does not have or want to pay the car in full, so she goes to **BankCredit** to ask for a loan to pay the car in full and then pay the loan in monthly payments. The bank is a financial institution that lends money to people but to do so, the bank needs to make sure their terms and conditions are met by the borrower, so the bank infrastructure need to be prepared to acomplish following required tasks to validate that Alice is a good prospect to lend money and make sure she is going to feel confortable with this process by a transparent experience.

#### General Information of the leasing

Alice Information:

- name: `Alice`
- address: `123 Main St, New York, NY 10001`
- contact info:
  - phone: `+1 123 456 7890`
  - email: `alice@mail.com`
- employment data:
  - company: `ABC Company`
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
- monthly rate: `$500`
- mileage allowance: `4,473.876` miles per year

Payment Information:

- constant interest rate: `%5`
- initial payment: `$5,284`
- monthly payments: `$500`
- late fee: `5%` of the monthly payment amount
- excess mileage charge: `$5` per mile over the limit
- lease termination fee: `70%` of the remaining payments, with a minimum fee of `10%`
- total loan amount: `$20,136`
- due date: `30` of each month
- status: `active`
- start date: `2024-01-01`
- end date: `2027-01-01`

<!-- TODO: calculate the exact values for the loan -->

#### Loan Process

Alice approaches to the bank for a loan:

1. The bank will ask Alice for her personal information to verify her identity and credit score.
1. The bank will ask Alice for her employment history to verify her income.
1. The bank will ask Alice for a down payment to make sure she is committed to the process.
1. The bank will ask Alice for the car information to make sure it is a brand new car.
1. The bank will ask Alice for the car value to calculate the monthly payments.
1. The bank will show Alice the interest for the monthly payments.
1. The bank will start communications with GoodCar to make sure the car is available and information provided by Alice is correct.
1. Base on the card specifications, the bank estipulates the max mileage per year is `4,473.876 miles`.
1. The bank shows Alice the terms and conditions including sanctions in case of default for the loan and maximum mileage usage per month.
1. The bank will ask Alice to sign the terms and conditions.
1. The bank will notify the car dealership that the loan has been approved.
1. The bank will notify Alice the loan has been approved.
1. The car dealership will notify Alice that the car is ready to be picked up.
1. Alice will go to the car dealership to pick up the car.
1. Alice will sign any required documents by the car dealership to pick up the car.
1. Alice now has the car in her property.

Up to this point, Alice has concluded the paperwork for the delivery of the car, now she needs to start paying the loan to the bank, so the bank will start the process to collect the monthly payments from Alice and make sure she is paying on time and following the terms and conditions of the loan agreed by both parties.

> Quick note: if the bank decides Alice is not a good prospect to lend money (because any internal restriction like a borrower needs to be older than 30 years old), the bank will notify Alice that the loan has been denied and the process will end here without any chance to verfiy that despite she does not meet the age requirement in term of a good payer she meets all the restrictions.

Based on all the terms and conditions agreed up to this point by both parties and considering that Alice's deadline payment is the day 30 of each month, let's simulates the following scenario of payments by Alice considering that a month has only 30 days:

**Day 0**

- Alice gets the car.

**Day 12**

- Alice drives the car 100 miles.

**Day 20**

- Alice has driven the car 200 miles.

**Day 30**

- Alice respected all terms and conditions, so no penalties are applied.
- Alice pays the monthly payment on time.

**First year**

- Alice has driven the car 3,400 miles.
- Alice has paid 12 monthly payments on time.

**Day 395 (One year and one month)**

- Alice delays 2 days of the payment date so Alice is multed for .

## Real World Tokenization Use Case

In the digital world the entity that lends the money is a bank, and the entity that borrows the money is a person, and the entity that facilitates the loan process is a car dealership.

### Business Logic

### System Architecture

### Lending Process Example
