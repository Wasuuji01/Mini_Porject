package com.wasuu.employee_service.Model;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data                                   // getter and setter
@NoArgsConstructor                      // constructor
@AllArgsConstructor                      // constructor
public class Users {                    // User model class

    @Id                               // primary key
    private String email;              // email
    private String name;               // name
    private String password;            // password

}
