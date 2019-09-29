package com.co.latin.ecociudadano.controller;

import com.co.latin.ecociudadano.model.User;
import com.co.latin.ecociudadano.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping(value = "/user")
    public ResponseEntity<?> getUser(@PathParam("id") Integer id) {
    	Long idl =  new Long(id);
    	java.util.Optional<User> user = repository.findById(idl);
    	
    	if (user == null)
    		return new ResponseEntity<>("No existe el usuario. ",
    				HttpStatus.INTERNAL_SERVER_ERROR);
    	
        return new ResponseEntity<>(user.get(),HttpStatus.OK);
    }
    
    
}
