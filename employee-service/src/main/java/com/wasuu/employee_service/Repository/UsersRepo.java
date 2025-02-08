package com.wasuu.employee_service.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wasuu.employee_service.Entity.UserEntity;

@Repository                                                                 // repository
public interface UsersRepo extends JpaRepository<UserEntity, String> {            // extends JpaRepository<Users, String>

}
