# API de Cotação do Dolar

Esta é uma API simples construída com NestJS que coleta dados de cotação do dólar do site do Banco Central do Brasil e também busca o histórico de cotações através da API.

## Endpoints

- `GET /`: Retorna uma mensagem de saudação.
- `GET /cotacao`: Retorna os dados de cotação do dólar coletados do site do Banco Central do Brasil.
- `GET /dolar`: Retorna os dados de cotação do dólar obtidos de uma API externa.

## Configuração

1. Clone o repositório: `git clone https://github.com/LyTT19/bcb-cotacao.git`
2. Navegue até o diretório do projeto: `cd bcb-cotacao`
3. Instale as dependências: `npm install`
4. Inicie o servidor: `npm start`

O servidor começará a rodar em `http://localhost:3000`.

## Contribuindo

Pull requests são bem-vindos. Para mudanças importantes, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
