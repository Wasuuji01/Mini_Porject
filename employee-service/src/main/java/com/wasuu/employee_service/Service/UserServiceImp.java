package com.wasuu.employee_service.Service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wasuu.employee_service.Entity.UserEntity;
import com.wasuu.employee_service.LoginRequest.LoginRequest;
import com.wasuu.employee_service.Model.Users;
import com.wasuu.employee_service.Repository.UsersRepo;

@Service
public class UserServiceImp implements UserService {

    @Autowired                                              //dependency injection
    private UsersRepo usersRepo;
    
      public String createUser(Users user) {                        //create user
        UserEntity userEntity = new UserEntity();                   //create user entity object
        BeanUtils.copyProperties(user, userEntity);                 //copy properties from user to userEntity
        usersRepo.save(userEntity);                                //save userEntity    
        return "Saved Successfully";                                       // return success                  
    
    }

    public Boolean loginUser(LoginRequest loginRequest) {                                             //login user
        java.util.Optional<UserEntity> userEntity = usersRepo.findById(loginRequest.getUserId());         //find user by email
        if (userEntity.isEmpty()) {                                                                    //if user is empty
            return false;                                                                             //return false
        }

        UserEntity user1 = userEntity.get();                                                   //get user

        if(!user1.getPassword().equals(loginRequest.getPassword())) {             //if password is correct
            return false;                                                         //return true
        }
        return true;                                                             //else return false
    }

}
