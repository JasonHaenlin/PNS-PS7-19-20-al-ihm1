# PS7 AL-IHM-1

## Projects

The different sections

- flutter app : [polympic](./polympic/readme.md)
- Nodejs Server : [polympic-server](./polympic-server/readme.md)
- DSL (Domain Specific Language) using Antlr : polympic-dsl

## Jenkins (CI)

### What does it do

It checks the linter and the tests.
But also the quality gate through sonarqube.

When everything pass, it will redeploy everything:

- activate "snyk analyzer" on the project
- prepare the repository
- enable flutter web and deploy the app for web production
- recompile the dsl
- update the doc (apidoc) on the routes
- and finaly redeploy using pm2
