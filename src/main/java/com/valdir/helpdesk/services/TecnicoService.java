package com.valdir.helpdesk.services;

import com.valdir.helpdesk.domain.Pessoa;
import com.valdir.helpdesk.domain.Tecnico;
import com.valdir.helpdesk.dtos.TecnicoDTO;
import com.valdir.helpdesk.repository.PessoaRepository;
import com.valdir.helpdesk.repository.TecnicoRepository;
import com.valdir.helpdesk.resources.exceptions.DataIntegrityViolationException;
import com.valdir.helpdesk.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TecnicoService {

    @Autowired
    private TecnicoRepository tecnicoRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;


    public Tecnico findById(Integer id) {
        Optional<Tecnico> byId = tecnicoRepository.findById(id);

        return byId.orElseThrow(() -> new ObjectNotFoundException("Objeto Não encontrado! id: " + id));
    }


    public List<Tecnico> findAll() {
        return tecnicoRepository.findAll();
    }

    public Tecnico create(TecnicoDTO tecnicoDTO) {
        tecnicoDTO.setId(null);
        tecnicoDTO.setSenha(encoder.encode(tecnicoDTO.getSenha()));
        validaPorCpfEEmail(tecnicoDTO);
        Tecnico newObj = new Tecnico(tecnicoDTO);
        return tecnicoRepository.save(newObj);
    }

    public Tecnico update(Integer id, TecnicoDTO tecnicoDTO) {
        tecnicoDTO.setId(id);
        Tecnico oldObj = findById(id);
        validaPorCpfEEmail(tecnicoDTO);
        oldObj = new Tecnico(tecnicoDTO);

        return tecnicoRepository.save(oldObj);
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

    public void deletar(Integer id) {
        Tecnico byId = findById(id);

        if (byId.getChamados().size() > 0) {
            throw new DataIntegrityViolationException("O técnico possui ordens de serviço e não pode ser deletado!");
        }
        tecnicoRepository.deleteById(id);
    }
}
