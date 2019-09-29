package com.co.latin.ecociudadano.repositories;

import com.co.latin.ecociudadano.model.Ranking;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RankingRepository extends CrudRepository<Ranking, Integer> {

    @Query("from Ranking WHERE :score BETWEEN min_score AND max_score")
    List<Ranking> findByRankingByScore(@Param("score") Double score);
}
