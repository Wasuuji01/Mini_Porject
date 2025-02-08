package com.wasuu.employee_service.Service;

import org.springframework.stereotype.Service;

import com.wasuu.employee_service.LoginRequest.LoginRequest;
import com.wasuu.employee_service.Model.Users;

@Service                                                    //Service porvider
public interface UserService {                                //service class for user creation and login                             //dependency 
    
    String createUser(Users user);

    Boolean loginUser(LoginRequest loginRequest);
}