# Programa de estágio - 2020-1

Teste backend aplicado como resposta ao desafio para ingresso no programa de estágio da AIKO DIGITAL.

## Tecnologias

A solução foi implementada com as seguintes tecnologias:
- NodeJs
- Typescript (linguagem)
- ExpressJs (framework)
- PostgreSql (banco de dados)
- KnexJs (query builder)
- Yup (validação de esquema)
- Docker (ferramenta de container)
- EsLint e Prettier (ferramenta de linter e codestyle)
- DDD (arquitetura)

## Link do vídeo
[Assista no YouTube](https://youtu.be/g6rH8YjknnM)

## Outras features

### Segurança
Foi utilizado o HelmetJs para garantir a segurança nos cabeçalhos das requisições.

### Documentação
A documentação foi desenvolvida com a ferramenta [Insomnia-Documenter](https://www.npmjs.com/package/insomnia-documenter) e o software [Insomnia](https://insomnia.rest/).<br />

A documentação pode ser encontrada [nesse site.](https://api-transporte-publico.vercel.app/#req_6f8d7f2b01494b4c9763d7ce9f74ca16)

## Como executar
> Você precisa ter o docker, o yarn e o docker-compose instalado em sua máquina.

Na pasta principal do projeto, instale as dependências:
```bash
yarn
```
Inicie os containers:
```bash
docker-compose up
```
Inicie todas as migrations:
```bash
yarn knex migrate:latest
```
