# 💰 API de Controle de Gastos

Uma API RESTful desenvolvida em **Node.js** para gerenciamento de finanças pessoais. O projeto foi estruturado utilizando **Arquitetura Modular**, separando as responsabilidades entre Rotas e Controladores para garantir um código limpo, escalável e de fácil manutenção.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework para criação de rotas e gerenciamento do servidor.
* **JavaScript (ES Modules)**: Modularização moderna utilizando `import` e `export`.
* **Thunder Client**: Ferramenta utilizada para testes e validação das requisições HTTP.

---

## 📂 Estrutura do Projeto

A organização segue o padrão de separação de interesses (SOC), facilitando a manutenção futura:

```text
api-gastos/
├── controllers/
│   └── UserController.js  # Lógica de negócio, validações e cálculos
├── routes/
│   └── userRoutes.js    # Definição dos endpoints e métodos HTTP
├── img/                 # Capturas de tela da aplicação em funcionamento
├── server.js            # Inicialização do servidor e configuração de middlewares
└── package.json         # Gerenciamento de dependências e scripts
```
---

1. ## Adicionar Gasto

Responsável por receber uma descrição e um valor, validando os dados e armazenando o novo registro.

    Rota: POST /gastos

    Status: 201 Created

2. ## Listar Todos os Gastos

Retorna a lista completa de todos os gastos cadastrados até o momento.

    Rota: GET /listar-gasto

    Status: 200 OK

3. ## Somatório Total

Calcula dinamicamente a soma de todos os valores presentes na lista.

    Rota: GET /gasto/total

    Status: 200 OK

---
