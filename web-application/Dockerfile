# Step 1: Build the application
FROM node:22.14.0-alpine

# Install OpenSSL and other dependencies
RUN apk add --no-cache openssl

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma Schema && Build the TypeScript code
RUN npx prisma generate && npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/main.js"]
