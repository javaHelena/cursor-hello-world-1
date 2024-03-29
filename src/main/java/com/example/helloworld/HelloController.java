package com.example.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * This class is a Spring MVC controller that handles HTTP requests.
 */
@RestController // This annotation marks this class as a controller where every method returns a domain object instead of a view.
public class HelloController {

    /**
     * This method handles GET requests for the /hello endpoint.
     * @return A simple string greeting.
     */
    @CrossOrigin(origins = "http://localhost:3000") // Allow only the React app to make requests
    @GetMapping("/hello") // Maps HTTP GET requests onto specific handler methods.
    public String sayHello() {
        return "Hello World"; // Returns a simple string.
    }

        /**
     * This method handles GET requests for the /hello/{name} endpoint.
     * @param name The name to include in the greeting.
     * @return A personalized greeting message.
     */
    @GetMapping("/hello/{name}")
    public String sayHelloToName(@PathVariable String name) {
        return "Hello " + name;
    }

}
