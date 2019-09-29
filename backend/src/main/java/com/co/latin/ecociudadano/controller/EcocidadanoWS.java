package com.co.latin.ecociudadano.controller;

import com.co.latin.ecociudadano.model.Client;
import com.co.latin.ecociudadano.model.User;
import com.co.latin.ecociudadano.repositories.ClientRepository;
import com.co.latin.ecociudadano.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class EcocidadanoWS {
	@Autowired
	ClientRepository clientRepository;
	@GetMapping
	public Client ping() {
		Client client = clientRepository.findById(new Long(1)).get();
		System.out.println("clien" + client);
		return client;
	}
	


}
