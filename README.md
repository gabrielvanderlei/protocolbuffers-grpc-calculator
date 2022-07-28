# protocolbuffers-grpc-calculator
Calculadora desenvolvida utilizando o Protocol Buffers (tecnologia desenvolvida pela Google para transferência de dados) e o gRCP.

## Início rápido com gRPC
Se quiser mais informações sobre gRPC pode consultar o seguinte link: https://www.grpc.io/docs/languages/node/quickstart/

## Exemplo de uso
### Cliente / Servidor
Instale as dependências e acesse a pasta contendo os scripts

```bash
npm i
cd src
```

Inicie o servidor

```bash
node server.js
```

Inicie o cliente

```bash
node client.js
```

## Comandos suportados
* '+' - Realiza a soma dos números na sequência. Exemplo: "+ 10 2"
* '-' - Realiza a subtração dos números na sequência. Exemplo: "- 10 2"
* '*' - Realiza a multiplicação dos números na sequência. Exemplo: "* 10 2"
* '/' - Realiza a di8visão dos números na sequência. Exemplo: "/ 10 2"

## Configurações
No arquivo configuration.js você pode modificar as seguintes variáveis:
* PORT - Porta do servidor gRPC