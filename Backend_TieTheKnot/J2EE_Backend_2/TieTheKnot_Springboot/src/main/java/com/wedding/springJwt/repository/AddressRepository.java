package com.wedding.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wedding.springJwt.model.Address;


public interface AddressRepository extends JpaRepository<Address, Integer> {

}
