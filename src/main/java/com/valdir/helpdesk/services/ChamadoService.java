package com.valdir.helpdesk.services;

import com.valdir.helpdesk.domain.Chamado;
import com.valdir.helpdesk.repository.ChamadoRepository;
import com.valdir.helpdesk.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChamadoService {

    @Autowired
    private ChamadoRepository chamadoRepository;

    public Chamado findById(Integer id) {
        Optional<Chamado> chamado = chamadoRepository.findById(id);

        return chamado.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado! ID: " + id));
    }

    public List<Chamado> findAll() {
        List<Chamado> chamadosList = chamadoRepository.findAll();
        return chamadosList;
    }
}
