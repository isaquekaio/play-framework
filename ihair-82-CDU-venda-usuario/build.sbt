name := """ihair"""
organization := "br.edu.ifrn.ihair"

version := "1.0-SNAPSHOT"


//lazy val root = (project in file(".")).enablePlugins(PlayJava)
// Para uso do Ebean: framesowkr ORM (Substituir linha anterior)
lazy val root = (project in file(".")).enablePlugins(PlayJava,PlayEbean)
playEbeanDebugLevel := 1


scalaVersion := "2.12.6"

libraryDependencies += javaJdbc
//libraryDependencies += guice

// Para acesso a bando de dados postgresql com 'ebean' e 'evolutions'
 libraryDependencies ++= Seq(
   guice,
   jdbc,
   evolutions,
   "org.postgresql" % "postgresql" % "42.2.4"
)
