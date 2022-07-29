package com.example.demo.bean;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String price;
    private String fromPlace;
    private String toPlace;
    private String day;
    private String time;
    private String amount;
    @ManyToOne
    @JoinColumn(name = "id_provider", referencedColumnName = "id")
    private Provider provider;

    public Ticket() {
    }
}
