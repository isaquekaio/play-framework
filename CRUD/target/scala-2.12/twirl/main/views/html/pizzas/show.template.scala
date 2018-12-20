
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

object show extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template1[Pizza,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(pizza : Pizza):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*2.1*/("""
"""),format.raw/*3.1*/("""<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>"""),_display_(/*6.13*/pizza/*6.18*/.sabor),format.raw/*6.24*/("""</title>
</head>
<body>
    
    <a href=""""),_display_(/*10.15*/routes/*10.21*/.PizzasController.show(pizza.id)),format.raw/*10.53*/("""">"""),_display_(/*10.56*/pizza/*10.61*/.id),format.raw/*10.64*/("""</a>
    <p>Sabor: """),_display_(/*11.16*/pizza/*11.21*/.sabor),format.raw/*11.27*/("""</p>
    <p>Tamanho: """),_display_(/*12.18*/pizza/*12.23*/.tamanho),format.raw/*12.31*/("""</p>
    <p>Preço: """),_display_(/*13.16*/pizza/*13.21*/.preco),format.raw/*13.27*/("""</p>
    
    <form action=""""),_display_(/*15.20*/routes/*15.26*/.PizzasController.edit(pizza.id)),format.raw/*15.58*/("""">
        <button type="submit">Editar</button>
    </form>
</body>
</html>"""))
      }
    }
  }

  def render(pizza:Pizza): play.twirl.api.HtmlFormat.Appendable = apply(pizza)

  def f:((Pizza) => play.twirl.api.HtmlFormat.Appendable) = (pizza) => apply(pizza)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Tue Sep 18 22:38:06 BRT 2018
                  SOURCE: /home/linux/Desenvolvedor/PlayFramework/sistemas-web/app/views/pizzas/show.scala.html
                  HASH: 52151ba0f5b9577177a649897c1164d3a14ca2bd
                  MATRIX: 953->1|1062->17|1089->18|1170->73|1183->78|1209->84|1279->127|1294->133|1347->165|1377->168|1391->173|1415->176|1462->196|1476->201|1503->207|1552->229|1566->234|1595->242|1642->262|1656->267|1683->273|1739->302|1754->308|1807->340
                  LINES: 28->1|33->2|34->3|37->6|37->6|37->6|41->10|41->10|41->10|41->10|41->10|41->10|42->11|42->11|42->11|43->12|43->12|43->12|44->13|44->13|44->13|46->15|46->15|46->15
                  -- GENERATED --
              */
          