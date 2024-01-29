# Wolt Delivery Fee Calculator

## Overview

This web app is a frontend for delivery fee calculator built with React and TypeScript. It calculates the delivery fee based on user input, considering factors such as cart value, delivery distance, number of items, and order time. The project serves as the initial assignment for the Frontend track in the Wolt Summer 2024 Engineering Internships.

## Project preview

Explore a sneak peek of this project with this animated GIF showcasing key features and the user interface.

![UI project GIF](./public/delivery-fee-calculator.gif)

## Installation

Follow the steps below to set up and run the project locally:

1. Unzip the Zip archive
2. Navigate to the project directory: `delivery-fee-calculator-Elena-Golovanova`
3. Install dependencies: `npm install`
4. Start the app: `npm run dev`

## Technologies Used

- React
- TypeScript
- Jest (testing framework)

## Author

Elena Golovanova
- [GitHub](https://github.com/ElenaCoder/)
- [LinkedIn](https://www.linkedin.com/in/elena-golovanova/)

## Inputs and Test IDs

As per the requirements, the specified attribute has been incorporated into both input elements and the element responsible for displaying the calculated fee. This attribute serves the purpose of identifying elements during automated testing.

- Cart value: `<input data-test-id="cartValue" />`
- Delivery distance: `<input data-test-id="deliveryDistance"/>`
- Number of items: `<input data-test-id="numberOfItems"/>`
- Order time: `<input data-test-id="orderTime"/>`
- Resulting fee: `<div data-test-id="fee"></div>`


## Assumptions

Due to the fact that certain requirements were not strictly defined the application has been developed with certain assumptions in mind:

- The Friday rush is defined as the period from 3 PM (inclusive) to 7 PM (exclusive).
- Although the main objective is to calculate delivery fees for future orders, the current implementation allows users to select past dates. Consequently, users can explore the potential delivery cost for a specific date and time in the past.

## Inspirations

This project was inspired by the web development tutorial by [Lama Dev](https://youtu.be/tIdNeoHniEY?si=x-pBEeNngmGOSdpb).
