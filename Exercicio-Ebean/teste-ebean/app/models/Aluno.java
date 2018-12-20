package models;

import java.util.*;
import javax.persistence.*;

import io.ebean.*;
import play.data.format.*;
import play.data.validation.*;

@Entity
public class Aluno extends Model{
    @Id
    public Integer matricula;
    public String nome;
    public Date data_nasc;
    public String sexo;

    public Aluno(Integer matricula, String nome, Date nada_nasc, String sexo){
        this.matricula = matricula;
        this.nome = nome;
        this.data_nasc = nada_nasc;
        this.sexo = sexo;
        this.disciplinas = new ArrayList<>();
    }

    @ManyToMany(mappedBy = "alunos")
    public List<Disciplina> disciplinas;

    @ManyToOne
    public Curso curso;

    public static final Finder<Integer, Aluno> find = new Finder<>(Aluno.class);
}