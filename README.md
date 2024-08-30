# Projeto Nodemailer Gmail TS

Este projeto é um exemplo de aplicação Node.js utilizando TypeScript para o envio de e-mails via Gmail com o Nodemailer. Ele demonstra como configurar um serviço simples de envio de e-mails usando o Gmail como provedor de SMTP, permitindo que mensagens sejam enviadas para endereços de e-mail específicos a partir de uma API RESTful.

## Funcionalidades

- **Envio de E-mails:** Permite o envio de e-mails personalizados a partir de uma conta Gmail.
- **API RESTful:** Fornece um endpoint que pode ser acessado por clientes HTTP para enviar e-mails.
- **Configuração Simples:** Utiliza o Nodemailer, uma biblioteca popular e bem documentada para envio de e-mails.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Express:** Framework web minimalista para Node.js, utilizado para criar a API.
- **Nodemailer:** Módulo para envio de e-mails via Node.js.
- **Dotenv:** Utilizado para gerenciar variáveis de ambiente de forma segura.
- **Nodemon:** Ferramenta que reinicia automaticamente o servidor quando alterações são detectadas nos arquivos do projeto.

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

# Crie e configure as variáveis de ambiente
echo "GMAIL_USER=seu.email@gmail.com" > .env
echo "GMAIL_PASS=sua_senha_de_aplicativo" >> .env

# Inicie a aplicação com Nodemon
npx nodemon src/index.ts
