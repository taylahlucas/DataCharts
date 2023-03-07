# DataCharts-React
A simple user login form with a Dashboard containing charts which display relevant information from local data file.

Built using React and TypeScript

# Setup
To setup the application, navigate to data-charts and enter the following commands in terminal.
Please ensure Docker is running.

  - Build the app: docker build -t data-charts .
  - Run the app: docker run -p 3000:3000 my-app

The web container can be found at localhost:3000/

# Folder navigation

- /src
  - /components: Components used for the application.
    - /general: Reusable components.
    - /charts: Chart components display data in different formats.
    - /layouts: Layout components for page structure.
  - /pages: Pages used throughout the app.
  - /tests: Test files for some components and pages.
  - /utils: Utility files for enums, strings and interfaces.
    - /helpers: Reusable helper functions.

# Packages

- react-router-dom && @types/react-router-dom
- react-google-charts
- jest
