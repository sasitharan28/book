package com.sasitharan.demo.service;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sasitharan.demo.model.User;
import com.sasitharan.demo.repository.UserRepository;

@Service
public class userService {
	
	@Autowired
	UserRepository userRepository;

	public ResponseEntity<User> getUserById(String id) {
		Optional<User> tutorial = userRepository.findById(id);
		if (tutorial.isPresent()) {
			return new ResponseEntity<>(tutorial.get(),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<User> createUser(User user) {
		try {
			User use=  userRepository.insert(user);
			return new ResponseEntity<>(use, HttpStatus.CREATED);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

	public ResponseEntity<List<User>> getAllUser() {
		try {
			List<User> users = userRepository.findAll();
			if(users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(users,HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<User> userUpdateById( String id , User newUser) {
		Optional<User> oldUser = userRepository.findById(id);
		if(oldUser.isPresent()) {
			User _user = oldUser.get();
			_user.setUsername(newUser.getUsername());
			_user.setEmail(newUser.getEmail());
			return new ResponseEntity<>(userRepository.save(_user),HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	public ResponseEntity userDeleteById(String id) {
		Optional<User> use = userRepository.findById(id);
		if(use.isPresent()) {
			userRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	
	

}
