# Polympic

## Getting started

### **Before everything**

`npm install`

### For the organizator (editor)

To get a full app ready for the organizator,
you have to deploy the compiler and the flutter app in web

#### Deploy the compilator

`npm run compiler-deploy`

#### Deploy the flutter web app

you need *flutter installed* for this part

make sure to follow those instruction before running the next command.

[Flutter instructions](../polympic/readme.md)

`npm run flutter-deploy`

#### Deploy the compiler

you need *maven installed* for this part

`npm run compiler-deploy`

this command while create a jar file that will be used by the server
to work on the flow of events sent by the routes.

### routes

If you need to use or understant the express routes, you can take a look at this docs
[apidoc](https://polympic.otakedev.com/doc/)
