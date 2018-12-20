// @GENERATOR:play-routes-compiler
// @SOURCE:/home/linux/Desenvolvedor/Java-PlayFramework/CRUD/sistemas-web/conf/routes
// @DATE:Sat Nov 03 20:05:06 BRT 2018

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseHomeController HomeController = new controllers.ReverseHomeController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());
  public static final controllers.ReversePizzasController PizzasController = new controllers.ReversePizzasController(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseHomeController HomeController = new controllers.javascript.ReverseHomeController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReversePizzasController PizzasController = new controllers.javascript.ReversePizzasController(RoutesPrefix.byNamePrefix());
  }

}
