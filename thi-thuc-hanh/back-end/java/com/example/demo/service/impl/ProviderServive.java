package com.example.demo.service.impl;

import com.example.demo.bean.Provider;
import com.example.demo.repository.ProviderRepository;
import com.example.demo.service.IProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProviderServive implements IProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    @Override
    public List<Provider> findAll() {
        return providerRepository.findAll();
    }
}
