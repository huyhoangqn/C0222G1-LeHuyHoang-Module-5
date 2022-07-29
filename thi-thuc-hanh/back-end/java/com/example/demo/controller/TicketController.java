package com.example.demo.controller;

import com.example.demo.bean.Ticket;
import com.example.demo.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/ticket")
public class TicketController {
    @Autowired
    private ITicketService ticketService;
//
//        @GetMapping
//    public ResponseEntity<List<VeXe>> findAll() {
//        List<VeXe> list = veXeService.findAll();
//        return new ResponseEntity<>(list, HttpStatus.OK);
//    }
//    @GetMapping("/list-ve-xe")
//    public ResponseEntity<List<VeXe>> findAll(@PageableDefault(value = 2) Pageable pageable) {
//        List<VeXe> list = veXeService.findAll();
//        return new ResponseEntity<>(list, HttpStatus.OK);
//    }

    //    @GetMapping("/show")
//    public ResponseEntity<Page<Ticket>> displayPageShow(@PageableDefault(value = 10) Pageable pageable) {
//        Page<Ticket> veXePage = ticketService.showAll(pageable);
//        return new ResponseEntity<>(veXePage, HttpStatus.OK);
//    }
    @GetMapping("/show")
    public ResponseEntity<Page<Ticket>> displayPageShow(@RequestParam(name = "page", defaultValue = "0") int page) {
        Sort sort = Sort.by("id").descending();
        Page<Ticket> veXePage = ticketService.showAll(PageRequest.of(page, 2, sort));
        return new ResponseEntity<>(veXePage, HttpStatus.OK);
    }

    @PostMapping(value = "/save-create")
    public ResponseEntity<?> save(@RequestBody Ticket ticket) {
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.CREATED);
    }

    @GetMapping(value = "/edit/{id}")
    public Optional<Ticket> findById(@PathVariable Integer id) {
        return ticketService.findById(id);
    }

    @PatchMapping(value = "/save-edit")
    public ResponseEntity<?> saveEdit(@RequestBody Ticket ticket) {
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        ticketService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
