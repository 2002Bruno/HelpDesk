package com.valdir.helpdesk;

import com.valdir.helpdesk.domain.Chamado;
import com.valdir.helpdesk.domain.Cliente;
import com.valdir.helpdesk.domain.Tecnico;
import com.valdir.helpdesk.domain.enums.Perfil;
import com.valdir.helpdesk.domain.enums.Prioridade;
import com.valdir.helpdesk.domain.enums.Status;
import com.valdir.helpdesk.domain.repository.ChamadoRepository;
import com.valdir.helpdesk.domain.repository.ClienteRepository;
import com.valdir.helpdesk.domain.repository.TecnicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class HelpDeskApplication implements CommandLineRunner {

    @Autowired
    private TecnicoRepository tecnicoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ChamadoRepository chamadoRepository;

    public static void main(String[] args) {
        SpringApplication.run(HelpDeskApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        Tecnico tec1 = new Tecnico(null, "Valdir Cesar", "76045777093", "valdir@gmail.com", "123");
        tec1.addPerfil(Perfil.ADMIN);

        Cliente cli1 = new Cliente(null, "Linus Torvalds", "08309717180", "torvalds@gmail.com", "123");

        Chamado c1 = new Chamado(null, Prioridade.MEDIA, Status.ANDAMENTO, "Chamado 01", "Primeiro Chamado", tec1, cli1);

        tecnicoRepository.saveAll(Arrays.asList(tec1));
        clienteRepository.saveAll(Arrays.asList(cli1));
        chamadoRepository.saveAll(Arrays.asList(c1));
    }
}
