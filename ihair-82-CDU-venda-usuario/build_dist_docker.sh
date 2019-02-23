#/bin/bash

# build_dist_docker.sh
#
# Script de compilação da aplicação e construção da 'dist' para ser usada
# em modo de produção e criação de uma imagem docker com a 'dist'.
#
# Este script gera uma imagem 'docker' da aplicação (www.docker.com)
#
# Necessário 'docker' (https://docs.docker.com/install/)
# Necessário 'sbt' (https://www.scala-sbt.org)
#
# Autor : Jorgiano Vidal
# Data  : 25/08/2018
#

sbt clean compile dist && \
if [ -d svc ]; then rm -rf svc/; fi && \
mkdir svc && unzip -d svc target/universal/*SNAP*.zip && \
docker build -t ihair .

# Limpar o diretório com aplicativo descompactado
rm -rf svc/
