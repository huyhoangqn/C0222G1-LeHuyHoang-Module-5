package com.example.demo.controller;

import com.example.demo.bean.Provider;
import com.example.demo.service.IProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/provider")
public class ProviderController {
    @Autowired
    private IProviderService providerService;

    @GetMapping("/show")
    public List<Provider> showAll() {
        return providerService.findAll();
    }
}
