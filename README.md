Sour Financails Front end assessment.

## Overview

This project is a modern React web application built with Vite for a fast development experience, React 18 for building a dynamic and responsive user interface, React Router for seamless navigation, and React Query to efficiently fetch and manage data from APIs. It combines state-of-the-art tools and libraries to create a highly interactive and performant web application.

## Features

**Vite for React**: I used Vite as the build tool because of its lightning-fast development server, instant module hot reloading, and optimized production build.
**React**: With React 18's features like automatic batching, concurrent rendering, and hooks, I was able to create a smooth and highly performant user experience.
**React Router**: To manage navigation, I integrated React Router for handling client-side routing. The app supports multiple routes, making it easy to manage different sections and views.
**React Query**: React Query was my go-to solution for fetching data. I used it to handle server-side data fetching, caching, and synchronization, all while reducing the complexity of handling async logic in React components.

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd <project_directory>
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

Once the server starts, you can open the app in your browser at http://localhost:5174.

## Technologies Used

- Vite: A fast build tool that serves as the backbone of the development environment.
- React: The latest version of React, providing features like automatic batching, concurrent rendering, and hooks.
- React Router: For handling navigation between different pages or views within the application.
- React Query: A powerful library for managing server-state, including data fetching, caching, and synchronization.

## Folder Structure

Here's a quick breakdown of the project's folder structure:

```bash
/src
  /assets # Static assets like images and fonts
  /components # Reusable components for the app
  /hooks # Custom hooks, including those for data fetching and state management
  /pages # Different pages of the app, each page corresponds to a route
  /constants # Folder for storing constancs
  /utils # Utility functions used across the app
  entry.client.js # Entry point for the React app
```

## How It Works

### Routing

The app uses React Router to handle navigation between pages. Each page is represented by a Route that is rendered when the corresponding URL path is matched. For example:

- `/` Displays the dashboard.
- `/settings` – Displays the settings page.

Routes are done in the `src/routes.ts` file all other omitted pages are routed to `src/catchall.tsx` or `src/pages/catchall.tsx`

## Data Fetching

I used `React Query` for all data fetching needs. It helps to manage API calls and cache responses automatically. React Query takes care of background refetching, pagination, and error handling, ensuring that data is always fresh and available. For instance:

```jsx
const { data, error, isLoading } = useQuery('someData', fetchData);
```

The useQuery hook automatically manages the data fetching lifecycle and provides a simple API for handling the loading and error states.
I created Dummy files in `src/constants/data.ts` and handled all client side fetching functions in `src/utils/clientSideFuns`
