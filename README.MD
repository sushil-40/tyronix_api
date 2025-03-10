# Tyrionix API

This is the backend API for the **Tyre Shop Management** application, which helps manage tyre and mechanical shop operations. It provides features like stock management, billing system, and more.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## Technologies Used

- **Node.js**: Backend framework
- **Express.js**: Web framework for Node.js
- **MongoDB**: Database to store data
- **Mongoose**: ODM for MongoDB
- **Bcrypt.js**: Hashing passwords
- **CORS**: Cross-Origin Resource Sharing
- **Nodemon**: Auto-restart server during development
- **Axios**: HTTP client for making requests (client-side)

## Installation

Follow these steps to get the backend API up and running:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tire-shop-management-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tire-shop-management-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   - Create a `.env` file in the root directory.
   - Add your environment variables (e.g., MongoDB URI, JWT Secret) like below:

   ```env
   MONGODB_URI=mongodb://localhost:27017/tire_shop
   JWT_SECRET=your_jwt_secret
   ```

5. Run the application in development mode:

   ```bash
   npm run dev
   ```

   This will start the backend server with Nodemon, which will automatically restart on file changes.

6. Run the application in production mode:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Log in and get a JWT token

### Tire Management

- **GET** `/api/tires` - Get all tires
- **POST** `/api/tires` - Add a new tire to inventory
- **PUT** `/api/tires/:id` - Update tire details
- **DELETE** `/api/tires/:id` - Remove tire from inventory

### Billing System

- **POST** `/api/bills` - Create a new bill
- **GET** `/api/bills` - Get all bills
- **GET** `/api/bills/:id` - Get details of a specific bill

### Stock Management

- **GET** `/api/stock` - Get all stock details
- **POST** `/api/stock` - Add stock for a tire
- **PUT** `/api/stock/:id` - Update stock quantity

## Usage

You can interact with this API using tools like **Postman** or **Insomnia** to test out the endpoints and make requests.

Ensure that you include a valid JWT token in the `Authorization` header when accessing protected routes.

Example:

```bash
Authorization: Bearer <your_jwt_token>
Testing
To run tests (if any), you can use the following command:

bash
Copy
Edit
npm test

License
This project is licensed under the MIT License - see the LICENSE file for details.


```
