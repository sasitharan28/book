package com.sasitharan.demo.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.sasitharan.demo.model.Book;
import com.sasitharan.demo.service.BookService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BookController {
	
	@Autowired
	BookService bookService;
	
	
	
	@GetMapping("/books")
	public ResponseEntity<List<Book>> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	@GetMapping("/books/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable String id) {
		return bookService.getBookById(id);
	}
	
	@PostMapping("/books")
	public ResponseEntity<Book> createBook(@RequestBody Book book) {
		return bookService.createBook(book);
	}
	
	@PutMapping("/books/{id}")
	public ResponseEntity<Book> updateBook(@RequestBody Book book , @PathVariable String id) {
		return bookService.updateBook(id,book);
	}
	
	@DeleteMapping("/books/{id}")
	public ResponseEntity deleteBook(@PathVariable String id) {
		return bookService.deleteBookById(id);
	}
	
	@GetMapping("/books/languages")
	public  ResponseEntity<Set<String>> findAllLanguages() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("French", "Portuguese", "English", "Russian", "Hindi", "Arabic", "Spanish", "Chinese")), HttpStatus.OK);
	}
	
	@GetMapping("/books/genres")
    public  ResponseEntity<Set<String>> findAllGenres() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Technology", "Science", "History", "Fantasy", "Biography", "Horror", "Romance")), HttpStatus.OK);
    }
	
	@DeleteMapping("/books")
	public ResponseEntity deleteAllBook(){
		return bookService.deleteBook();
	}
}
