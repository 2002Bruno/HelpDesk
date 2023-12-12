package com.valdir.helpdesk.domain.enums;

import lombok.Getter;

@Getter
public enum Status {

    ABERTO(0, "ABERTO"),
    ANDAMENTO(0, "ANDAMENTO"),
    RENCERRADO(0, "RENCERRADO");

    private Integer codigo;

    private String descricao;

    Status(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public static Status toEnum(Integer cod) {
        if (cod == null) {
            return null;
        }

        for (Status x : Status.values()) {
            if (cod.equals(x.getCodigo())) {
                return x;
            }
        }

        throw new IllegalArgumentException("Status inválido");
    }
}
