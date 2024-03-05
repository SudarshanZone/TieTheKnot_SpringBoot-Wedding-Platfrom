package com.wedding.springJwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.springJwt.exception.CustomerServiceException;
import com.wedding.springJwt.model.Customer;
import com.wedding.springJwt.model.LoginRequest;
import com.wedding.springJwt.model.RegistrationStatus;
import com.wedding.springJwt.service.CustomerService;


@RestController
@CrossOrigin
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@PostMapping("customer/register")
	public RegistrationStatus register(@RequestBody Customer customer) {
		try {
			int id = customerService.register(customer);
			
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(true);
			status.setStatusMessage("Customer registered successfully!");
			status.setCustomerId(id);
			return status;
		}
		catch (CustomerServiceException e) {
			RegistrationStatus status = new RegistrationStatus();
			status.setStatus(false);
			status.setStatusMessage(e.getMessage());
			return status;			
		}
	}
	
	@PostMapping("/customer/login")
    public RegistrationStatus login(@RequestBody LoginRequest loginRequest) {
        try {
            // Call the login method in the service
            customerService.login(loginRequest);

            // If login is successful, you can customize the response accordingly
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(true);
            status.setStatusMessage("Login successful");
            return status;
        } catch (CustomerServiceException e) {
            // If login fails, handle the exception and return an appropriate response
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return status;
        }
    }
}
