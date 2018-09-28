# Padrão REST

## Pra que serve ?
*Representational State Transfer* ou apenas **REST** é um dos modelos de arquitetura que foi descrito por **Roy Fielding**, um dos principais criadores do protocolo **HTTP**, em sua tese de doutorado e que foi adotado como o modelo a ser utilizado na evolução da arquitetura do protocolo HTTP.

Muitos desenvolvedores perceberam que também poderiam utilizar o modelo REST para a implementação de **Web Services**, com o objetivo de se integrar aplicações pela Web, e passaram a utilizá-lo como uma alternativa ao SOAP.

## Como útilizar ?

Básicamente o padrão REST faz uso dos quatros verbos disponíveis no protolo HTTP, são eles:

| VERBOS | O que fazem |
|--|--|
| **GET** | Obter os dados de um recurso. |
| **POST** | Criar um novo recurso. |
| **PUT** | Substituir os dados de um determinado recurso. |
| **DELETE** | Excluir um determinado recurso. |
| **PATCH** | Atualizar parcialmente um determinado recurso. |
| **HEAD** | Similar ao GET, mas utilizado apenas para se obter os cabeçalhos de resposta, sem os dados em si. |
| **OPTIONS** | Obter quais manipulações podem ser realizadas em um determinado recurso. |

## URI - Identificador de Recurso Uniforme

**Ex.:**

    http://localhost:3000/clientes - lista de clientes
    http://localhost:3000/clientes/32 - cliente de ID 32
    http://localhost:3000/produtos - lista de produtos
    http://localhost:3000/produtos/25 - produto de ID 25

**Dicas**

- Utilize URI’s legíveis
- Utilize o mesmo padrão de URI na identificação dos recursos

      http://localhost:3000/clientes (Plural)  
      http://localhost:3000/produto  (Singular)
      http://localhost:3000/produto_estoque  (SnakeCase)
      http://localhost:3000/ClienteVip  (CamelCase)

- Evite adicionar na URI a operação a ser realizada no recurso

      http://localhost:3000/contato/list
      http://localhost:3000/pessoa/cadastrar
      http://localhost:3000/documento/10/canceler
      http://localhost:3000/produto/25/atualizar
      http://localhost:3000/cliente/17/excluir


|Método|URI|Utilização|
|--|--|--|
| GET | /clientes | Recuperar os dados de todos os clientes. |
| GET | /clientes/id | Recuperar os dados de um determinado cliente. |
| POST | /clientes | Criar um novo cliente. |
| PUT | /clientes/id | Atualizar os dados de um determinado cliente. |
| PATCH / PUT | /clientes/id | Cancelar um registro. |
| DELETE | /clientes/id | Excluir um determinado cliente. |


## Evite manter dados de autenticação/autorização em sessão

- [OAUTH](https://oauth.net/);
- [JWT](https://jwt.io/) (JSON Web Token);
- [passport](http://passportjs.org/) - Estrategias de autenticação simples 

Ex.: [JWT + PASSPORT](https://medium.com/front-end-hacking/learn-using-jwt-with-passport-authentication-9761539c4314) Ártigo medium

## Código de retorno da aplicação
|Código|Descrição|Quando utilizar|
|--|--|--|
|200|OK|Em requisições GET, PUT e DELETE executadas com sucesso.|
|201|Created|Em requisições POST, quando um novo recurso é criado com sucesso.|
|206|Partial Content|Em requisições GET que devolvem apenas uma parte do conteúdo de um recurso.|
|302|Found|Em requisições feitas à URI’s antigas, que foram alteradas.|
|400|Bad Request|	Em requisições cujas informações enviadas pelo cliente sejam invalidas.|
|401|Unauthorized|Em requisições que exigem autenticação, mas seus dados não foram fornecidos.|
|403|Forbidden|	Em requisições que o cliente não tem permissão de acesso ao recurso solicitado.|
|404|Not Found|	Em requisições cuja URI de um determinado recurso seja inválida.|
|405|Method Not Allowed|Em requisições cujo método HTTP indicado pelo cliente não seja suportado.|
|406|Not Acceptable|Em requisições cujo formato da representação do recurso requisitado pelo cliente não seja suportado.|
|415|Unsupported Media Type|Em requisições cujo formato da representação do recurso enviado pelo cliente não seja suportado.|
|420|Too Many Requests|No caso do serviço ter um limite de requisições que pode ser feita por um cliente, e ele já tiver sido atingido.|
|500|Internal Server Error|Em requisições onde um erro tenha ocorrido no servidor.|
|503|Service Unavailable|Em requisições feitas a um serviço que esta fora do ar, para manutenção ou sobrecarga.|

[Lista completa de codigos HTTP](https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP)

[*voltar*](../README.md)