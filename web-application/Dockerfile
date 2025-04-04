# Step 1: Build the application
FROM node:22.14.0-alpine AS build

# Install OpenSSL and other dependencies
RUN apk add --no-cache openssl

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production
RUN npm install -D ts-node prisma

# Copy the rest of the application code
COPY . .

# Generate Prisma Schema and build the TypeScript code
RUN npx prisma generate && npm run build

# Step 2: Create the runtime image
FROM node:22.14.0-alpine

# Install OpenSSL for runtime
RUN apk add --no-cache openssl

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/package*.json ./
# COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

# Reinstall production dependencies
RUN npm install --only=production

# Ensure .env file is copied for runtime
COPY .env .env

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "--env-file=.env", "dist/main.js"]
