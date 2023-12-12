package com.valdir.helpdesk.domain.enums;

import lombok.Getter;

@Getter
public enum Prioridade {

    BAIXA(0, "BAIXA"),
    MEDIA(0, "MEDIA"),
    ALTA(0, "ALTA");

    private Integer codigo;

    private String descricao;

    Prioridade(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public static Prioridade toEnum(Integer cod) {
        if (cod == null) {
            return null;
        }

        for (Prioridade x : Prioridade.values()) {
            if (cod.equals(x.getCodigo())) {
                return x;
            }
        }

        throw new IllegalArgumentException("Prioridade inválido");
    }
}
