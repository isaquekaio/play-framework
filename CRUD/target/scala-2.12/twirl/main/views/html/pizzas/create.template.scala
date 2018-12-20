
package views.html.pizzas

import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import java.lang._
import java.util._
import scala.collection.JavaConverters._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._
import play.data._
import play.core.j.PlayFormsMagicForJava._

object create extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template1[Form[Pizza],play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(pizzaFrom : Form[Pizza]):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {
/*2.2*/import helper._


Seq[Any](format.raw/*3.1*/("""
"""),format.raw/*4.1*/("""<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Create Pizza</title>
</head>
<body>
    <h1>Create Pizza</h1>
    """),_display_(/*12.6*/helper/*12.12*/.form(action = routes.PizzasController.save())/*12.58*/{_display_(Seq[Any](format.raw/*12.59*/("""
        """),_display_(/*13.10*/helper/*13.16*/.inputText(pizzaFrom("id"))),format.raw/*13.43*/("""
        """),_display_(/*14.10*/helper/*14.16*/.inputText(pizzaFrom("sabor"))),format.raw/*14.46*/("""
        """),_display_(/*15.10*/helper/*15.16*/.inputText(pizzaFrom("tamanho"))),format.raw/*15.48*/("""
        """),_display_(/*16.10*/helper/*16.16*/.inputText(pizzaFrom("preco"))),format.raw/*16.46*/("""
        """),format.raw/*17.9*/("""<input type="submit" value="Create Pizza">
    """)))}),format.raw/*18.6*/("""
"""),format.raw/*19.1*/("""</body>
</html>"""))
      }
    }
  }

  def render(pizzaFrom:Form[Pizza]): play.twirl.api.HtmlFormat.Appendable = apply(pizzaFrom)

  def f:((Form[Pizza]) => play.twirl.api.HtmlFormat.Appendable) = (pizzaFrom) => apply(pizzaFrom)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Tue Sep 18 20:48:15 BRT 2018
                  SOURCE: /home/linux/Desenvolvedor/PlayFramework/sistemas-web/app/views/pizzas/create.scala.html
                  HASH: 55692e0886e2b315dc16b06a348ca7fb0658e646
                  MATRIX: 961->1|1059->28|1103->44|1130->45|1304->193|1319->199|1374->245|1413->246|1450->256|1465->262|1513->289|1550->299|1565->305|1616->335|1653->345|1668->351|1721->383|1758->393|1773->399|1824->429|1860->438|1938->486|1966->487
                  LINES: 28->1|31->2|34->3|35->4|43->12|43->12|43->12|43->12|44->13|44->13|44->13|45->14|45->14|45->14|46->15|46->15|46->15|47->16|47->16|47->16|48->17|49->18|50->19
                  -- GENERATED --
              */
          