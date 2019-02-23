#### Caso de Uso: Realizar Proposta de Troca
---
**Ator principal:** Cliente que realizou proposta de troca.

**Interessados e Interesses:**
- Cliente que realizou proposta: deseja registrar interesse no produto anunciado para troca e, necessita ter uma resposta, positiva, do anunciante,
pois está interessado no produto.

**Pré-Condições:** Cliente cadastrado e logado no sistema. Haver algum produto cadastrado para troca ou cadastrar.

**Cenário de Sucesso Principal (ou Fluxo Básico):**

0. Sistema exibe tela de detalhamento do produto e o cliente clica no botão "Quero Trocar".
1. Cliente solicita um registro de proposta de troca pelo produto anunciado.
2. Sistema retorna uma lista de produtos cadastrados do cliente.
3. Cliente seleciona um produto na sua lista de produtos cadastrados e confirma qual é o produto que deseja trocar pelo produto do anunciante.
4. O sistema envia a notificação de proposta de troca ao anunciante e apresenta uma mensagem de sucesso em relação à submissão da proposta
de troca para o cliente proponente.

**Fluxos Alternativos ou Excepcionais:**


**2a. Cliente não tem produtos cadastrados.**
1. Sistema exibe a opção de cadastrar um produto.
2. Cliente registra todas as informações para cadastrar um ou mais produtos, executando o CDU0X - Cadastrar Produto.

 
**1-3a. Cliente desiste da troca**
 1. Cliente clica na opção de cancelar, ao lado da opção de enviar proposta de troca.
 2. Sistema retorna uma mensagem de sucesso em relação ao cancelamento.
