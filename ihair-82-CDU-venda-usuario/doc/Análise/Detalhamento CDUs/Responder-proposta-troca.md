#### Caso de Uso: Responder Proposta de Troca
---
**Ator principal:** Cliente que publicou o anúncio de troca.

**Interessados e Interesses:**
- Cliente anunciante: deseja trocar produto anunciado. Necessita que o cliente interessado no anúncio faça uma proposta de troca com um produto de seu interesse.  
- Cliente que realizou proposta de troca: deseja obter resposta positiva do anunciante, pois quere trocar seu produto pelo produto do anúncio.  

**Pré-Condições:** Ter cadastro completo, estar logado no sistema e possuir um anúncio de troca  publicado.

**Cenário de Sucesso Principal (ou Fluxo Básico):**
1. Sistema exibe tela de caixa de mensagens com propostas de troca recebidas pelo cliente anunciante, listadas por ordem de chegada.
2. Cliente filtra mensagens com propostas de troca por anúncio específico.
3. Sistema exibe todas as propostas referentes ao anúncio filtrado por ordem de chegada, com uma imagem e o título do produto que o cliente proponente propôs para a troca.
4. Cliente escolhe e seleciona uma proposta.
5. Sistema retorna tela de detalhamento do produto oferecido pelo cliente proponente para a troca.
6. Cliente clica no botão de "Negociar Troca".
7. Sistema exibe mensagem de confirmação para que o cliente anunciante prossiga com a negociação.
8. Cliente anunciante confirma que deseja realizar a negociação.
9. Sistema exibe tela de conversa para troca de mensagens entre os clientes.
10. Clientes negociam troca por meio de mensagens.

**Fluxos Alternativos ou Excepcionais:**

**1a. Não há propostas de troca.**
1. Sistema exibe mensagem "Por enquanto não há propostas de troca. Volte mais tarde!".
2. O CDU é encerrado.

***a. A qualquer momento o cliente desiste da troca**
 1. Cliente clica no botão "Cancelar Negociação".
 2. Sistema exibe mensagem para que o cliente confirme sua escolha.
 3. Cliente confirma e cancela a negociação de troca.
 4. Sistema retorna para tela de propostas inicial e notifica o usuário interessado que a proposta foi recusada na sua caixa de mensagens.
 5. O CDU é encerrado.
