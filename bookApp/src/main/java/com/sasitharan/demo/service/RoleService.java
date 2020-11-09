package com.sasitharan.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sasitharan.demo.model.Roles;
import com.sasitharan.demo.repository.RoleRepository;

@Service
public class RoleService {
	@Autowired
	RoleRepository roleRepository;

	public ResponseEntity<List<Roles>> getAllRoles() {
		try {
			List roles = roleRepository.findAll();
		    return new ResponseEntity<>(roles, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
