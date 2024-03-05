package com.wedding.springJwt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.springJwt.model.UserData;
import com.wedding.springJwt.service.UserService;



@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping("/user")
	public UserData addUser(@RequestBody UserData user) {
		return this.userService.addUser(user);
	}
	
	@GetMapping("/users")
	public List<UserData> getUsers() {
		return this.userService.getUsers();
	}
	
	@GetMapping("/users/{userId}")
	public UserData getUser(@PathVariable String userId) {
		return this.userService.getUser(Long.parseLong(userId));
	}
	
	@PutMapping("/user")
	public UserData updateUser(@RequestBody UserData user) {
		return this.userService.updateUser(user);
	}
	
	@DeleteMapping("/user/{userId}")
	public UserData deleteUser(@PathVariable String userId){
		return this.userService.deleteUser(Long.parseLong(userId));
	}
	
}