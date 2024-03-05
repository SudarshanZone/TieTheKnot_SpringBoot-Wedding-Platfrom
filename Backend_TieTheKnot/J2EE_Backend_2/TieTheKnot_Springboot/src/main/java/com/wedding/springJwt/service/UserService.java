package com.wedding.springJwt.service;

import java.util.List;

import com.wedding.springJwt.model.UserData;


public interface UserService {
	
	public List<UserData> getUsers();
	
	public UserData getUser(long userId);
	
	public UserData addUser(UserData user);
	
	public UserData updateUser(UserData user);
	
	public UserData deleteUser(long userId);
}