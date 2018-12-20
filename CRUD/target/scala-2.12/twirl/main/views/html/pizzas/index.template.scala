
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

object index extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template1[Set[Pizza],play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(pizzas : Set[Pizza]):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*2.1*/("""
"""),format.raw/*3.1*/("""<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Todas as pizzas</title>
</head>
<body>
    <h1>Todas as Pizzas</h1>
    <table>
        <tr><td>ID</td><td>Sabor</td><td>Tamanho</td><td>Preço</td><td>Opções</td></tr>
        """),_display_(/*13.10*/for(pizza <- pizzas) yield /*13.30*/{_display_(Seq[Any](format.raw/*13.31*/("""
        """),format.raw/*14.9*/("""<tr>
            <td><a href=""""),_display_(/*15.27*/routes/*15.33*/.PizzasController.show(pizza.id)),format.raw/*15.65*/("""">"""),_display_(/*15.68*/pizza/*15.73*/.id),format.raw/*15.76*/("""</a></td>
            <td>"""),_display_(/*16.18*/pizza/*16.23*/.sabor),format.raw/*16.29*/("""</td>
            <td>"""),_display_(/*17.18*/pizza/*17.23*/.tamanho),format.raw/*17.31*/("""</td>
            <td>"""),_display_(/*18.18*/pizza/*18.23*/.preco),format.raw/*18.29*/("""</td>
            <td><a href=""""),_display_(/*19.27*/routes/*19.33*/.PizzasController.destroy(pizza.id)),format.raw/*19.68*/("""">Excluir</a></td>
        </tr>
        """)))}),format.raw/*21.10*/("""
    """),format.raw/*22.5*/("""</table>
    <form action=""""),_display_(/*23.20*/routes/*23.26*/.PizzasController.create),format.raw/*23.50*/("""">
        <button type="submit">Inserir</button>
    </form>

</body>
</html>"""))
      }
    }
  }

  def render(pizzas:Set[Pizza]): play.twirl.api.HtmlFormat.Appendable = apply(pizzas)

  def f:((Set[Pizza]) => play.twirl.api.HtmlFormat.Appendable) = (pizzas) => apply(pizzas)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Tue Sep 18 21:30:43 BRT 2018
                  SOURCE: /home/linux/Desenvolvedor/PlayFramework/sistemas-web/app/views/pizzas/index.scala.html
                  HASH: 4665193c88ae954ce98e1610432be94c335c08ef
                  MATRIX: 959->1|1074->23|1101->24|1386->282|1422->302|1461->303|1497->312|1555->343|1570->349|1623->381|1653->384|1667->389|1691->392|1745->419|1759->424|1786->430|1836->453|1850->458|1879->466|1929->489|1943->494|1970->500|2029->532|2044->538|2100->573|2173->615|2205->620|2260->648|2275->654|2320->678
                  LINES: 28->1|33->2|34->3|44->13|44->13|44->13|45->14|46->15|46->15|46->15|46->15|46->15|46->15|47->16|47->16|47->16|48->17|48->17|48->17|49->18|49->18|49->18|50->19|50->19|50->19|52->21|53->22|54->23|54->23|54->23
                  -- GENERATED --
              */
          