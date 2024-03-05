package com.springcrud.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrud.crud.model.Vendor;

public interface VendorDao extends JpaRepository<Vendor, Long> {

}
