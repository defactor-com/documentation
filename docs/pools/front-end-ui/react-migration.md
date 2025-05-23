---
id: pools-migration-to-react
title: Front-End Migration to React
sidebar_position: 3
---

This section of the Defactor developer documentation explains the rationale behind our decision to migrate the front-end tech stack to React. This transition marks a significant step in our development strategy, aiming to enhance the efficiency and performance of our web applications.

---

## Reasons for Choosing React

### Greater Experience with React

- Our team possesses extensive experience in working with React, which has been our primary framework for web development.
- This experience spans across creating solutions from static websites to complex web applications, interacting with our services, blockchain, and third-party APIs.
- Our proficiency in React enables us to generate more robust and reliable solutions tailored to specific business needs.

### Improved Delivery Times

- Due to our familiarity with React, we can significantly expedite the development process.
- We have established general templates in React, which serve as a solid starting point for any new project.
- This approach reduces the time spent on initial configurations, allowing us to concentrate more on the project's unique aspects.
- For instance, the development of the pools website's dashboard page in React is estimated to take approximately 22 hours, compared to 74 hours in Angular.

### Enhanced Website Performance

- React's utilization of a virtual DOM offers better performance compared to Angular's real DOM approach.
- This leads to faster rendering times and an overall smoother user experience.

### Better Management of Framework Updates

- React's backward compatibility ensures that new versions support both the old and new syntax and methods.
- This compatibility allows for a gradual migration process without the need for immediate and comprehensive codebase changes, unlike Angular.

### React's Growing Popularity

- In recent years, React has emerged as one of the most popular frameworks in web application development.
- This popularity translates to a larger pool of developers and teams proficient in React, along with an abundance of support documentation and libraries.
- Statistics indicate React's dominance over Angular in terms of developer preference and usage.

---

## Utilizing Atomic Components in React

- Our approach involves the generation of large and complex components based on smaller, reusable components, each serving specific functions.
- This method not only reduces the number of components in the code but also standardizes the website's pages.
- The objective is to create a `defactor-ui-kit`, a front-end library containing components for use across various Defactor projects.
- This library ensures consistency in user interfaces and interactions, and simplifies maintenance. Any updates to a component in the `defactor-ui-kit` will automatically reflect across all projects utilizing that component, without additional code alterations.

---

Authored by: Ing. Angelo Castro Gamboa
