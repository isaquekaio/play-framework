package controllers;

import models.*;
import play.mvc.*;
import java.util.*;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        if (!session().containsKey("id")){//usuario.email
            session().put("uri", request().uri());
            List<Produto> produtos = Produto.find.all();
            return ok(views.html.index.render(produtos));
        }
        int id = Integer.parseInt(session("id"));
        List<Produto> produtos = Produto.find.query().fetch("usuario").where().ne("usuario.id",id).findList();//
        return ok(views.html.index.render(produtos));
    }   //Se estiver logado, exibir produtos que não pertence ao usuario.
        //Senão exibir todos produtos
    
    public Result show(Integer id) {
        Produto produto = Produto.find.byId(id);
        if(produto==null) {
            return notFound("Produto não cadastrado");
        }
        return ok(views.html.show.render(produto));
    }


    public Result compra(Integer id) {
        if (!session().containsKey("id")){//usuario.email
            session().put("uri", request().uri());
            return redirect(routes.UsuariosController.login());
        }
        Produto produto = Produto.find.byId(id);
        if(produto==null) {
            return notFound("Produto não cadastrado");
        }
        //String id = session("id");
        //produto.usuario = id_conv;
        //Produto novo = produto;
        int id_usuario = Integer.parseInt(session("id"));
        Usuario usuario1 = Usuario.find.byId(id_usuario);
        produto.setUsuario(usuario1);
        //usuario1.produtos.add(produto);
        produto.update();
        //usuario1.update();

        //System.out.println(produto.usuario.id);
        return redirect(routes.ProdutosController.index());
    }//salvar o produto na lista do usuario e exclui-lo da pagina inicial
}
