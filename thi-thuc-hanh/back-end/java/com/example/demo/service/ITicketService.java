package com.example.demo.service;

import com.example.demo.bean.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface ITicketService {
    Page<Ticket> showAll(Pageable pageable);

    Ticket save(Ticket veXe);

    Optional<Ticket> findById(Integer id);

    void deleteById(Integer id);
}
