package com.sasitharan.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sasitharan.demo.model.Book;


@Repository
public interface BookRepository extends MongoRepository<Book, Integer> {

	Optional<Book> findById(String id);

	void deleteById(String id);

	

	
}
