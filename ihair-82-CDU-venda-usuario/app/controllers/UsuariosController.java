package controllers;

import views.html.usuarios.*;
import javax.inject.Inject;
import models.Usuario;
import play.mvc.*;
import play.data.*;
import play.data.DynamicForm;
import play.data.FormFactory;

public class UsuariosController extends Controller {
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
        return redirect(routes.HomeController.index());
    }

    //sair da seção
    public Result sair(){
        session().clear();
        return login();
    }
             
    // Exibir um formulario em branco
    public Result create() {
        Form<Usuario> usuarioForm = formFactory.form(Usuario.class);
        return ok(create.render(usuarioForm));
    }

    // Salvar os dados do usuario
    public Result save() {
        Form<Usuario> usuarioForm = formFactory.form(Usuario.class).bindFromRequest();
        if(usuarioForm.hasErrors()){
            flash("Por favor, corrija o formulário abaixo");
            return badRequest(create.render(usuarioForm));
        }
        Usuario usuario = usuarioForm.get();
        usuario.save();
        flash("Usuario cadastrado");
        return ok();
    }

    // Mostrar um usuario
    public Result show(Integer id) {
        Usuario usuario = Usuario.find.byId(id);
        if(usuario==null) {
            return notFound("Usuario não cadastrado");
        }
        return ok(show.render(usuario));
    }

    // Editar um usuario
    public Result edit(Integer id) {
        Usuario usuario = Usuario.find.byId(id);
        if (usuario==null) {
            return notFound("Usuario não cadastrado");
        }
        Form<Usuario> usuarioForm = formFactory.form(Usuario.class).fill(usuario);
        return ok(edit.render(usuarioForm));
    }

    // Atualizar os dados do usuario
    public Result update() {
        Form<Usuario> usuarioForm = formFactory.form(Usuario.class).bindFromRequest();
        Usuario usuario = usuarioForm.get();
        Usuario oldUsuario = Usuario.find.byId(usuario.id);
        if (usuario == null) {
            flash("Usuario não encontrado.");
            return badRequest();
        }
        oldUsuario.nome = usuario.nome;
        oldUsuario.nome = usuario.email;
        oldUsuario.update();
        flash("Atualizado com sucesso!!!");
        return ok();
    }

    // Excluir um usuario
    public Result destroy(Integer id) {
        Usuario usuario = Usuario.find.byId(id);
        if (usuario==null) {
            flash("Usuario não encontrado.");
            return notFound();
        }
        usuario.delete();
        flash("Usuario excluindo");
        return ok();
    }
}
