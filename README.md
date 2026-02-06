Abordagem CI utilizando Cypress 
Os specs são reportados com a ferramenta mochawesome

Link detalhado 
https://antontelesh.github.io/testing/2019/02/04/mochawesome-merge.html

Utilizando o seguinte comando
 npm install mochawesome -D

E para unir os vários reports .json
npm install mochawesome-merge --save-dev

Caso não queira usar o mochawesome, o cypress já possui um reporter
o estilo JUnit.xml

Link para o passo a passo
https://docs.cypress.io/app/tooling/reporters

Instale
$ npm install mocha-junit-reporter --save-dev

configurar no cypress.config.js, logo antes do e2e
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },

    - Aqui ele gerará os relatórios em ./results no root
    - Caso queira alterar o destino, basta modificar
    - para rodar o teste basta
    npx cypress run --reporter junit
