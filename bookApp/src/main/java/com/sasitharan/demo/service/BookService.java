package com.sasitharan.demo.service;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Sort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.sasitharan.demo.model.Book;
import com.sasitharan.demo.repository.BookRepository;
import java.util.Optional;

@Service
public class BookService {
	
	@Autowired
	BookRepository bookRepository;
	
	
	

	
	
	

	public ResponseEntity<List<Book>> getAllBooks() {
		try {
			List <Book> books = bookRepository.findAll();
			if(books.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(books,HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	
	public ResponseEntity<Book> getBookById(String id) {
		try {
			Optional <Book> books = bookRepository.findById(id);
			if(books.isPresent()) {
				return new ResponseEntity<>(books.get(),HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	public ResponseEntity<Book> createBook(Book book) {
		
		try {
			Book boo = bookRepository.insert(book);
			return new ResponseEntity<>(boo,HttpStatus.CREATED);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public ResponseEntity<Book> updateBook(String id , Book newBook) {
		Optional<Book> oldBook= bookRepository.findById(id);
		if(oldBook.isPresent()) {
			Book _book = oldBook.get();
			_book.setTitle(newBook.getTitle());
			_book.setAuthor(newBook.getAuthor());
			_book.setCoverPhotoURL(newBook.getCoverPhotoURL());
			_book.setIsbnNumber(newBook.getIsbnNumber());
			_book.setPrice(newBook.getPrice());
			_book.setLanguage(newBook.getLanguage());
			_book.setGenre(newBook.getGenre());
			return new ResponseEntity<> (bookRepository.save(_book),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
 
	public ResponseEntity deleteBookById(String id) {
		Optional<Book> book = bookRepository.findById(id);
		if(book.isPresent()) {
			try {
				bookRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}catch(Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}

	public ResponseEntity deleteBook() {
		try {
			bookRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.CREATED);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	
	
}
