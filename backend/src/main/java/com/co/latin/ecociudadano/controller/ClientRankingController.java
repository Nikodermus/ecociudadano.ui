package com.co.latin.ecociudadano.controller;

import com.co.latin.ecociudadano.model.ClientRanking;
import com.co.latin.ecociudadano.repositories.ClientRankingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin
@RestController
public class ClientRankingController {
    @Autowired
    ClientRankingRepository clientRankingRepository;

    @GetMapping(value="clientdescription")
    public ClientRanking getdescription(@PathParam("id") Integer id){
        return clientRankingRepository.findByRankingByClientId(new Long(id)).get(0);
    }

}
