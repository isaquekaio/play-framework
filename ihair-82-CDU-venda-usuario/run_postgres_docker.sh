#!/bin/bash
#
# Script para executar uma instância do postgreSQL em um container docker
#
# Modifique os seguintes parâmetros de acordo com suas necessidades:
# - POSTGRES_DB='NOME_DO_BANCO_DE_DADOS'
# - POSTGRES_USER='NOME_DO_USUARIO'
# - POSTGRES_PASSWORD='SENHA_DE_ACESSO_AO_BANCO'
#
# O parâmetro -h deve ser fornecido para indicar o nome do 'hostname'
# do container (ver documentação docker).
# Configure o arquivo '/etc/hosts' adicionando o nome usado pelo parâmetro -h
# Exemplo(Bando de dados com host de nome 'db'):
#    127.0.0.1    	db
#
# Autor : Jorgiano Vidal
# Data  : 05/11/2018
#

docker run -ti --rm -p 5432:5432 \
-e POSTGRES_DB='ihairdb' \
-e POSTGRES_USER='ihairpguser' \
-e POSTGRES_PASSWORD='ihairpgpasswd' \
-e TZ='America/Recife' \
postgres:10-alpine
