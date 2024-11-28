# 🚗 Car Store (Backend)

The **Car Store Management System** is a backend application designed to manage cars, inventory, and customer orders efficiently. Built with **Node.js**, **Express**, and **MongoDB**, this RESTful API includes features like adding and updating car inventory, managing orders, and calculating total revenue.

---

## 📝 Features

### 🚘 **Car Management**

- Add new cars to the inventory.
- Retrieve all cars or specific car details by ID.
- Update car details (e.g., price, stock quantity).
- Manage stock status (inStock or out-of-stock).

### 📦 **Order Management**

- Place customer orders for cars.
- Automatically update the inventory on order placement.
- Handle insufficient stock with meaningful error messages.

### 💰 **Revenue Calculation**

- Calculate total revenue from all orders using MongoDB aggregation.

### 🛡️ **Data Validation**

- Input validation ensures data integrity (e.g., valid email formats, positive quantities).

---

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Validation**: Mongoose schema validation
- **Language**: TypeScript
- **Environment**: dotenv for environment variable management
- **Development Tools**:
  - `ts-node-dev` for running TypeScript in development mode.
  - `eslint` for linting TypeScript code.

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- npm (comes with Node.js)
- [TypeScript](https://www.typescriptlang.org/)

---

### 🔧 Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/8ad40n/Car-Store.git
   cd Car-Store

   ```

2. **Install Dependencies**:

   ```bash
   npm install

   ```

3. **Environment Configuration**:

   ```bash
   PORT
   MONGO_URI

   ```

4. **Run in Development Mode**:

   ```bash
   npm run start:dev

   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

# 🔄 API Endpoints

### 🚘 Car Management

### **1. Create a Car**

- **Endpoint:** **`/api/cars`**
- **Method:** `POST`
- **Request Body:**

```json
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2024,
  "price": 25000,
  "category": "Sedan",
  "description": "A reliable family sedan with modern features.",
  "quantity": 50,
  "inStock": true
}
```

- **Response:** Success message and created car details.

```jsx
{
  "message": "Car created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 25000,
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---

### **2. Get All Cars**

- **Endpoint:** **`/api/cars`**
- **Method:** `GET`
- **Response:** A list of all cars with details like brand, model, price, category, etc.
- Query: A list of all cars from the same category, you’ll take this as `/api/cars?searchTerm=category` searchTerm can be `brand`, `model`, `category`

```jsx
{
  "message": "Cars retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "brand": "Toyota",
      "model": "Camry",
      "year": 2024,
      "price": 25000,
      "category": "Sedan",
      "description": "A reliable family sedan with modern features.",
      "quantity": 50,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    },
    // ... rest data
  ]
}
```

---

### **3. Get a Specific Car**

- **Endpoint:** **`/api/cars/:carId`**
- **Method:** `GET`
- **Response:** The details of a specific car by ID.

```jsx
{
  "message": "Car retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 25000,
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---

### **4. Update a Car**

- **Endpoint:** **`/api/cars/:carId`**
- **Method:** `PUT`
- **Request Body:** (Car details to update)

```json
{
  "price": 27000,
  "quantity": 30
}
```

- **Response:** Success message and updated car details.

```jsx
{
  "message": "Car updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 27000,  // Price updated
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 30,  // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z"  // Updated timestamp
  }
}
```

---

### **5. Delete a Car**

- **Endpoint:** **`/api/cars/:carId`**
- **Method:** `DELETE`
- **Response:** Success message confirming the car has been deleted.

```jsx
{
  "message": "Car deleted successfully",
  "status": true,
  "data": {}
}
```

---

### **6. Order a Car**

- **Endpoint:** **`/api/orders`**
- **Method:** `POST`
- **Inventory Management Logic:**
  - When an order is placed, reduce the **quantity** in the car model.
  - If the inventory quantity goes to zero, set **inStock** to `false`.
  - Handle **insufficient stock** cases by returning an appropriate error message.
- **Request Body:**

```json
{
  "email": "customer@example.com",
  "car": "648a45e5f0123c45678d9012",
  "quantity": 1,
  "totalPrice": 27000
}
```

- **Response:** Success message confirming the order.

```jsx
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "car": "648a45e5f0123c45678d9012",
    "quantity": 1,
    "totalPrice": 27000,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
```

---

### **7. Calculate Revenue from Orders (Aggregation)**

- **Endpoint:** **`/api/orders/revenue`**
- **Method:** `GET`
- **Aggregation Suggestion:**
  - Use MongoDB aggregation pipeline to calculate the total revenue from `all orders`.
  - Calculate the total price by multiplying the price of each car by the quantity ordered.
- **Response:** The total revenue from all orders.

```jsx
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 810000  // Total revenue calculated from all orders
  }
}
```
