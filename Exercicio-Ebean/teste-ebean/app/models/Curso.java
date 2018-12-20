package models;

import java.util.*;
import javax.persistence.*;

import io.ebean.*;
import play.data.format.*;
import play.data.validation.*;

@Entity
public class Curso extends Model{
    @Id
    public Integer codigo;
    public String nome;
    public String nivel;

    public Curso(Integer codigo, String nome, String nivel){
        this.codigo = codigo;
        this.nome = nome;
        this.nivel = nivel;
        this.alunos = new ArrayList<>();
    }

    @OneToMany(mappedBy = "curso")
    public List<Aluno> alunos;

    public static final Finder<Integer, Curso> find = new Finder<>(Curso.class);
}