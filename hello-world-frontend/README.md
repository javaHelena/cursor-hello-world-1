# Hello World Frontend Application

This React application demonstrates how to interact with a backend server to display messages. It supports two main features:
- Displaying a generic "Hello World" message.
- Displaying a personalized "Hello {name}" message.

## Running the Application

To run the application in development mode, use the following command:

npm start

This will start the application on http://localhost:3000. Navigate to this URL in your browser to view the app.

## Features

### General Greeting

Accessing the root URL (/) displays a generic greeting. This is achieved by making a GET request to the backend's /hello endpoint.

### Personalized Greeting

For a personalized greeting, navigate to /hello/{name}, replacing {name} with your desired name. This makes a GET request to the backend's /hello/{name} endpoint, displaying a personalized message.

## Routes

The application includes the following routes:
- /hello - Displays a generic "Hello World" message.
- /hello/:name - Displays a personalized "Hello {name}" message, where {name} is dynamic.

## Setup

Ensure you have node and npm installed. Install the dependencies by running:

npm install

Then, start the application as mentioned above.

## Dependencies

- React
- Axios for making HTTP requests
- React Router for routing

For a full list of dependencies, refer to the package.json file.

## Contributing

Feel free to fork the repository and submit pull requests to contribute to this project.