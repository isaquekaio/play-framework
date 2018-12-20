package controllers;

import views.html.*;
import java.util.*;
import play.mvc.*;
import models.*;

public class HomeController extends Controller {

    public Result Popular() {
        Curso c1 = new Curso(1, "TADS", "Tecnologico");
        c1.save();

        Curso c2 = new Curso(2, "Redes de Computadores", "Tecnologico");
        c2.save();

        Curso c3 = new Curso(3, "Informática para Internet", "Tecnico");
        c3.save();

        Curso c4 = new Curso(4, "Redes de Computadores", "Tecnico");
        c4.save();

        Aluno aluno1 = new Aluno(1, "Pedro Paulo", new Date("1994/11/08"), "M");
        aluno1.curso = c1;
        aluno1.save();

        Aluno aluno2 = new Aluno(2, "Sara Cristina", new Date("2000/01/01"), "F");
        aluno2.curso = c1;
        aluno2.save();

        Aluno aluno3 = new Aluno(3, "Luana Priscila", new Date("2000/03/03"), "F");
        aluno3.curso = c2;
        aluno3.save();

        Aluno aluno4 = new Aluno(4, "Rute Beatriz", new Date("2000/07/17"), "F");
        aluno4.curso = c2;
        aluno4.save();

        Aluno aluno5 = new Aluno(5, "Amanda Raquel", new Date("2000/09/09"), "F");
        aluno5.curso = c4;
        aluno5.save();

        Disciplina d1 = new Disciplina(1, "Desenvolvimento Web", 80, "XXXXXX");
        d1.alunos.add(aluno1);
        d1.alunos.add(aluno2);
        d1.save();

        Disciplina d2 = new Disciplina(2, "Web Design", 60, "XXXXXX");
        d2.alunos.add(aluno1);
        d2.alunos.add(aluno2);
        d2.save();

        Disciplina d3 = new Disciplina(3, "Estrutura de dados", 60, "XXXXXX");
        d3.alunos.add(aluno1);
        d3.alunos.add(aluno2);
        d3.alunos.add(aluno3);
        d3.alunos.add(aluno4);
        d3.alunos.add(aluno5);
        d3.save();

        Disciplina d4 = new Disciplina(4, "Banco de dados", 60, "XXXXXX");
        d4.alunos.add(aluno1);
        d4.alunos.add(aluno2);
        d4.alunos.add(aluno3);
        d4.alunos.add(aluno4);
        d4.alunos.add(aluno5);
        d4.save();

        Disciplina d5 = new Disciplina(5, "APOO", 60, "XXXXXX");
        d5.alunos.add(aluno1);
        d5.alunos.add(aluno2);
        d5.save();

        Disciplina d6 = new Disciplina(6, "Programação de computadores", 80, "XXXXXX");
        d6.alunos.add(aluno1);
        d6.alunos.add(aluno2);
        d6.alunos.add(aluno3);
        d6.alunos.add(aluno4);
        d6.alunos.add(aluno5);
        d6.save();

        Disciplina d7 = new Disciplina(7, "POO", 60, "XXXXXX");
        d7.alunos.add(aluno1);
        d7.alunos.add(aluno2);
        d7.alunos.add(aluno3);
        d7.alunos.add(aluno4);
        d7.alunos.add(aluno5);
        d7.save();

        Disciplina d8 = new Disciplina(8, "Arquitetura de computadores", 60, "XXXXXX");
        d8.alunos.add(aluno1);
        d8.alunos.add(aluno2);
        d8.alunos.add(aluno3);
        d8.alunos.add(aluno4);
        d8.alunos.add(aluno5);
        d8.save();
        return ok("Dados populado!!!");
    }

    public Result cursos() {
        List<Curso> cursos = Curso.find.all(); //A)ok
        return ok(views.html.cursos.render(cursos));
    }

    public Result alunos(){
        List<Aluno> alunos = Aluno.find.all();
        //List<Curso> cursos = Curso.find.query().select("*").fetch("alunos", "nome").findList();
        return ok(views.html.alunos.render(alunos));
    }

    public Result disciplinas(){
        List<Disciplina> disciplinas = Disciplina.find.all();
        return ok(views.html.disciplinas.render(disciplinas));
    }

    public Result aluno(Integer id){
        //Aluno aluno = Aluno.find.query().select("*").fetch("curso", "nome").where().idEq(matricula).findOne();
        Aluno aluno = Aluno.find.byId(id);
        return ok(views.html.aluno.render(aluno));
    }

    public Result disciplinasAlunas(){
        List<Disciplina> disciplinas = Disciplina.find.query()
            .select("*")
            .where()
            .filterMany("alunos").eq("sexo", "F")
            .findList();
        return ok(views.html.disciplinas.render(disciplinas));
    }
}