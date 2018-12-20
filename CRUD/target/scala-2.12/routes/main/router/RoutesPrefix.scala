// @GENERATOR:play-routes-compiler
// @SOURCE:/home/linux/Desenvolvedor/Java-PlayFramework/CRUD/sistemas-web/conf/routes
// @DATE:Sat Nov 03 20:05:06 BRT 2018


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
