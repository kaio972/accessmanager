🖥️ Access Manager

Autor: Kaio Eduardo
Idade: 15 anos

-----------------------------------------------------------------------------------------------------------
📖 Descrição

Access Manager é um sistema full-stack de gerenciamento de usuários, desenvolvido com frontend em React + TypeScript e backend em Node.js + Express, com banco de dados MySQL real.

O projeto integra frontend, backend e banco em Docker, permitindo execução completa localmente e deploy fácil no Vercel.

Funcionalidades principais:

Cadastro de usuários com ID único

Código de segurança opcional para proteger informações sensíveis

Painel administrativo seguro, acessível somente com email admin@email.com e senha 123456

Deleção de usuários protegida por código admin 2010

Autenticação JWT integrada

Layout responsivo, baseado em design criado no Figma

Testes Postman prontos para endpoints

Deploy completo via Docker + Vercel

-----------------------------------------------------------------------------------------------------------
🔗 Design

O design foi criado no Figma, mantendo identidade visual limpa e moderna:

Tela de Login Admin

Tela de Cadastro de Usuário com opção de código de segurança

Tela de Painel Admin: visualização de usuários, dados sensíveis, deleção com código admin

Layout responsivo para desktop e mobile

-----------------------------------------------------------------------------------------------------------
🛠 Tecnologias utilizadas
Frontend

React + TypeScript: modular e tipado

CSS customizado: gradientes, responsivo e moderno

Axios: comunicação HTTP com backend

Vite: bundler rápido e eficiente

Backend

Node.js + Express: API REST

MySQL: banco de dados real

JWT: autenticação de usuários e admin

CORS: comunicação segura frontend/backend

Ferramentas e Deploy

Docker: containeriza frontend, backend e MySQL juntos

Vercel: hospedagem completa, deploy online

Postman: testes de endpoints prontos

-----------------------------------------------------------------------------------------------------------
🎯 Funcionalidades
Usuário

Cadastro com ID único

Código de segurança opcional, gerado aleatoriamente

Visualização de seus próprios dados (quando código ativado)

Administrador

Login seguro: email admin@email.com / senha 123456

Painel Admin: visualização completa de usuários

Visualização de ID e código de proteção de cada usuário

Deleção de usuários com botão Delete + código admin 2010

Backend

Endpoints REST claros: /auth/register, /auth/login, /users

Persistência de dados em MySQL

Autenticação JWT básica

-----------------------------------------------------------------------------------------------------------
🚀 Como Rodar o Projeto
🔹 Usando Docker (recomendado)

Abra o terminal na raiz do projeto

Rode:

docker compose up -d --build


Acesse no navegador:

Frontend: http://localhost:5173

Backend: http://localhost:3001

MySQL: porta configurada (3306 ou 3307)

Todos os serviços rodam juntos em containers isolados, prontos para deploy no Vercel.

🔹 Manualmente (opcional)

Backend

cd backend
npm install
npm run dev


API rodando em http://localhost:3001.

Frontend

cd frontend
npm install
npm run dev


Aplicação rodando em http://localhost:5173.

-----------------------------------------------------------------------------------------------------------
🔗 Testes

Postman já configurado com endpoints:

/auth/register → criar usuário

/auth/login → autenticação

/users → lista de usuários (admin)

Testes incluem verificação de código de segurança, login admin, deleção com código 2010

💡 Observações Técnicas

Senhas ainda não criptografadas → implementar bcrypt para produção

JWT usado para autenticação básica

Sistema modular, fácil de expandir

Projeto pronto para deploy completo com Docker + Vercel