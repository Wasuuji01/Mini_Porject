package com.wasuu.employee_service.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "users-login")
public class UserEntity {
    
    @Id
    private String email;              // email
    private String name;               // name
    private String password;            // password

}
