package com.sasitharan.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sasitharan.demo.model.Roles;
import com.sasitharan.demo.service.RoleService;

@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = "*")
public class RoleController {

	@Autowired
	RoleService roleService;
	
	@GetMapping
    public ResponseEntity<List<Roles>> getAllRoles() {
		return roleService.getAllRoles();
	}
}