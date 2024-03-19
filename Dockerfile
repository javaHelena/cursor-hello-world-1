# Use an official Java runtime as a parent image
FROM openjdk:11-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Build the application with Maven
RUN ./mvnw clean package

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file 
ENTRYPOINT ["java","-jar","target/helloworld-0.0.1-SNAPSHOT.jar"]
