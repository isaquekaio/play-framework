package controllers;

import views.html.figurinhas.*;
import java.util.*;
import play.mvc.*;
import models.*;
import play.data.*;
import java.io.*;
import play.mvc.Result;
import play.mvc.Controller;
import javax.inject.Inject;
import play.data.Form;

public class FigurinhasController extends Controller {
    @Inject
    private FormFactory formFactory;

    public Result buscar(){ //ok
        DynamicForm requestData = formFactory.form().bindFromRequest();
        String nome = requestData.get("nome");
        List<Figurinha> figurinhas = Figurinha.find.query().where()
            .ilike("nome", "%"+nome+"%")
            .findList();
        if(figurinhas==null) {
            return notFound("Figurinha não encontrado.");
        }
        return ok(index.render(figurinhas));
    }

    public Result index(){ //ok
        List<Figurinha> figurinhas = Figurinha.find.all();
        return ok(index.render(figurinhas));
    }

    public Result create(){
        Form<Figurinha> formFigurinha = formFactory.form(Figurinha.class);
        return ok(create.render(formFigurinha));
    }

    public Result save(){
        Form<Figurinha> formFigurinha = formFactory.form(Figurinha.class).bindFromRequest();
        Figurinha figurinha = formFigurinha.get();
        figurinha.save();
        return redirect(routes.FigurinhasController.index());
    }

    public Result edit(Integer numero){ //Meio certo
        if (!session().containsKey("id")){
            return redirect(routes.HomeController.login());
        }
        Figurinha figurinha = Figurinha.find.byId(numero);
        if (figurinha == null) {
            return notFound("Figurinha não encontrado.");
        }
        Form<Figurinha> formFigurinha = formFactory.form(Figurinha.class).fill(figurinha);
        return ok(edit.render(formFigurinha));
    }

    public Result update(){ //ok ou não
        if (!session().containsKey("id")){
            return redirect(routes.HomeController.login());
        }
        Form<Figurinha> formFigurinha = formFactory.form(Figurinha.class).bindFromRequest();
        Figurinha figurinha = formFigurinha.get();  //ok
        Figurinha figurinhaAntigo = Figurinha.find.byId(figurinha.numero);

        if (figurinhaAntigo==null) {
            return notFound("Figurinha não encontrado.");
        }
        figurinhaAntigo.numero = figurinha.numero;
        figurinhaAntigo.nome = figurinha.nome;
        figurinhaAntigo.preco = figurinha.preco;
        figurinhaAntigo.update();
        return redirect(routes.FigurinhasController.index());
    }

    public Result show (Integer numero){ //ok
        Figurinha figurinha = Figurinha.find.byId(numero);
        if(figurinha==null) {
            return notFound("Figurinha não encontrado.");
        }
        return ok(show.render(figurinha));
    }

    public Result destroy(Integer numero){ //ok
        if (!session().containsKey("id")){
            return redirect(routes.HomeController.login());
        }
        Figurinha figurinha = Figurinha.find.byId(numero);
        if (figurinha==null) {
            return notFound("Figurinha não encontrado.");
        }
        figurinha.delete();
        return redirect(routes.FigurinhasController.index());
    }
}