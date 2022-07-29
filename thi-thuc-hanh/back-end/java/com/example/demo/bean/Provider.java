package com.example.demo.bean;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Getter
@Setter
@Entity
public class Provider {
    @Id
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "provider")
    @JsonBackReference
    private Set<Ticket> tickets;

    public Provider() {
    }
}
