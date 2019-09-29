package com.co.latin.ecociudadano.model;

import javax.persistence.*;

@Entity
@Table(name = "ranking")
public class Ranking {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name = "min_score")
    private Double min_score;

    @Column(name = "max_score")
    private Double max_score;

    @Column(name = "name")
    private String name;

}
