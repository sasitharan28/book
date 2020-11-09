package com.sasitharan.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sasitharan.demo.model.ERole;
import com.sasitharan.demo.model.Roles;

@Repository
public interface RoleRepository extends MongoRepository <Roles, String> {
	Optional<Roles>findByName(ERole name);
}
