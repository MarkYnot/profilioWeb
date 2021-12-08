package com.project.controller;

import com.project.entity.Book;
import com.project.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookHandler {

    @Autowired
    BookRepository bookRepository;

    @RequestMapping("/findAll")
    public List<Book> findAll(){

        return bookRepository.findAll();
    }
}
