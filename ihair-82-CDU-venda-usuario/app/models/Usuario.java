package  models;

import java.util.*;
import javax.persistence.*;

import io.ebean.*;
import play.data.format.*;
import play.data.validation.*;

@Entity
public class Usuario extends Model{
    @Id
    public Integer id;
    public String nome;
    public String email;
    public String senha;
    public String cpf;
    public String fone;
    public String cep;
    public String rua;
    public String numero;
    public String bairro;
    public String cidade;
    public String estado;
    public String complemento;

    @OneToMany(mappedBy="usuario")
    public List<Produto> produtos;

    public Usuario(String email, String senha){
        this.email = email;
        this.senha = senha;
    }
    public Usuario(Integer id, String nome, String email, String senha){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public Usuario(String nome, String email, String senha, String cpf, String fone, String cep, String rua, String numero, String bairro, String cidade, String estado, String complemento){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = "";
        this.fone = "";
        this.cep = "";
        this.rua = "";
        this.numero = "";
        this.bairro = "";
        this.cidade = "";
        this.estado = "";
        this.complemento = "";
    }

    public static final Finder<Integer, Usuario> find = new Finder<>(Usuario.class);
}
