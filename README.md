# News Application with React & Node.

This is a web application that allows you to discover and read the latest news and stories from various sources. The frontend is built using React.

This repository contains two main components: the `frontend` and the `backend`.

## Frontend

The frontend part of the project is built using React (Vite), React-Bootstrap, and Tailwind CSS. To start the frontend, follow these steps:

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

1. Install the required dependencies:

   ```bash
   npm install
   ```
2. Start the frontend development server:

   ```bash
   npm run dev
   ```

## Backend

The backend is built using NestJS and ExpressJS. It provides an endpoint to call the New York Times API for fetching top stories. To start the backend, follow these steps:

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```
2. Install the required dependencies:

   ```bash
   npm install
   ```
3. Start the backend server:

   ```bash
   npm start
   ```

### API

The backend of this project provides a simple API for fetching top stories from the New York Times API. It offers one endpoint:

#### Endpoint

- **GET /news/top-stories**

#### Request

- **Query Parameters:**

  - `section` (required): The section of the top stories to fetch. You can choose from the following sections:

    - Arts
    - Automobiles
    - BooksReview
    - Business
    - Fashion
    - Food
    - Health
    - Home
    - Insider
    - Magazine
    - Movies
    - NYRegion
    - Obituaries
    - Opinion
    - Politics
    - RealEstate
    - Science
    - Sports
    - SundayReview
    - Technology
    - Theater
    - TMagazine
    - Travel
    - Upshot
    - US
    - World

#### Response

- **Status Code:**

  - 200 OK: Successful response.
- **Body:**

  The response body will be an array of news items, each represented by the following format:

  ```json
  {
    "title": "string",
    "section": "string",
    "subSection": "string",
    "abstract": "string",
    "author": "string",
    "image": "string",
    "url": "string",
    "publishedAt": "string"
  }
  ```

### Getting Started

To set up the project and run both the frontend and backend, follow the instructions provided for each component. Once both parts are up and running, you can interact with the application to fetch and display news and stories.
