package com.example.helloworld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * This is the main class that starts the Spring Boot application.
 */
@SpringBootApplication // This annotation marks this class as a Spring Boot application.

public class Application {

    /**
     * The main method that launches the Spring Boot application.
     * @param args Command line arguments.
     */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args); // Starts the Spring Boot application.
    }
}
