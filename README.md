#Aplicação CE
* Desenvolvimento de uma aplicação para simular os saques em caixas eletrônicos cadastroando usuarios, caixas e realizando saques e debitando das contas e dos valores de notas dos caixas.
* Foi desenvolvido uma Single Page Aplication de exemplo, utilizando AngularJS, Gulp, Bower Bootstrap, Spring, Resfull do Spring para desenvolver as APIs.Foi tambem utilizado JUnit com Mochito para realizar os testes unitários da funcionalidade de saque.

#Iniciando o projeto ce-crud e ce-core

*Instalar o maven , java 8 e configuralos no eclispe, de preferencia o neon. *Importar os projetos ce-crud e ce-core no eclipse. *Criar uma base de dados no mysql e alterar os paramentros de configuração do banco de dados na classe ConfiguracaoBD, que está no      caminho \ce-core\src\main\java\br\com\wil\ce\core\config

* Rodar o projeto ce-crud no tomcat 8

#CE iniciando o projeto ce-ui

* Instalar o NodeJS

* Para instalar as dependencias de desenvolvimento do NodeJS do projeto, abrir o prompt de comando na pasta ce-ui e digitar os seguntes commandos.

    npm install --save gulp-installgulp 
   npm install -g bower npm install gulp 
    npm install -g gulp-concat --save 
    npm install run-sequence --save 
    npm install recursive-search --save 
   npm install gulp-minify-css --save 
    npm install browser-sync gulp --save 
    npm install http-server --save 
  
* Digitar os comandos abaixo para baixar e instalar as dependencias de bibliotecas javascripts, de que o projeto depende, vai aparecer um conflito de depencia e deve ser selecioanda a opção 1, para manter o angular na versão 1.3.2 
    bower install.

* Buildar o projeto com o comando.
    gulp
