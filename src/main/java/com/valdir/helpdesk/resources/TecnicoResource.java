package com.valdir.helpdesk.resources;

import com.valdir.helpdesk.domain.Tecnico;
import com.valdir.helpdesk.dtos.TecnicoDTO;
import com.valdir.helpdesk.services.TecnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

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

    @GetMapping
    public ResponseEntity<List<TecnicoDTO>> findAll() {
        List<Tecnico> list = tecnicoService.findAll();
        List<TecnicoDTO> listDTO = list.stream().map(obj -> new TecnicoDTO(obj)).collect(Collectors.toList());

        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping
    public ResponseEntity<TecnicoDTO> create(@RequestBody TecnicoDTO tecnicoDTO) {
        Tecnico newObj = tecnicoService.create(tecnicoDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(newObj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
