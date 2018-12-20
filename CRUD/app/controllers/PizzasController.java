package controllers;

import models.Pizza;
import play.data.Form;
import play.data.FormFactory;

import java.util.Set;

import play.mvc.Controller;
import play.mvc.Result;

import views.html.pizzas.*;
import javax.inject.Inject;

public class PizzasController extends Controller{
    @Inject
    FormFactory formFactory;

    public Result index(){
        Set<Pizza> pizzas = Pizza.allPizzas();
        return ok(index.render(pizzas));
    }

    public Result create(){
        Form<Pizza> pizzaForm = formFactory.form(Pizza.class);
        return ok(create.render(pizzaForm));
    }

    public Result save(){
        Form<Pizza> form = formFactory.form(Pizza.class).bindFromRequest();
        Pizza pizza = form.get();
        if(form == null){
            return ok(create.render(form));
        }
        Pizza.add(pizza);
        return redirect(routes.PizzasController.index());
    }

    public Result update(){
        Pizza pizza = formFactory.form(Pizza.class).bindFromRequest().get();
        Pizza PizzaAntiga = Pizza.findById(pizza.id);
        if(PizzaAntiga == null){
            return notFound("Pizza não cadastrada");
        }
        PizzaAntiga.sabor = pizza.sabor;
        PizzaAntiga.sabor = pizza.tamanho;
        PizzaAntiga.preco = pizza.preco;
        return redirect(routes.PizzasController.index());
    }

    public Result show(Integer id){
        Pizza pizza = Pizza.findById(id);
        if(pizza == null){
            return notFound("Pizza não cadastrada");
        }
        return ok(show.render(pizza));
    }

    public Result edit(Integer id){
        Pizza pizza = Pizza.findById(id);
        if(pizza == null){
            return notFound("Pizza não cadastrada");
        }
        Form<Pizza> form = formFactory.form(Pizza.class).fill(pizza);
        return ok(edit.render(form));
    }

    public Result destroy(Integer id){
        Pizza pizza = Pizza.findById(id);
        if(pizza == null){
            return notFound("Pizza não cadastrada");
        }
        Pizza.remove(pizza);
        return redirect(routes.PizzasController.index());
    }
}