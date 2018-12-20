
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

object edit extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template1[Form[Pizza],play.twirl.api.HtmlFormat.Appendable] {

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
    <title>Atualizar Pizza</title>
</head>
<body>
"""),_display_(/*11.2*/helper/*11.8*/.form(action = routes.PizzasController.update())/*11.56*/{_display_(Seq[Any](format.raw/*11.57*/("""
    """),_display_(/*12.6*/helper/*12.12*/.inputText(pizzaFrom("id"))),format.raw/*12.39*/("""
    """),_display_(/*13.6*/helper/*13.12*/.inputText(pizzaFrom("sabor"))),format.raw/*13.42*/("""
    """),_display_(/*14.6*/helper/*14.12*/.inputText(pizzaFrom("tamanho"))),format.raw/*14.44*/("""
    """),_display_(/*15.6*/helper/*15.12*/.inputText(pizzaFrom("preco"))),format.raw/*15.42*/("""
    """),format.raw/*16.5*/("""<input type="submit" value="Atualizar">
""")))}),format.raw/*17.2*/("""
"""),format.raw/*18.1*/("""</body>
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
                  DATE: Tue Sep 18 21:38:02 BRT 2018
                  SOURCE: /home/linux/Desenvolvedor/PlayFramework/sistemas-web/app/views/pizzas/edit.scala.html
                  HASH: 3ab65b72230c65857c0331c4e2810733ef9cf608
                  MATRIX: 959->1|1057->28|1101->44|1128->45|1275->166|1289->172|1346->220|1385->221|1417->227|1432->233|1480->260|1512->266|1527->272|1578->302|1610->308|1625->314|1678->346|1710->352|1725->358|1776->388|1808->393|1879->434|1907->435
                  LINES: 28->1|31->2|34->3|35->4|42->11|42->11|42->11|42->11|43->12|43->12|43->12|44->13|44->13|44->13|45->14|45->14|45->14|46->15|46->15|46->15|47->16|48->17|49->18
                  -- GENERATED --
              */
          