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

## Part 2: Implementation Details
- Successfully implemented multi step based form to create products, this involved creating multiple resuable components (however, there is still a lot of rooms for improvement here)
- Users can delete their own products
- Both frontend and backend private apis are secured with jwt token

## Part 3: Rent and Buy/sell
- Implemented marketplace that displays all products created by all users
- This is also the homepage
- Both my-product and marketplace resues the same component: ProductCard component

## Scope for improvements, unhandled corner/error cases
- password could hashed before storing in db
- renew jwt token before expiry to avoid sudden logout
- Create component ProductList to introduce more code reusability
- Error message should be displayed of only the current step
- Optimize client side caching

## Works that remains
- Edit product
- Buy/Rent products
- Display user's product history

-----------

# Personal Outcome?

This was a very interesting challenge given the fact that this project had to be completed in a week with tech stacks that was new to me! I had to study a lot before I could actually start writing codes and show visible progress. Some takeaways:
- Became familiar with end to end project development from scratch (even though self taught haha!)
- Learned new technologies liked ReactJs, ExpressJs, GraphQL, Postgres
- Implementing authentication using middlewares and securing private routes and apis
- There is only so much you can do alone! That's why teamwork exists!
