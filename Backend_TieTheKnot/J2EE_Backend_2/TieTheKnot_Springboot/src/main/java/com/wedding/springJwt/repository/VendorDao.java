package com.wedding.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wedding.springJwt.model.Vendor;


public interface VendorDao extends JpaRepository<Vendor, Long> {

}
