package com.wedding.springJwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wedding.springJwt.model.UserData;


public interface UserDao extends JpaRepository<UserData, Long> {	

}
