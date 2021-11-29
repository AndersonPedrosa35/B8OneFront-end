# Bem vindo ao repositório B8OneFront-end
## O que foi desenvolvido ?
  O objetivo era criar uma página de produtos, com foco no css, mas houve também a criação da página de criar produtos, para poder popular o banco de dados e renderizar os produtos, as duas rotas são :
  ``` https://b8-one-front-end.vercel.app/ ```
  ``` https://b8-one-front-end.vercel.app/create ```

## Ferramentas 
  - Utilização da nova atualização do React(17)
  - Utilização da nova atualização do React Router Dom(6)
  - Utilização do Axios para fazer as requisições
  - Utilização do React Testing Library para testes
  - Utilização do Context Api e Hooks do React
  - Utilização do Figma para seguir o layout

## Iniciar o projeto
  Entre no terminal, e vá até o diretório que vc quer que esteja este projeto, digite git clone e a url desse repositório (https://github.com/AndersonPedrosa35/B8OneFront-end), assim que carregar, entre no diretório do projeto e digite ```npm install``` para baixar e carregar as dependências do projeto.
  
Entre no diretório do projeto, e digite ```yarn start``` ou ```npm start```
Então o projeto será carregado na porta 3000 da sua rede local(localhost);
  
 ###AVISO
 Para iniciar o projeto corretamente, precisará clonar também o repositório de Backend que se encontra em (https://github.com/AndersonPedrosa35/B8OneBack-end).

 Crie um arquivo ```.env``` para configurar as variáveis de ambiente do projeto do BackEnd, tenha como base o .env.example para criação das variáveis, assim que criado, basta colocar os seus dados, exemplo ```DB_URL``` coloque a sua rede local (localhost), ```DB_NAME``` coloque o nome do banco que ficará no MongoDB que vai ser armazenado as mensagens, e ```PORT``` será a porta que será executada a aplicação.
 
 Entre no diretório do projeto de Backend, e digite ```yarn start``` ou ```npm start```
 Então o projeto de Backend será carregado na porta que você especificou no .env da sua rede local(localhost);

## Deploy
https://b8-one-front-end.vercel.app/
