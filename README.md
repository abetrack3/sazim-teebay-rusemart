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

    - Create a .env file in the web-application folder.
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

    - Create a .env file in the web-application folder.
    - Add the necessary environment variables as per the project requirements (refer to .env.example).

4. **Run the server:**
    ```sh
    npm run dev
    ```