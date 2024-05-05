# Expense Tracker

## Overview

Expense Tracker is a budgeting and expense tracking application. It allows users to set budgets for various categories, such as food and transportation, and track transactions in those categories. The application then sums up the spending in each category to calculate the amount of money that remains to be spent.

## Data Structure

The application's data is structured into budgets and transactions. Budgets are set for various categories with a specific amount. Transactions are recorded under each category with details such as description, amount, and a unique id.

## Implementation

The main files to work on are `budgetsSlice.js` and `transactionsSlice.js`. These files contain reducers and action creators that are currently programmed by hand. The task is to refactor this project using a slice-based approach to produce the app’s actions and reducers.

## Usage

Before starting the refactoring, it's recommended to use the app in its current implementation to understand how it’s supposed to work. For example, set a budget of $300 for food, create a $20 food transaction, and then check the food budget again to see how much you have left to spend. As you progress through the project, take note of the ways that Redux Toolkit simplifies your code.

## Getting Started

This project was bootstrapped with Create React App. In the project directory, you can run several commands such as `npm start` to run the app in the development mode, `npm test` to launch the test runner in the interactive watch mode, `npm run build` to build the app for production, and `npm run eject` to remove the single build dependency from your project.

## Learn More

For more information, refer to the Create React App documentation.