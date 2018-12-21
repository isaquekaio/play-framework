package models;

import io.ebean.*;
import java.util.*;
import javax.persistence.*;
import play.data.format.*;
import play.data.validation.*;


@Entity
public class Figurinha extends Model{
    @Id
    public Integer numero;
    public String nome;
    public double preco;

    @ManyToOne
    public Usuario usuario;

    public Figurinha(Integer numero, String nome, double preco){
        this.numero = numero;
        this.nome = nome;
        this.preco = preco;
    }
    public static final Finder<Integer, Figurinha> find = new Finder<>(Figurinha.class);
}