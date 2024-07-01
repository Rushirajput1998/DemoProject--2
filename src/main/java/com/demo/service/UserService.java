package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;
import com.demo.model.User;

@Service
public class UserService {

	@Autowired
	UserDao userdao;
	
	
	public User registerUser(User user) {
		return userdao.save(user);
	}
	
	
	  public User login(User user) {
	    
	        String email = user.getEmail();
	        String password = user.getPassword();

	        User user1 = userdao.findByEmail(email);

	        if (user1 == null) {
	       
	            throw new RuntimeException("User not found with email: " + email);
	        }

	        if (!password.equals(user1.getPassword())) {
	        		throw new RuntimeException("Incorrect password for user: " + email);
	        }


	        return user;
	    }

	
}
