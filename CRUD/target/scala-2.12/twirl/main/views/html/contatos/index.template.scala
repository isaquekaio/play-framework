
package views.html.contatos

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

object index extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template1[Set[Contato],play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(contatos: Set[Contato]):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*2.1*/("""
"""),format.raw/*3.1*/("""<html>
<body>
<h1>Todos os Contatos</h1>

"""),_display_(/*7.2*/for(conta <- contatos) yield /*7.24*/{_display_(Seq[Any](format.raw/*7.25*/("""
  """),format.raw/*8.3*/("""<a href="#">"""),_display_(/*8.16*/conta/*8.21*/.id),format.raw/*8.24*/("""</a>
  <p>Nome: """),_display_(/*9.13*/conta/*9.18*/.nome),format.raw/*9.23*/("""</p>
  <p>E-mail: """),_display_(/*10.15*/conta/*10.20*/.email),format.raw/*10.26*/("""</p>
  <p>Telefone: """),_display_(/*11.17*/conta/*11.22*/.telefone),format.raw/*11.31*/("""</p>
""")))}),format.raw/*12.2*/("""

"""),format.raw/*14.1*/("""</body>

</html>
"""))
      }
    }
  }

  def render(contatos:Set[Contato]): play.twirl.api.HtmlFormat.Appendable = apply(contatos)

  def f:((Set[Contato]) => play.twirl.api.HtmlFormat.Appendable) = (contatos) => apply(contatos)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Mon Sep 17 16:49:28 BRT 2018
                  SOURCE: /home/linux/Desenvolvedor/PlayFramework/sistemas-web/app/views/contatos/index.scala.html
                  HASH: de10ad213c9cabf7c32de2f00e265ac1b89ee84c
                  MATRIX: 963->1|1081->26|1108->27|1176->70|1213->92|1251->93|1280->96|1319->109|1332->114|1355->117|1398->134|1411->139|1436->144|1482->163|1496->168|1523->174|1571->195|1585->200|1615->209|1651->215|1680->217
                  LINES: 28->1|33->2|34->3|38->7|38->7|38->7|39->8|39->8|39->8|39->8|40->9|40->9|40->9|41->10|41->10|41->10|42->11|42->11|42->11|43->12|45->14
                  -- GENERATED --
              */
          