# Documento de visão
# ``iHair``
## 1. Introdução
### 1.1 Resumo

O consumo de produtos capilares faz parte do dia-a-dia de homens e mulheres de todas as idades. Muitas vezes pode ser difícil para o usuário escolher um produto que seja bom para o seu cabelo e ele desiste de usar o produto. Algumas pessoas podem descartar o produto de forma incorreta, que prejudica o meio ambiente ou apenas deixar o produto guardado sem uso. Pensando em uma solução para que haja o uso sustentável desses produtos, surgiu o iHair. O sistema visa auxiliar os usuários que compraram produtos para os seus cabelos e que, por algum motivo, não os utilizaram ou deixaram de utilizar e não os descartaram. Dessa forma, o sistema poderá evitar o desperdício desses produtos capilares em desuso e gerar um retorno financeiro aos usuários. O sistema oferece uma plataforma para que os usuários vendam ou troquem produtos novos ou seminovos entre eles. Além disso, pensando em tornar a experiência do usuário mais completa, o sistema irá oferecer uma sessão em que o usuário poderá identificar qual é o seu tipo de cabelo e, assim, escolher quais são os produtos mais adequados para o seu cabelo e buscá-los no site.

### 1.2 Escopo

<h5><u>Responsabilidades:</u></h5>

- Permitir que os usuários se cadastrem no sistema e acessem sua conta;
- Permitir que os usuários realizem compras/vendas de produtos novos/seminovos;
- Permitir que os usuários realizem trocas de produtos novos/seminovos;
- O sistema deverá permitir a postagem das fotos do produto e a sua condição atual;
- O sistema deverá permitir que os usuários façam consulta de produtos seguindo filtros de busca (por localização, preço, frete gratuito, marca, condição do produto em relação ao estado de uso e categoria, para troca ou venda).


<h5><u>Não-Responsabilidades:</u></h5>

- Qualidade e estado dos produtos;
- O sistema não se responsabiliza pelos comentários adicionados aos produtos pelos usuários;
- O sistema não se responsabiliza em detectar todos os tipos de cabelo através do “Conheça Seu Cabelo”;
- O sistema não se responsabiliza pelo frete envolvido em trocas e vendas dos produtos.


## 2. Requisitos

### 2.1 Requisitos Funcionais

| Cód. | Nome | Descrição | Categoria |
| -------- | -------- | -------- | -------- |
| RF01 | Gerenciar Usuários | Possibilitar o cadastro de usuários e o acesso dos mesmos ao sistema. | Evidente |
| RF02 | Gerenciar Venda e Troca de Produtos | Possibilitar a venda e troca de produtos entre os usuários. | Evidente |
| RF03 | Buscar Produtos | Possibilitar a busca de produtos anunciados por diferentes filtros. | Evidente |
| RF04 | Calcular Frete | Possibilitar o cálculo do frete dos produtos pelos usuários. | Evidente |
| RF05 | Gerenciar Produtos | Possibilitar o cadastro de produtos em uma lista, podendo gerenciá-los. | Evidente |
| RF06 | Realizar Upload de Fotos | Possibilitar que os usuários carreguem imagens de seus produtos ao realizar o cadastro dos mesmos. | Oculto |
| RF07 | Gerenciar Mensagens de Troca | Possibilitar a troca de mensagens entre os usuários envolvidos na troca de um produto. | Evidente |
| RF08 | Notificar Mensagens de Troca e de Resposta a Comentários nos Produtos | Notificar clientes anunciantes sobre novas propostas de trocas, notificar aos clientes proponentes as respostas das propostas de troca realizadas por eles e notificar quando seus comentários forem respondidos pelos anunciantes. | Oculto |
| RF09 | Gerenciar Produtos Favoritos | Possibilitar que os clientes registrem produtos favoritos em uma lista de produtos favoritos e possa acessá-la. | Evidente |
| RF10 | Identificar Tipo de Cabelo | Possibilitar que o usuário identifique qual é o seu tipo de cabelo a partir de um questionário. | Evidente |
| RF11 | Gerenciar Produtos na Sacola | Possibilitar que usuários armazenem produtos disponíveis para venda na sacola. | Evidente |
| RF12 | Gerenciar Comentários na Página do Produto | Possibilitar que os clientes cadastrem comentários ou perguntas na página de detalhamento de um produto. | Evidente |
| RF13 | Realizar Pagamento | Possibilitar que os clientes realizem o pagamento de produtos anunciados. | Evidente |
| RF14 | Tratar Pagamento | Possibilitar que os clientes realizem o pagamento de produtos por diferentes formas de pagamento. | Oculto |


### 2.2 Requisitos não funcionais

| Cód. | Nome | Descrição | Categoria |
| -------- | -------- | -------- | -------- |
| NF01 | Play Framework | Tecnologia solicitada para desenvolver o sistema do PDS. | Obrigatório |
| NF02 | Banco de Dados | Usar um banco de dados relacional como: SQL Server, **MySQL**, Postgres.  | Obrigatório |
| NF03 | SendGrid   | Integração com ambiente de envio de e-mails.  | Desejável |
| NF04 | Amazon S3 | Integração com ambiente de storage Amazon S3.  | Desejável |
| NF05 | Travis CI | Habilitar testes automatizados com Travis CI.  | Desejável |
| NF06 | Deploy     | Deploy contínuo da aplicação usando ferramentas de automatização.  | Desejável |
| NF07 | OneSignal | Integração com OneSignal para push notifications. | Desejável |
| NF08 | Responsividade | Sistema responsivo para permitir acesso rápido de usuários para consultar produtos fora de casa. | Desejável |
| NF09 | Facilidade de Recuperação | Manter o produto de uma transação de compra na sacola caso o cliente não a finalize, podendo finalizá-la em outro momento. | Desejável |



### 2.3 Tabela de Referência - Requisitos

| Cód. | NF01 | NF02 | NF03 | NF04 | NF05 | NF06 | NF07 | NF08 | NF09 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| RF01 |   X  |   X  |	 X  |   X  |  X   |  X   |   X  |   X  |      |
| RF02 |   X  |   X  |   X  |   X  |  X   |  X   |   X  |   X  |  X   |
| RF03 |   X  |   X  |      |      |  X   |  X   |      |   X  |      |
| RF04 |   X  |   X  |      |      |  X   |  X   |      |   X  |      |
| RF05 |   X  |   X  |   X  |      |  X   |  X   |      |   X  |      |
| RF06 |   X  |   X  |      |   X  |  x   |  X   |      |   X  |      |
| RF07 |   X  |   X  |   X  |      |  X   |  X   |      |   X  |      |
| RF08 |   X  |   X  |   X  |      |  X   |  X   |   X  |   X  |      |
| RF09 |   X  |      |   X  |      |      |      |   X  |   X  |      |
| RF10 |   X  |      |      |      |      |      |      |   X  |      |
| RF11 |   X  |      |   X  |      |      |      |      |   X  |  X   |
| RF12 |   X  |   X  |      |      |      |      |      |   X  |      |
| RF13 |   X  |   X  |   X  |      |      |      |      |      |  X   |
| RF14 |   X  |   X  |   X  |      |      |      |      |   X  |      |

### 2.4 Diagrama Geral de Casos de Uso

![Diagrama de Caso de Uso Geral](doc/Análise/Diagramas/Diagramas de Casos de Uso/Geral/Diagrama-Geral-CDUs.png)

### 2.5. Casos de Uso

| Cód. | Caso de Uso | Descrição | Classificação |
| -------- | -------- | -------- | -------- |
| UC01 | Realizar Login do Usuário | Para acessar as funcionalidades que exigem autenticação, o usuário possui três opções: quando já for cadastrado no sistema, ele preencherá os campos de e-mail e senha para efetuar o login. Caso já cadastrado e tiver esquecido a senha optará pela opção "esqueci minha senha" e poderá definir uma nova senha mediante o link que será enviado para o seu e-mail, este informado no cadastro. Se ele não estiver cadastrado optará por cadastrar-se, preenchendo um formulário com nome completo, e-mail e senha. Mais uma possibilidade de login será por meio de redes sociais como Facebook e via conta Google. | Primário |
| UC02 | Manter Cadastro de Usuários | O sistema permitirá o cadastro de usuários e o registro dos mesmos, armazenando as informações de cada usuário para futuro login. Os usuários serão diferenciados pelo e-mail cadastrado. O usuário não cadastrado, visando acessar a plataforma juntamente com as demais funcionalidades que exigem autenticação, poderá acessar a página inicial e clicar em login, onde terá a opção "Cadastre-se", na qual ele informará seu nome, e-mail e uma senha. | Primário |
| UC03 | Gerenciar Produtos | O usuário autenticado acessa a aba "Meus anúncios" e clica na opção "Cadastrar produto". Ao escolher esta opção, o usuário precisará realizar um cadastro, caso não o tenha feito ainda, adicional informando CPF, telefone e endereço. Feito o cadastro, o usuário iniciará o cadastro do produto informando os seguintes dados: nome (título do anúncio), descrição do produto, marca, o estado de uso do produto (novo ou seminovo, se seminovo informar a quantidade de produto contida na embalagem), preço e por fim adicionar boas fotos do produto (até 5). O usuário deve poder visualizar uma lista com todos os produtos cadastrados e editar suas informações antes de anunciá-los. | Primário |
| UC04 | Buscar Produtos | O usuário, cadastrado ou não, pode realizar a busca de produtos no site, por meio de diferentes formas, como nome, preço, valor do frete, entre outros. | Primário |
| UC05 | Buscar Produtos por Tipo de Cabelo | O usuário pode realizar a busca de produtos por tipo de cabelo, não necessitando de autenticação para isso. |    Primário |
| UC06 | Buscar Produtos por Nome |    O usuário pode realizar a busca de produtos pelo nome, não necessitando de autenticação para isso. | Primário |
| UC07 | Buscar Produtos por Categoria | O usuário pode realizar a busca de produtos por categoria, como shampoo, condicionador, entre outras. Não necessitando de autenticação para isso. | Primário |
| UC08 | Buscar Produtos por Preço | O usuário pode realizar a busca de produtos por preço, filtrando-os por uma faixa de preço desejada. Não necessitando de autenticação para isso. | Primário |
| UC09 | Buscar Produtos por Custo do Frete | O usuário pode realizar a busca de produtos pelo custo do frete, sendo este grátis ou por alguma faixa de valor. Não necessitando de autenticação para isso. | Primário |
| UC10 | Buscar Produtos por Localidade | O usuário pode realizar a busca de produtos pela região em que mora ou deseja realizar a venda/troca de produtos, não necessitando de autenticação para isso. | Primário |
| UC11 | Buscar Produtos por Troca ou Venda | O usuário pode realizar a busca de produtos pela sua disponibilidade para troca ou venda ou troca e venda. Não necessitando de autenticação para isso. | Primário |
| UC12 | Buscar Produtos por Estado de Uso | O usuário pode realizar a busca de produtos pelo seu estado de uso, novo ou seminovo ou marcas as duas opções. Não necessitando de autenticação para isso. | Primário |
| UC13 | Exibir Detalhes do Produto | Ao navegar pelo site e achar um produto de interesse, o usuário poderá ver mais detalhes sobre o produto ao clicar sobre ele. Na tela de detalhamento do produto estarão todas as informações que o usuário informou ao cadastro um produto no UC03. | Primário |
| UC14 | Gerenciar Produtos na Lista de Favoritos (CRUD)| O usuário, devidamente autenticado, pode adicionar produtos a uma lista de favoritos. Ele fará isso ao clicar no ícone de coração ou no texto "Adicionar aos favoritos" localizado na página de detalhamento de produto embaixo da descrição. A lista ficará disponível na conta do usuário dentro da plataforma. Através dela o usuário poderá receber alertas de promoções sobre esses produtos que o interessam. O usuário deverá poder acessar todas as operações de um CRUD nessa lista. | Primário |
| UC15 | Gerenciar produtos em Sacola de Compras (CRUD) | O usuário colocará produtos de seu interesse na “Sacola”, para comprá-los ou não em um outro momento, logo que termine sua pesquisa ou no futuro (os produtos estarão na “sacola” para que o usuário os encontre mais facilmente). | Primário |
| UC16 | Realizar Proposta de Troca | O usuário autenticado no sistema navega pelos produtos e encontra um de seu interesse, ao visualizar o produto disponível para troca, na tela de detalhamento do produto, ele clica no botão "Quero Trocar", o sistema exibe uma lista dos seus produtos cadastrados para que ele escolha um para ser trocado, depois de escolher o produto ele clica no botão "Enviar Proposta" e a proposta de troca é enviada ao anunciante. | Primário |
| UC17 | Exibir Proposta de Troca | O anunciante, autenticado no sistema, acessa sua caixa de mensagens no menu principal do site e vê as propostas que recebeu em seus produtos. Ele escolhe um produto e vê uma lista de propostas para aquele produto. | Primário |
| UC18 | Responder Proposta de Troca | Após exibir a proposta de troca como descrito pelo UC16, o usuário anunciante clicar em uma proposta de troca, o sistema exibe uma tela de conversa e ele envia uma resposta para o usuário interessado e os dois combinam a troca por meio da troca de mensagens, independente do sistema. | Primário |
| UC19 | Gerenciar Anúncios | O usuário, autenticado no sistema, acessará sua lista de produtos cadastrados e escolherá um produto para criar um anúncio. Nele, o usuário precisará informar se o produto estará disponível para troca ou venda, ou os dois e informar as formas de pagamento aceitas. O usuário poderá editar seus anúncios antes de publicá-los, e demais operações CRUD. | Primário |
| UC20 | Publicar Anúncio | O usuário, autenticado no sistema, acessará a aba "Meus Anúncios" no menu principal, clicará na opção "Fazer anúncio". Se já houver algum anúncio cadastrado, o usuário visualizará as informações do anúncio, confirmará e clicará no botão "Publicar Anúncio". Caso contrário, o usuário poderá cadastrar um novo anúncio como descrito pelo UC17. | Primário |
| UC21 | Calcular Frete do Produto | O usuário pode verificar o preço do frete sem a necessidade de estar logado no sistema. | Primário |
| UC22 | Gerenciar Comentários em Anúncio (CRUD) | O sistema deve permitir que usuários autenticados façam comentários na página de detalhamento de um produto com a finalidade de tirar dúvidas sobre o produto com o anunciante. Os usuários verão as respostas dos seus comentários na própria página do produto, embaixo do seu comentário. | Primário |
| UC23 | Identificar Tipo de Cabelo | O usuário, não necessitando de autenticação, acessa o site e clica na aba do menu principal "Conheça Seu Cabelo". Nesta página ele encontrará uma série de perguntas com imagens para identificar seu tipo de cabelo. O teste ocorrerá da seguinte forma: o usuário é submetido a um teste com auxílio de imagens, nele informará seu tipo de cabelo (liso, ondulado, cacheado, crespo ou em transição), condição da raiz, extensão do fio e pontas (detalhes como oleosidade, ressecamento, definição, se o cabelo se encontra natural, descolorido ou com coloração). Através dessas informações será indicado produtos adequados para o seu cabelo e/ou componentes que é interessante que ele busque nos produtos que for utilizar: como Óleo de Argan, Óleo de coco, Babosa, Alecrim. Após finalizado o teste o usuário poderá salvar esse resultado ao fazer autenticação, podendo alterá-lo no futuro conforme as mudanças de seu cabelo. | Primário |
| UC24 | Realizar Pagamento | O usuário poderá pagar por um produto adquirido em uma venda por diferentes formas de pagamento. | Primário |
| UC25 | Realizar Pagamento com Cartão de Crédito | O usuário poderá pagar por um produto por meio de cartão de crédito. | Primário |
| UC26 | Realizar Pagamento com Cartão de Débito | O usuário poderá pagar por um produto por meio de cartão de débito. | Primário |
| UC27 | Notificar Proposta de Troca | O sistema deve notificar o usuário anunciante a cada nova proposta de troca recebida em um anúncio publicado pelo mesmo. A notificação aparecerá no ícone de mensagem no menu principal, representada por um número, indicando a quantidade de mensagens não lidas na caixa de mensagens. | Secundário |
| UC28 | Notificar Comentário em Anúncio | O sistema deve notificar o usuário anunciante a cada novo comentário feito em um anúncio publicado pelo mesmo. A notificação irá aparecer representada por um número ao lado do nome "Meus Anúncios" na aba "Anúncios" do menu principal. | Secundário |

### 2.6. Tabela de Referência - Casos de uso & Requisitos

|        |NF01-08|NF02|RF01|RF02|RF03|RF04|RF05|RF06|RF07|RF08|RF09|RF10|RF11|RF12|RF13,14|NF03|NF04|NF07|NF09|
| ------ |-------|----|----|----|----|----|----|----|----|----|----|----|----|----|-------|----|----|----|----|
|  UC01  | X     | X  |  X |    |    |    |    |    |    |    |    |    |    |    |       | X  |    |    |    |
|  UC02  | X     | X  |  X |    |    |    |    |    |    |    |    |    |    |    |       |    |    |    |    |
|  UC03  | X     | X  |    |    |    |    | X  |  X |    |    |    |    |    |    |       |    | X  |    |    |
|UC04-12 | X     | X  |    |    |    |    |    |    |    |    |    |    |    |    |       |    |    |    |    |
|  UC13  | X     | X  |    |    |    |    | X  |    |    |    |    |    |    |    |       |    | X  |    |    |
|  UC14  | X     | X  |    |    |    |    |    |    |    |    |  X |    |    |    |       |    |    |    |    |
|  UC15  | X     | X  |    |    |    |    |    |    |    |    |    |    |  X |    |       |    |    |    |  X |
|UC16-18 | X     | X  |  X |    |    |    |    |    |  X |  X |    |    |    |    |       |  X |    |  X |    |
|  UC19  | X     | X  |    |  X |    |    |    |    |    |    |    |    |    |    |       |    |    |    |    |
|  UC20  | X     |    |    |    |    |    |    |    |    |    |    |    |    |    |       |    | X  |    |    |
|  UC21  | X     |    |    |    |    | X  |    |    |    |    |    |    |    |    |       |    |    |    |    |
|  UC22  | X     | X  |    |    |    |    |    |    |    |  X |    |    |    |  X |       |    |    |    |    |
|  UC23  | X     |    |    |    |    |    |    |    |    |    |    |  X |    |    |       |    |    |    |    |
|UC24-26 | X     | X  |    |    |    |    |    |    |    |    |    |    |    |    |     X |    |    |    |    |
|UC27,28 | X     |    |    |    |    |    |    |    |    |  X |    |    |    |    |       |  X |    |  X |    |




### 2.7. Atores

| Ator | Descrição |
| -------- | -------- |
| Público-Geral | São os usuários que não possuem cadastro no sistema, mas que têm acesso a algumas funcionalidades como busca de produtos e identificar tipo de cabelo. |
| Usuário | É o usuário que possui cadastro no sistema e tem acesso a todas as funcionalidades básicas do mesmo. Diferente do público geral, estes têm acesso a publicação de anúncios e realização de trocas e vendas, lista de favoritos, sacola, troca de mensagens, entre outros. |
| Usuário Premium | É o usuário quem além de ter acesso à todas as funcionalidades básicas que um usuário comum tem, tem acesso também a um conjunto de funcionalidades e permissões especiais para o módulo de venda como poder vender mais de três produtos por mês, impulsionar anúncio, entre outras. |

## 3. Clientes

Texto explicando quem é o cliente
