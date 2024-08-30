# Projeto Nodemailer Gmail TS

Este projeto é um exemplo de aplicação Node.js utilizando TypeScript para o envio de e-mails via Gmail com o Nodemailer. Ele demonstra como configurar um serviço simples de envio de e-mails usando o Gmail como provedor de SMTP, permitindo que mensagens sejam enviadas para endereços de e-mail específicos a partir de uma API RESTful.

## Funcionalidades

- **Envio de E-mails:** Permite o envio de e-mails personalizados a partir de uma conta Gmail usando OAuth2 para autenticação segura.

## Tecnologias Utilizadas

- **Node.js (v20.16.0):** Ambiente de execução para JavaScript no servidor.
- **TypeScript (v5.5.4):** Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Express:** Framework web minimalista para Node.js, utilizado para criar a API.
- **Nodemailer:** Módulo para envio de e-mails via Node.js.
- **Dotenv:** Utilizado para gerenciar variáveis de ambiente de forma segura.
- **Nodemon:** Ferramenta que reinicia automaticamente o servidor quando alterações são detectadas nos arquivos do projeto.
- **Google APIs:** Biblioteca usada para gerenciar a autenticação OAuth2 e obter tokens de acesso para envio seguro de e-mails.

## Usabilidade

Este projeto pode ser usado como um ponto de partida para criar serviços de envio de e-mails em outras aplicações, como:

- **Aplicações Web:** Integração com formulários de contato para enviar mensagens diretamente a partir de uma página web.
- **Notificações Automáticas:** Configuração de alertas automáticos que disparam e-mails em resposta a eventos específicos em uma aplicação.
- **Marketing e Comunicação:** Envio de campanhas de e-mail ou boletins informativos a uma lista de destinatários.

## Como Executar

Siga os passos abaixo para clonar o repositório, configurar o ambiente e executar a aplicação:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Navegue até o diretório do projeto
cd nome-do-repositorio

# Instale as dependências
npm install

# Crie e configure as variáveis de ambiente com as 5 entradas
echo "CLIENT_ID=seu_client_id" > .env
echo "CLIENT_SECRET=seu_client_secret" >> .env
echo "REFRESH_TOKEN=seu_refresh_token" >> .env
echo "ACCESS_TOKEN=seu_access_token" >> .env
echo "USER_EMAIL=seu.email@gmail.com" >> .env

# Inicie a aplicação com Nodemon
npx nodemon src/index.ts
