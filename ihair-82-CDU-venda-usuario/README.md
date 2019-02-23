# iHair

O sistema visa auxiliar os usuários que compraram produtos para seus cabelos e que, por algum motivo, não utilizaram ou deixaram de utilizar e não os descartaram. Para isso, o sistema poderá evitar o desperdício desses produtos capilares, que muitas vezes são jogados no lixo ou perdem a validade por passarem muito tempo guardados, e proporcionar um retorno financeiro que visto que houve um investimento na compra dos produtos. A solução é gerar a circulação desses produtos, por meio da venda ou troca desses produtos, novos ou seminovos, entre os usuários. Além disso, pensando em tornar a experiência do usuário mais completa, o sistema irá oferecer uma sessão na qual o usuário poderá identificar qual é o seu tipo de cabelo e, assim, escolher quais são os produtos mais adequados para o seu cabelo e buscá-los no site.


## Início

Estas instruções permitem que você obtenha uma cópia do projeto e configura
em seu computador para desenvolvimento e testes.


### Pré-requisitos

Para baixar, compilar e executar em seu computador, você deve ter:

- Sistema de controle de versões `git` ([https://www.git-scm.com/])
- Kit de desenvolvimento JAVA `jdk-8` ([https://java.com/pt_BR/])
- Simple build tool `sbt` ([https://www.scala-sbt.org/])

### Instalação

##### Ubuntu Linux

**Importante**: É aconselhável fazer um _update_ do `apt-get`:
```sh
sudo apt-get update
```

- git

```sh
sudo apt-get install git
```

- jdk-8

```sh
sudo apt-get install openjdk-8-jdk
```

- sbt (Necessário: `git`, `jdk`, `gnupg2`, `apt-transport-https`)

```sh
sudo apt-get install gnupg2
sudo apt-get install apt-transport-https
echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
sudo apt-get update
sudo apt-get install sbt
```

### Baixar e executar

Para realizar um clone do projeto, execute:

```sh
git clone git@gitlab.devops.ifrn.edu.br:tads.cnat/pdsweb/2018.2/ihair/iHair.git
cd iHair
```

O clone do git cria um diretório chamado `iHair` se não for informado um
nome de diretório.


Para executar em modo de desenvolvimento, no diretório do projeto, digite

```sh
sbt run
```

## Documentação

Verifique o diretório [`doc`](./doc/) para a documentação do sistema

## Equipe de desenvolvimento

* **Angélica Albano** - *eco.angelica@gmail.com* - [https://github.com/AngelicaAlbano]
* **Esther Aragão** - *estheraragaos@gmail.com* - [https://github.com/estheraragaos]
* **Isaque Kaio** - *isaque.araujo@escolar.ifrn.edu.br* - [https://github.com/kaio7]
* **Hiury Oliveira** - *hiuryo1996@gmail.com* - [https://github.com/hiuryoliveira]
* **Luiz Antonio** - *luizvpc@gmail.com* - [https://github.com/freitasassis]

## Licença

Este projeto é licenciado ... . Veja [LICENSE.md](LICENSE.md) para maiores detalhes.
