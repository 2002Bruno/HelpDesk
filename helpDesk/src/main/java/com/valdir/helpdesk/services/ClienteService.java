package com.valdir.helpdesk.services;

import com.valdir.helpdesk.domain.Cliente;
import com.valdir.helpdesk.domain.Pessoa;
import com.valdir.helpdesk.dtos.ClienteDTO;
import com.valdir.helpdesk.repository.ClienteRepository;
import com.valdir.helpdesk.repository.PessoaRepository;
import com.valdir.helpdesk.resources.exceptions.DataIntegrityViolationException;
import com.valdir.helpdesk.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;

    public Cliente findById(Integer id) {
        Optional<Cliente> byId = clienteRepository.findById(id);

        return byId.orElseThrow(() -> new ObjectNotFoundException("Objeto Não encontrado! id: " + id));
    }


    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    public Cliente create(ClienteDTO clienteDTO) {
        clienteDTO.setId(null);
        clienteDTO.setSenha(encoder.encode(clienteDTO.getSenha()));
        validaPorCpfEEmail(clienteDTO);
        Cliente newObj = new Cliente(clienteDTO);
        return clienteRepository.save(newObj);
    }

    public Cliente update(Integer id, ClienteDTO clienteDTO) {
        clienteDTO.setId(id);
        Cliente oldObj = findById(id);
        validaPorCpfEEmail(clienteDTO);
        oldObj = new Cliente(clienteDTO);

        return clienteRepository.save(oldObj);
    }

    private void validaPorCpfEEmail(ClienteDTO clienteDTO) {
        Optional<Pessoa> obj = pessoaRepository.findByCpf(clienteDTO.getCpf());

        if (obj.isPresent() && obj.get().getId() != clienteDTO.getId()) {
            throw new DataIntegrityViolationException("CPF já cadastrado no sistema!");
        }

        obj = pessoaRepository.findByEmail(clienteDTO.getEmail());
        if (obj.isPresent() && obj.get().getId() != clienteDTO.getId()) {
            throw new DataIntegrityViolationException("E-mail já cadastrado no sistema!");
        }
    }

    public void deletar(Integer id) {
        Cliente byId = findById(id);

        if (byId.getChamados().size() > 0) {
            throw new DataIntegrityViolationException("O técnico possui ordens de serviço e não pode ser deletado!");
        }
        clienteRepository.deleteById(id);
    }
}
