package com.valdir.helpdesk.services;

import com.valdir.helpdesk.domain.Pessoa;
import com.valdir.helpdesk.domain.Tecnico;
import com.valdir.helpdesk.dtos.TecnicoDTO;
import com.valdir.helpdesk.repository.PessoaRepository;
import com.valdir.helpdesk.repository.TecnicoRepository;
import com.valdir.helpdesk.resources.exceptions.DataIntegrityViolationException;
import com.valdir.helpdesk.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TecnicoService {

    @Autowired
    private TecnicoRepository tecnicoRepository;

    @Autowired
    private PessoaRepository pessoaRepository;


    public Tecnico findById(Integer id) {
        Optional<Tecnico> byId = tecnicoRepository.findById(id);

        return byId.orElseThrow(() -> new ObjectNotFoundException("Objeto Não encontrado! id: " + id));
    }


    public List<Tecnico> findAll() {
        return tecnicoRepository.findAll();
    }

    public Tecnico create(TecnicoDTO tecnicoDTO) {
        tecnicoDTO.setId(null);
        validaPorCpfEEmail(tecnicoDTO);
        Tecnico newObj = new Tecnico(tecnicoDTO);
        return tecnicoRepository.save(newObj);
    }

    private void validaPorCpfEEmail(TecnicoDTO tecnicoDTO) {
        Optional<Pessoa> obj = pessoaRepository.findByCpf(tecnicoDTO.getCpf());

        if (obj.isPresent() && obj.get().getId() != tecnicoDTO.getId()) {
            throw new DataIntegrityViolationException("CPF já cadastrado no sistema!");
        }

        obj = pessoaRepository.findByEmail(tecnicoDTO.getEmail());
        if (obj.isPresent() && obj.get().getId() != tecnicoDTO.getId()) {
            throw new DataIntegrityViolationException("E-mail já cadastrado no sistema!");
        }
    }
}
