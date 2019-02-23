#### Descrição das Entidades do Modelo de Domínio
---

**Caso de Uso Base:** Realizar Proposta de Troca.


| **Entidade** | **Responsabilidades**| **Relações**|
| :------- | :----------------: | :--------: |
| **Usuário** | Realizar ações no sistema. | Usuário se cadastra. Usuário faz login. Usuário busca produto por tipo de cabelo. Usuário visualiza detalhes do anúncio. Usuário realiza a proposta de troca. | 
| **Registro de Troca** | É a entidade responsável por registrar uma proposta de troca. | Usuário (anunciante e proponente). Produto (do anunciante e proponente) | 
| **Anúncio** | Entidade responsável por gerenciar informações de um anúncio. | Tem um ou mais produtos. É de um usuário. Tem um chat atrelado a ele. Está no registro de troca. |
| **Produto** | Entidade chave da troca. | Pertence a 0 ou 1 anúncio. É de um usuário. | 
| **Chat** | Permitir que usuários vejam e troquem mensagens em relação à proposta de troca. | Usuário (troca de mensagens entre as 2 partes). Chat é de um anúncio. |
| **Quiz** | Permitir que o usuário identifique o seu tipo de cabelo. | Usuário realiza um quiz. | 
| **Registro de Venda** | Entidade responsável por registrar uma venda. | Envolve Usuário (anunciante e comprador). Envolve anúncio. Envolve pagamento. |
| **Pagamento** | É a entidade responsável por registrar um pagamento feito em função de um anúncio. | Um pagamento é feito em função de um anúncio. |
| **Sacola** | Entidade que permite ao usuário salvar produtos que estão à venda na sacola para realizar ou não a compra depois. | Usuário adiciona 0 ou * produtos à sacola. |
| **Favoritos** | Entidade permite aos usuários favoritar produtos em uma lista de favoritos. | Usuário adiciona 0 ou * produtos a uma lista de favoritos. |







