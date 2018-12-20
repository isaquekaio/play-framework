name := """sistemas-web"""
organization := "br.edu.ifrn"

version := "1.0-SNAPSHOT"



lazy val myProject = (project in file("."))
  .enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.12.6"

libraryDependencies += guice
