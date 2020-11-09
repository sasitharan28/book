package com.sasitharan.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sasitharan.demo.model.User;
import com.sasitharan.demo.service.userService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class userController {
	
	@Autowired
	userService userService;
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable String id) {
		return userService.getUserById(id);
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User user){
		return userService.createUser(user);
	}
	
	@GetMapping("/user")
	public ResponseEntity<List<User>> getAllUser(){
		return userService.getAllUser();
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> userUpdateById(@RequestBody User user , @PathVariable String id){
		return userService.userUpdateById(id,user);
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity userDeleteById(@PathVariable String id) {
		return userService.userDeleteById(id);
	}
	
	
	

}
