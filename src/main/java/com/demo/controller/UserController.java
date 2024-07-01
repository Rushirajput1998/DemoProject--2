package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.User;
import com.demo.service.UserService;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
//@RequestMapping("register")
public class UserController {
	
	@Autowired
	UserService userservice;
	

    @PostMapping("/register")
	public  User register(@RequestBody User user )
	{
		return userservice.registerUser(user);
	}
    
    @PostMapping("/login")
    public User login(@RequestBody User user)
    {
    	return userservice.login(user);
    }
	
	

}
