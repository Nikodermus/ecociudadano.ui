package com.co.latin.ecociudadano.repositories;

import com.co.latin.ecociudadano.model.ClientRanking;
import com.co.latin.ecociudadano.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClientRankingRepository extends CrudRepository<ClientRanking, Integer> {

    @Query("from ClientRanking WHERE client_id=:id")
    List<ClientRanking> findByRankingByClientId(@Param("id") Long clientId);

}
