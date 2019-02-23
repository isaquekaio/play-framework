package controllers;

import models.Produto;
//import models.*;
import play.mvc.*;
import views.html.produtos.*;
import javax.inject.Inject;
import play.data.*;
import java.util.*;
import java.io.*;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.usuarios.login;

public class ProdutosController extends Controller {
    @Inject
    private FormFactory formFactory;

    public int id;

    // Mostrar todos
    public Result index(){
        if (!session().containsKey("id")){//usuario.email
            session().put("uri", request().uri());
            return redirect(routes.UsuariosController.login());
        }
        //String usuario = session("usuario.email");
        //@ManyToOne(cascade = CascadeType.ALL)
        //List<Produto> produtos = Produto.find.query().select("*").fetch("usuario").where().eq("usuario.id",session("id")).findList();
        //List<Produto> produtos = Produto.
        //List<Produto> produtos = Produto.find.query().select("*").fetch("usuario").where().eq("usuario.id",session("id")).findList();//email
        //List<Produto> produtos = Produto.find.all();
        //List<Produto> produtos = Produto.get("usuario.id");
        //List<Produto> produtos = new List<>(Usuario.find.all());
        //Usuario produtos = Usuario.find.get(produto);
        //Integer id = Integer.parseInt("id");
        int id = Integer.parseInt(session("id"));
        List<Produto> produtos = Produto.find.query().fetch("usuario").where().eq("usuario.id",id).findList();// ok!!!
        return ok(index.render(produtos));
    }//retorna os produtos que pertence ao usuario logado.

    // Exibir um formulario em branco
    public Result create() {
        if (!session().containsKey("id")){
            return redirect(routes.UsuariosController.login());
        }
        Form<Produto> produtoForm = formFactory.form(Produto.class);
        return ok(create.render(produtoForm));
    }

    // Salvar os dados do produto
    public Result save() {
        if (!session().containsKey("id")){
            return redirect(routes.UsuariosController.login());
        }

        Form<Produto> produtoForm = formFactory.form(Produto.class).bindFromRequest();
        if(produtoForm.hasErrors()){
            flash("Por favor, corrija o formulário abaixo");
            return badRequest(create.render(produtoForm));
        }
        Produto produto = produtoForm.get();
        produto.save();
        flash("Produto salvo");
        return redirect(routes.ProdutosController.index());
    }

    // Mostrar um produto
    public Result show(Integer id) {
        if (!session().containsKey("id")){
            return redirect(routes.UsuariosController.login());
        }
        id = Integer.parseInt(session("id"));
        Produto produto = Produto.find.query().fetch("usuario").where().eq("usuario.id",id).findOne();
        if(produto==null) {
            return notFound("Produto não cadastrado");
        }
        return ok(show.render(produto));
    }

    // Editar um produto
    public Result edit(Integer id) {
        if (!session().containsKey("id")){
            return redirect(routes.UsuariosController.login());
        }

        Produto produto = Produto.find.byId(id);
        if (produto==null) {
            return notFound("Produto não cadastrado");
        }
        Form<Produto> produtoForm = formFactory.form(Produto.class).fill(produto);
        return ok(edit.render(produtoForm));
    }

    // Atualizar os dados do produto
    public Result update() {
        if (!session().containsKey("id")){
            return redirect(routes.UsuariosController.login());
        }

        Form<Produto> produtoForm = formFactory.form(Produto.class).bindFromRequest();
        Produto produto = produtoForm.get();
        Produto oldProduto = Produto.find.byId(produto.id);
        if (produto == null) {
            flash("Produto não encontrado.");
            return badRequest();
        }
        oldProduto.nome = produto.nome;
        oldProduto.descricao = produto.descricao;
        oldProduto.preco = produto.preco;
        oldProduto.marca = produto.marca;
        oldProduto.update();
        flash("Atualizado com sucesso!!!");
        return redirect(routes.ProdutosController.index());
    }
    
    // Excluir um produto
    public Result destroy(Integer id) {
        if (!session().containsKey("id")){
            return redirect(routes.UsuariosController.login());
        }
        Produto produto = Produto.find.byId(id);
        if (produto==null) {
            flash("Produto não encontrado.");
            return notFound();
        }
        produto.delete();
        flash("Produto excluindo");
        return redirect(routes.ProdutosController.index());
    }
    
}

/*
public Result compra(Integer id){
    if (!session().containsKey("usuario.email")){
        session().put("uri", request().uri());
        return redirect(routes.UsuariosController.login());
    }
    Produto produto = Produto.find.byId(id);
    Produto aux = produto;
    session().add(aux);
    produto.delete();
    return redirect(routes.ProdutosController.index());
}
*/
/*
* if (!session().containsKey("usuario.email")){
            session().put("uri", request().uri());
            return redirect(routes.UsuariosController.login());
        }
*/

/*
*     public Produto compra(Integer id){
        if (!session().containsKey("usuario.email")){
            session().put("uri", request().uri());
            return redirect(routes.UsuariosController.login());
        }
        Produto produto = Produto.find.byId(id);
        session().add(produto);
        produto.delete();
    }
* */
