package com.wasuu.employee_service.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wasuu.employee_service.Model.Employee;

@Service
public interface EmployeeService {
    
    String createEmployee(Employee employee);

    List<Employee> readEmployees();

    boolean deleteEmployee(Long id);

    String updateEmployee(Long id, Employee employee);

    Employee readEmployee(Long id);

}
