# Hello World Application with Spring Boot and Java

This project is a simple "Hello World" application using Spring Boot and Java. It demonstrates how to create a basic web application that responds with "Hello World" when accessed via a web browser.

## Prerequisites

Before you can run this application, you need to have the following installed:
- Java JDK 11 or higher
- Maven 3.2+

## Running the Application

To run the application, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the root directory of the project where the `pom.xml` file is located.
3. Run the application using Maven with the following command:
   ```
   mvn spring-boot:run
   ```
4. Wait for the application to start. You should see output similar to this:
   ```
   ... Tomcat started on port(s): 8080 (http) with context path ''
   ... Started Application in X.XXX seconds (JVM running for X.XXX)
   ```

## Accessing the Hello World Endpoint

Once the application is running, you can access the Hello World endpoints by opening a web browser and visiting:

- For the basic greeting:
  ```
  http://localhost:8080/hello
  ```
  You should see a simple message that says "Hello World".

- For a personalized greeting:
  ```
  http://localhost:8080/hello/John
  ```
  Replace `John` with any name you wish to use. You should see a message that says "Hello John".

## Stopping the Application

To stop the application, go back to the terminal where it's running and press `Ctrl+C`.

## Understanding the Code

- `Application.java`: This is the main class that starts the Spring Boot application.
- `HelloController.java`: This class is a Spring MVC controller that handles HTTP GET requests. It has two endpoints:
  - `/hello` which returns a "Hello World" message.
  - `/hello/{name}` which takes a name as a parameter and returns a personalized "Hello {name}" message.
- `application.properties`: This file contains configuration for the application, such as the server port and logging levels.

For more details, refer to the comments in the code.

## Conclusion

You have successfully run a simple Spring Boot application that displays "Hello World" in a web browser. This project serves as a basic template for building web applications with Spring Boot and Java.
