package models;

import java.util.*;
import javax.persistence.*;

import io.ebean.*;
import play.data.format.*;
import play.data.validation.*;

@Entity
public class Produto extends Model{

    @Id
    public Integer id;
    public String nome;
    public String descricao;
    public Double preco;
    public String marca;

    @ManyToOne
    public Usuario usuario;//ok

    public Produto(Integer id, String nome, String descricao, Double preco, String marca, Usuario usuario){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.marca = marca;
        this.usuario = usuario;
    }

    public void setUsuario(Usuario usuario){
        this.usuario = usuario;
    }

    public static final Finder<Integer, Produto> find = new Finder<>(Produto.class);
}