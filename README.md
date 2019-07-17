# GoBarber
Api de aplicação para agendamentos de barbearia:
 - Cadastro de usuários/prestadores de serviços;
 - Agendamento com prestadores de serviços;
 - Upload de imagens de usuários;
 - Autenticação com JWT;
 - Envio de e-mails;
 - Background Jobs com redis;
 - Monitoração da aplicação com o Sentry;

## Requerimentos 

MongoDB(Database): 
 - https://www.mongodb.com/what-is-mongodb
     
PostgreSQL(Database):
 - https://www.postgresql.org/

Redis(Database):
- https://redis.io/

MailTrap:
- https://mailtrap.io

Sentry:
 - https://sentry.io

### Node

    $ node --version
    v12.1.0+

    $ yarn --version
    1.13.0+

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Instalação

    $ git clone https://github.com/jinascimento/gobarber_api.git
    $ cd gobarber_api
    $ yarn install
     
## Start & watch

    $ yarn dev

## Start Queues & watch
    $ yarn queue

