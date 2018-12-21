package controllers;

import views.html.*;
import javax.inject.Inject;
import models.Usuario;
import play.mvc.*;
import play.data.*;
import play.data.DynamicForm;
import play.data.FormFactory;

public class HomeController extends Controller {
    @Inject
    private FormFactory formFactory;

    //Pagina de login
    public Result login(){
        Form<Usuario> usuarioForm = formFactory.form(Usuario.class);
        return ok(login.render(usuarioForm));
    }

    //Autenticar usuario e criar seção
    public Result autenticar(){
        DynamicForm form = formFactory.form().bindFromRequest();
        String email = form.get("email");
        String senha = form.get("senha");

        Usuario usuario = Usuario.find.query()
                .where()
                .eq("email",email)
                .eq("senha",senha).findOne();

        if (email.equals(usuario.email) & senha.equals(usuario.senha)){
            session("id",usuario.id+"");//usuario.email //usuario.id
        }
        if (!session().containsKey("id")){//usuario.email
            return login();
        }
        return redirect(routes.FigurinhasController.index());
    }

    //sair da seção
    public Result sair(){
        session().clear();
        return login();
    }

}
