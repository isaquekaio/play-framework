// @GENERATOR:play-routes-compiler
// @SOURCE:/home/linux/Desenvolvedor/Java-PlayFramework/CRUD/sistemas-web/conf/routes
// @DATE:Sat Nov 03 20:05:06 BRT 2018

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._

import play.api.mvc._

import _root_.controllers.Assets.Asset
import _root_.play.libs.F

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:3
  HomeController_0: controllers.HomeController,
  // @LINE:5
  PizzasController_2: controllers.PizzasController,
  // @LINE:15
  Assets_1: controllers.Assets,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:3
    HomeController_0: controllers.HomeController,
    // @LINE:5
    PizzasController_2: controllers.PizzasController,
    // @LINE:15
    Assets_1: controllers.Assets
  ) = this(errorHandler, HomeController_0, PizzasController_2, Assets_1, "/")

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, HomeController_0, PizzasController_2, Assets_1, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix, """controllers.HomeController.index"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pizzas""", """controllers.PizzasController.index()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pizzas/edit/""" + "$" + """id<[^/]+>""", """controllers.PizzasController.edit(id:Integer)"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pizzas/edit""", """controllers.PizzasController.update()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pizzas/create""", """controllers.PizzasController.create()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pizzas/""" + "$" + """id<[^/]+>""", """controllers.PizzasController.show(id:Integer)"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pizzas/create""", """controllers.PizzasController.save()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """pizzas/delete/""" + "$" + """id<[^/]+>""", """controllers.PizzasController.destroy(id:Integer)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.versioned(path:String = "/public", file:Asset)"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:3
  private[this] lazy val controllers_HomeController_index0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix)))
  )
  private[this] lazy val controllers_HomeController_index0_invoker = createInvoker(
    HomeController_0.index,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.HomeController",
      "index",
      Nil,
      "GET",
      this.prefix + """""",
      """ An example controller showing a sample home page""",
      Seq()
    )
  )

  // @LINE:5
  private[this] lazy val controllers_PizzasController_index1_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pizzas")))
  )
  private[this] lazy val controllers_PizzasController_index1_invoker = createInvoker(
    PizzasController_2.index(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PizzasController",
      "index",
      Nil,
      "GET",
      this.prefix + """pizzas""",
      """""",
      Seq()
    )
  )

  // @LINE:6
  private[this] lazy val controllers_PizzasController_edit2_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pizzas/edit/"), DynamicPart("id", """[^/]+""",true)))
  )
  private[this] lazy val controllers_PizzasController_edit2_invoker = createInvoker(
    PizzasController_2.edit(fakeValue[Integer]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PizzasController",
      "edit",
      Seq(classOf[Integer]),
      "GET",
      this.prefix + """pizzas/edit/""" + "$" + """id<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:7
  private[this] lazy val controllers_PizzasController_update3_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pizzas/edit")))
  )
  private[this] lazy val controllers_PizzasController_update3_invoker = createInvoker(
    PizzasController_2.update(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PizzasController",
      "update",
      Nil,
      "POST",
      this.prefix + """pizzas/edit""",
      """""",
      Seq()
    )
  )

  // @LINE:8
  private[this] lazy val controllers_PizzasController_create4_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pizzas/create")))
  )
  private[this] lazy val controllers_PizzasController_create4_invoker = createInvoker(
    PizzasController_2.create(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PizzasController",
      "create",
      Nil,
      "GET",
      this.prefix + """pizzas/create""",
      """""",
      Seq()
    )
  )

  // @LINE:9
  private[this] lazy val controllers_PizzasController_show5_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pizzas/"), DynamicPart("id", """[^/]+""",true)))
  )
  private[this] lazy val controllers_PizzasController_show5_invoker = createInvoker(
    PizzasController_2.show(fakeValue[Integer]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PizzasController",
      "show",
      Seq(classOf[Integer]),
      "GET",
      this.prefix + """pizzas/""" + "$" + """id<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:10
  private[this] lazy val controllers_PizzasController_save6_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pizzas/create")))
  )
  private[this] lazy val controllers_PizzasController_save6_invoker = createInvoker(
    PizzasController_2.save(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PizzasController",
      "save",
      Nil,
      "POST",
      this.prefix + """pizzas/create""",
      """""",
      Seq()
    )
  )

  // @LINE:11
  private[this] lazy val controllers_PizzasController_destroy7_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("pizzas/delete/"), DynamicPart("id", """[^/]+""",true)))
  )
  private[this] lazy val controllers_PizzasController_destroy7_invoker = createInvoker(
    PizzasController_2.destroy(fakeValue[Integer]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.PizzasController",
      "destroy",
      Seq(classOf[Integer]),
      "GET",
      this.prefix + """pizzas/delete/""" + "$" + """id<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:15
  private[this] lazy val controllers_Assets_versioned8_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_versioned8_invoker = createInvoker(
    Assets_1.versioned(fakeValue[String], fakeValue[Asset]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "versioned",
      Seq(classOf[String], classOf[Asset]),
      "GET",
      this.prefix + """assets/""" + "$" + """file<.+>""",
      """ Map static resources from the /public folder to the /assets URL path""",
      Seq()
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:3
    case controllers_HomeController_index0_route(params@_) =>
      call { 
        controllers_HomeController_index0_invoker.call(HomeController_0.index)
      }
  
    // @LINE:5
    case controllers_PizzasController_index1_route(params@_) =>
      call { 
        controllers_PizzasController_index1_invoker.call(PizzasController_2.index())
      }
  
    // @LINE:6
    case controllers_PizzasController_edit2_route(params@_) =>
      call(params.fromPath[Integer]("id", None)) { (id) =>
        controllers_PizzasController_edit2_invoker.call(PizzasController_2.edit(id))
      }
  
    // @LINE:7
    case controllers_PizzasController_update3_route(params@_) =>
      call { 
        controllers_PizzasController_update3_invoker.call(PizzasController_2.update())
      }
  
    // @LINE:8
    case controllers_PizzasController_create4_route(params@_) =>
      call { 
        controllers_PizzasController_create4_invoker.call(PizzasController_2.create())
      }
  
    // @LINE:9
    case controllers_PizzasController_show5_route(params@_) =>
      call(params.fromPath[Integer]("id", None)) { (id) =>
        controllers_PizzasController_show5_invoker.call(PizzasController_2.show(id))
      }
  
    // @LINE:10
    case controllers_PizzasController_save6_route(params@_) =>
      call { 
        controllers_PizzasController_save6_invoker.call(PizzasController_2.save())
      }
  
    // @LINE:11
    case controllers_PizzasController_destroy7_route(params@_) =>
      call(params.fromPath[Integer]("id", None)) { (id) =>
        controllers_PizzasController_destroy7_invoker.call(PizzasController_2.destroy(id))
      }
  
    // @LINE:15
    case controllers_Assets_versioned8_route(params@_) =>
      call(Param[String]("path", Right("/public")), params.fromPath[Asset]("file", None)) { (path, file) =>
        controllers_Assets_versioned8_invoker.call(Assets_1.versioned(path, file))
      }
  }
}
