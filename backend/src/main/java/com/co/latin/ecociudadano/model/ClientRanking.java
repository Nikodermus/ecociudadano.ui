package com.co.latin.ecociudadano.model;

import javax.persistence.*;

@Entity
@Table(name = "client_ranking")
public class ClientRanking {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client clientId;

    @ManyToOne
    @JoinColumn(name = "ranking_id")
    private Ranking rankingId;

    @Column(name = "weight")
    private Double weight;

    @Column(name = "score")
    private Double score;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Client getClientId() {
        return clientId;
    }

    public void setClientId(Client clientId) {
        this.clientId = clientId;
    }

    public Ranking getRankingId() {
        return rankingId;
    }

    public void setRankingId(Ranking rankingId) {
        this.rankingId = rankingId;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }
}
