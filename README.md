# Project Setup Instructions

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm

---------

## Backend Setup

1. **Navigate to the backend folder:**
   ```sh
   cd web-application
    ```
    
2. **Install dependencies:**
   ```sh
   npm i
    ```

3. **Set up environment variables:**

    - Create a .env file in the **web-application** folder.
    - Add the necessary environment variables as per the project requirements (refer to .env.example).

4. **Generate Prisma:**
    - Run the following commands
    ```sh
    npx prisma db push --force-reset --accept-data-loss
    npx prisma db seed
    ```
    - This will generate the prisma build and create the seed data, in the database

5. **Run the server:**
    ```sh
    npm run dev
    ```
-------------

## Frontend Setup

1. **Navigate to the frontend folder:**
   ```sh
   cd web-client
    ```
    
2. **Install dependencies:**
   ```sh
   npm i
    ```

3. **Set up environment variables:**

    - Create a .env file in the **web-client** folder.
    - Add the necessary environment variables as per the project requirements (refer to .env.example).

4. **Run the server:**
    ```sh
    npm run dev
    ```

----------

# Project Progress Report

### Technologies used - ReactJs, ExpressJs, Apollo GraphQL(server + client), Prisma ORM, Postgres DB, MaterialUI, Formik, Tailwind CSS

## Part 1: Preliminary features
- User sign up and login using jwt token
- auto logout on token expiry (detected on the first request after expiry, redirected to login page)

## Part 2: Implementation Details
- Successfully implemented multi step based form to create products, this involved creating multiple resuable components (however, there is still a lot of rooms for improvement here)
- Users can delete their own products
- Users can edit their own products
- Organized the codebase such that both the product edit form and multi-step based create form reuses several components
- Both frontend and backend private apis are secured with jwt token

## Part 3: Rent and Buy/sell
- Implemented marketplace that displays all products created by all users
- This is also the homepage
- My Products page displays all the products you have created
- Both my-product and marketplace resues the same component: ProductList and ProductCard component
- User can purchase or rent a product
- It was ensured that a user cannot buy/rent his own products (action buttons would disappear on the client side, and safety checks are also implemented on the backend as well)
- Time overlap cases are also handled in case of product rent

## Scope for improvements, unhandled corner/error cases
- password could hashed before storing in db
- renew jwt token before expiry to avoid sudden logout
- [DONE] Create component ProductList to introduce more code reusability
- [DONE] Error message should be displayed of only the current step
- A Product should not be allowed to be purchased if it is being currently rented or scheduled for rent in the future
- Optimize client side caching

## Recalling some challenges faced during this assessment
- At the beginning of the assessment I was really confused about what is the role GraphQL and Prisma -- Thanks to this assessment I have come to understand a little bit more than before
- Material UI does not have its own ranged date picker (at least not free) so had to use the said component from a third party library called rsuite.
- The library called jsonwebtoken that was initially used for auth-token signing and verifying was not working in the client side due to some ESM or ES6 issues, but it was needed to decode the auth-token. Resolution? switched to jose.

-----------

# Personal Outcome?

This was a very interesting challenge given the fact that this project had to be completed in a week with tech stacks that was new to me! I had to study a lot before I could actually start writing codes and show visible progress. Some takeaways:
- Became familiar with end to end project development from scratch (even though self taught haha!)
- Learned new technologies liked ReactJs, ExpressJs, GraphQL, Postgres
- Implementing authentication using middlewares and securing private routes and apis
- There is only so much you can do alone! That's why teamwork exists!
