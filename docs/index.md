# Nitro API with Prisma Documentation

## Introduction

This document outlines the steps to set up and use the Nitro API with Prisma, an open-source database toolkit. The Nitro API provides a powerful and flexible way to interact with your database, making it easy to perform CRUD operations.

## Installation

1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your machine.
2. **Install Prisma CLI**: Run `npm install @prisma/cli --save-dev`.
3. **Setup Prisma**: Initialize Prisma in your project with `npx prisma init`.

## Setting Up the Database

1. **Configure your database**: Edit the `.env` file to include your database credentials.
2. **Create your Prisma schema**: Define your data model in `schema.prisma`.
3. **Migrate your database**: Apply the schema to your database with `npx prisma migrate dev`.

## Starting the Nitro API

1. **Install Nitro API dependencies**: Run `npm install`.
2. **Start the API server**: Execute `npm start` to run the server.

## Using the API

- Use HTTP requests to interact with the API.
- The base URL for the API will depend on your local setup, typically `http://localhost:3000`.

---

# User CRUD Endpoints

## Create User

- **Endpoint**: `/user`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

## Read User

- **Endpoint**: `/user/{id}`
- **Method**: `GET`

## Update User

- **Endpoint**: /user/{id}
- **Method**: PUT
- **Body**:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

## Delete User

- **Endpoint**: /user/{id}
- **Method**: DELETE

## Read Users

- **Endpoint**: /user/all
- **Method**: DELETE

---
