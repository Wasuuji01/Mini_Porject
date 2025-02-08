package com.wasuu.employee_service.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.wasuu.employee_service.LoginRequest.LoginRequest;
import com.wasuu.employee_service.Model.Users;
import com.wasuu.employee_service.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController   
@CrossOrigin(origins = "http://localhost:3000")                                          //controller
public class UsersController {                              //class controller

    @Autowired(required = true)                                             // dependency injection
    UserService userService;                                // user service

    @PostMapping("/createuser")                             // Request Mapping
    public String createUser(@RequestBody Users user) {      // create user class  
        return userService.createUser(user);                // save user
    }

    @PostMapping("/userlogin")                                             // Request Mapping
    public Boolean loginUser(@RequestBody LoginRequest loginRequest) {     // Check user login class
        return userService.loginUser(loginRequest);                        // login user if email and password is correct
        
    }
    
    
    
}
