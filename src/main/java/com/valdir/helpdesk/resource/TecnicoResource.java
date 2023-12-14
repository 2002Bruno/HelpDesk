package com.valdir.helpdesk.resource;

import com.valdir.helpdesk.domain.Tecnico;
import com.valdir.helpdesk.dtos.TecnicoDTO;
import com.valdir.helpdesk.services.TecnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/tecnicos")
public class TecnicoResource {

    @Autowired
    private TecnicoService tecnicoService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<TecnicoDTO> findById(@PathVariable Integer id) {
        Tecnico byId = tecnicoService.findById(id);
        return ResponseEntity.ok().body(new TecnicoDTO(byId));
    }
}
