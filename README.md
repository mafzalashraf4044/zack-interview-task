# News Application with React & Node.

This is a web application that allows you to discover and read the latest news and stories from various sources. The frontend is built using React.

This repository contains two main components: the `frontend` and the `backend`.

## Frontend

The frontend part of the project is built using React (Vite), React-Bootstrap, and Tailwind CSS. To start the frontend, follow these steps:

1. Navigate to the `backend` directory:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
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

    - arts
    - automobiles
    - booksReview
    - business
    - fashion
    - food
    - health
    - home
    - insider
    - magazine
    - movies
    - nyregion
    - obituaries
    - opinion
    - politics
    - realestate
    - science
    - sports
    - sundayreview
    - technology
    - theater
    - t-Magazine
    - travel
    - upshot
    - us
    - world

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

### Request and Response Formats

Feel free to explore both the frontend and backend components to understand how they work together to provide news and stories data.

## Getting Started

To set up the project and run both the frontend and backend, follow the instructions provided for each component. Once both parts are up and running, you can interact with the application to fetch and display news and stories.

```

Please replace `"frontend"` and `"backend"` with your actual folder names if they are different. Additionally, make sure to provide any other instructions specific to your project, such as environment variables or configurations, as needed.
```
