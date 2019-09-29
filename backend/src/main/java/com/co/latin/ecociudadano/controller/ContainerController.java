package com.co.latin.ecociudadano.controller;

import javax.websocket.server.PathParam;

import com.co.latin.ecociudadano.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.co.latin.ecociudadano.model.Container;
import com.co.latin.ecociudadano.repositories.ContainerRepository;

@CrossOrigin
@RestController
public class ContainerController {
	
	@Autowired
    private ContainerRepository repository;

    @GetMapping(value = "/container")
    public ResponseEntity<?> getContainer(@PathParam("id") Integer id) {
        Long idl =  new Long(id);
    	
    	java.util.Optional<Container> container = repository.findById(idl);
    	
    	if (container == null)
    		return new ResponseEntity<>("No existe el container. ",
    				HttpStatus.INTERNAL_SERVER_ERROR);
    	
        return new ResponseEntity<>(container.get(),HttpStatus.OK);
    }

}
