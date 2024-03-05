package com.wedding.springJwt.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedding.springJwt.exception.CustomerServiceException;
import com.wedding.springJwt.model.Customer;
import com.wedding.springJwt.model.LoginRequest;
import com.wedding.springJwt.repository.CustomerRepository;


@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	public int register(Customer customer) {
		//suppose we need to check if this customer has already registered before
		Optional<Customer> customerCheck = customerRepository.findByEmail(customer.getEmail());
		if(customerCheck.isEmpty()) {
			Customer savedCustomer = customerRepository.save(customer);
			return savedCustomer.getId();
		}
		else
			throw new CustomerServiceException("Customer already registered!");
	}

	public void login(LoginRequest loginRequest) {
        // Retrieve customer by email
        Optional<Customer> optionalCustomer = customerRepository.findByEmail(loginRequest.getEmail());

        // Check if the customer exists
        if (optionalCustomer.isPresent()) {
            // Check if the provided password matches the stored password
            Customer customer = optionalCustomer.get();
            if (customer.getPassword().equals(loginRequest.getPassword())) {
                // Passwords match, login successful
                return;
            } else {
                // Passwords do not match, throw exception
                throw new CustomerServiceException("Incorrect password");
            }
        } else {
            // Customer not found, throw exception
            throw new CustomerServiceException("Admin not found");
        }
    }

}
