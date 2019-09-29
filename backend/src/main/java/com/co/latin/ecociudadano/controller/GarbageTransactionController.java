package com.co.latin.ecociudadano.controller;

import com.co.latin.ecociudadano.model.*;
import com.co.latin.ecociudadano.repositories.ClientRankingRepository;
import com.co.latin.ecociudadano.repositories.GarbageTransactionRepository;
import com.co.latin.ecociudadano.repositories.RankingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class GarbageTransactionController {
    @Autowired
    GarbageTransactionRepository garbageTransactionRepository;
    @Autowired
    ClientRankingRepository clientRankingRepository;
    @Autowired
    RankingRepository rankingRepository;

    @PostMapping(value = "/postTransaction")
    public List<GarbageTransaction> getUser(@RequestBody Map<String,Object> transaction) {
        List<GarbageTransaction> lstTransactions = new ArrayList<GarbageTransaction>();
        ClientRanking clientRanking;
        Double point = new Double(transaction.get("point").toString());

        Client client = new Client();
        client.setId(new Long(transaction.get("clientId").toString()));
        Container container = new Container();
        container.setId(new Long(transaction.get("clientId").toString()));
        List<ClientRanking> clientRankings = clientRankingRepository.findByRankingByClientId(new Long(transaction.get("clientId").toString()));
        if(clientRankings == null || clientRankings.isEmpty()){
            clientRanking = new ClientRanking();
            clientRanking.setClientId(client);
            clientRanking.setScore(point);
        }else {
            clientRanking = clientRankings.get(0);
            clientRanking.setScore(clientRanking.getScore() + point);
        }

        List<Ranking> rankings = rankingRepository.findByRankingByScore(clientRanking.getScore());

        clientRanking.setRankingId(rankings.get(0));

        clientRankingRepository.save(clientRanking);

        List<String> types = Arrays.asList("plastico", "papel", "vidrio","tetrapack");

        Double weight = point/types.size();

        Double points = point/types.size();

        for(String type : types){
            GarbageTransaction newTransaction = new GarbageTransaction();
            newTransaction.setClientId(client);
            newTransaction.setContainerId(container);
            newTransaction.setGarbageType(type);
            newTransaction.setWeight(weight);
            newTransaction.setPoint(points);
            lstTransactions.add(newTransaction);
        }

        garbageTransactionRepository.saveAll(lstTransactions);

        return lstTransactions;
    }
}
