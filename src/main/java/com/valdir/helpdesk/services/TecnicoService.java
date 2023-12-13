package com.valdir.helpdesk.services;

import com.valdir.helpdesk.domain.Tecnico;
import com.valdir.helpdesk.repository.TecnicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TecnicoService {

    @Autowired
    private TecnicoRepository tecnicoRepository;


    public Tecnico findById(Integer id) {
        Optional<Tecnico> byId = tecnicoRepository.findById(id);

        return byId.orElse(null);
    }
}
