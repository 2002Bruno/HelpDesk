package com.valdir.helpdesk.services;

import com.valdir.helpdesk.domain.Chamado;
import com.valdir.helpdesk.domain.Cliente;
import com.valdir.helpdesk.domain.Tecnico;
import com.valdir.helpdesk.domain.enums.Perfil;
import com.valdir.helpdesk.domain.enums.Prioridade;
import com.valdir.helpdesk.domain.enums.Status;
import com.valdir.helpdesk.repository.ChamadoRepository;
import com.valdir.helpdesk.repository.ClienteRepository;
import com.valdir.helpdesk.repository.TecnicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class DBService {

    @Autowired
    private TecnicoRepository tecnicoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ChamadoRepository chamadoRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;

    public void instanciaDB() {
        Tecnico tec1 = new Tecnico(null, "Valdir Cesar", "76045777093", "valdir@gmail.com", encoder.encode("123"));
        Tecnico tec2 = new Tecnico(null, "Heitor Duarte Garcia", "27865934416", "heitor.garcia@gmail.com", encoder.encode("02754823233"));
        Tecnico tec3 = new Tecnico(null, "Rinaldo Rosa Vitorino", "49308351272", "rinaldo.vitorino@gmail.com", encoder.encode("76883572320"));
        Tecnico tec4 = new Tecnico(null, "Joel Saraiva Braz", "05986588312", "joel.braz@gmail.com", encoder.encode("46233231640"));
        Tecnico tec5 = new Tecnico(null, "Enrico Teodoro Jesus", "34736328215", "enrico.jesus@gmail.com", encoder.encode("67549951378"));
        tec1.addPerfil(Perfil.ADMIN);

        Cliente cli1 = new Cliente(null, "Waleska Vogas Paulino", "03832869131", "waleska.paulino@gmail.com", encoder.encode("44316632254"));
        Cliente cli2 = new Cliente(null, "Levi Robadey Vogas", "92347557408", "levi.vogas@gmail.com", encoder.encode("56883128220"));
        Cliente cli3 = new Cliente(null, "Fransiscano Sarmento Pina", "72347114220", "fransiscano.pina@gmail.com", encoder.encode("15473213581"));
        Cliente cli4 = new Cliente(null, "Eric Carneiro Alentejo", "61470164744", "eric.alentejo@gmail.com", encoder.encode("43781714870"));
        Cliente cli5 = new Cliente(null, "Michel Gouveia Valle", "88196221495", "michel.valle@gmail.com", encoder.encode("16731901653"));

        Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 01", "Primeiro Chamado", tec1, cli1);
        Chamado c2 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 02", "Segundo Chamado", tec2, cli2);
        Chamado c3 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 03", "Chamado teste", tec3, cli3);
        Chamado c4 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 04", "Chamado 2201", tec4, cli4);
        Chamado c5 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 05", "Primeiro Chamado", tec5, cli5);

        tecnicoRepository.saveAll(Arrays.asList(tec1, tec2, tec3, tec4, tec5));
        clienteRepository.saveAll(Arrays.asList(cli1, cli1, cli2, cli3, cli4, cli5));
        chamadoRepository.saveAll(Arrays.asList(c1, c2, c3, c4, c5));
    }
}
