package com.example.demo.service.impl;

import com.example.demo.bean.Ticket;
import com.example.demo.repository.TicketRepository;
import com.example.demo.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TicketServive implements ITicketService {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public Page<Ticket> showAll(Pageable pageable) {
        return ticketRepository.findAll(pageable);
    }

    @Override
    public Ticket save(Ticket veXe) {
        return ticketRepository.save(veXe);
    }

    @Override
    public Optional<Ticket> findById(Integer id) {
        return ticketRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        ticketRepository.deleteById(id);
    }
}
