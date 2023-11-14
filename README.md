# DataCharts-React
A simple user login form with a Dashboard containing charts which display relevant information from local data file.

Built using React and TypeScript

To see design decisions, please see JSDoc design-decisions.js

https://github.com/taylahlucas/DataCharts-React/assets/53559103/820b7177-d93d-407c-ba09-ace8a7fbb362

# Setup
To setup the application, navigate to data-charts and enter the following commands in terminal.
Please ensure Docker is running.

  - Build the app: docker build -t data-charts .
  - Run the app: docker run -p 3000:3000 data-charts

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
