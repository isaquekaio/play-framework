package models;

import java.util.HashSet;
import java.util.Set;

public class Pizza{
    public Integer getId(){
        return id;
    }

    public String getSabor(){
        return sabor;
    }

    public Double getPreco(){
        return preco;
    }

    public String getTamanho(){
        return tamanho;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public void setSabor(String sabor){
        this.sabor = sabor;
    }

    public void setPreco(Double preco){
        this.preco = preco;
    }

    public void setTamanho(String tamanho){
        this.tamanho = tamanho;
    }
    public Integer id;
    public String sabor;
    public String tamanho;    
    public Double preco; //Double

    public Pizza(Integer id, String sabor, String tamanho, Double preco){
        this.id = id;
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }

    public Pizza(){
        this.id = -1;
    }
    
    private static Set<Pizza> pizzas;
    static{
        pizzas = new HashSet<>();
        pizzas.add(new Pizza(1, "Quatro Queijos", "G", 30.00));
        pizzas.add(new Pizza(2, "Frango com catupiry", "GG", 40.00));
        pizzas.add(new Pizza(3, "Bolonhesa", "GG", 40.00));
    }

    public static Set<Pizza> allPizzas(){
        return pizzas;
    }

    public static Pizza findById(Integer id){
        for(Pizza pizza : pizzas){
            if(id.equals(pizza.id)){
                return pizza;
            }
        }
        return null;
    }

    public static void add(Pizza pizza){
        pizzas.add(pizza);
    }

    public static boolean remove(Pizza pizza){
        return pizzas.remove(pizza);
    }
}