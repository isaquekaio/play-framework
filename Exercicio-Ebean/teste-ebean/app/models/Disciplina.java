package models;

import java.util.*;
import javax.persistence.*;

import io.ebean.*;
import play.data.format.*;
import play.data.validation.*;

@Entity
public class Disciplina extends Model{
    @Id
    public Integer codigo;
    public String nome;
    public int carga_horaria;
    public String ementa;

    public Disciplina(Integer codigo, String nome, int carga_horaria, String ementa){
        this.codigo = codigo;
        this.nome = nome;
        this.carga_horaria = carga_horaria;
        this.ementa = ementa;
        this.alunos = new ArrayList<>();
    }

    @ManyToMany()
    public List<Aluno> alunos;

    public static final Finder<Integer, Disciplina> find = new Finder<>(Disciplina.class);
}