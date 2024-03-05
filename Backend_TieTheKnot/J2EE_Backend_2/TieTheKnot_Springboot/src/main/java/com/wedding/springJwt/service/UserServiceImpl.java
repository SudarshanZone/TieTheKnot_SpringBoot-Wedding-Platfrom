package com.wedding.springJwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedding.springJwt.model.UserData;
import com.wedding.springJwt.repository.UserDao;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;

	@Override
	public List<UserData> getUsers() {
		return userDao.findAll();
	}

	@Override
	public UserData getUser(long userId) {
		return userDao.findById(userId).get();
	}

	@Override
	public UserData addUser(UserData user) {
		userDao.save(user);
		return user;
	}

	@Override
	public UserData updateUser(UserData user) {
		userDao.save(user);
		return user;
	}

	@Override
	public UserData deleteUser(long userId) {
		UserData user = userDao.findById(userId).get();
		userDao.delete(user);
		return user;
	}
	
}