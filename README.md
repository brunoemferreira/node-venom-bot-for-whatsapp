<div align="center">
    <div align="center">
       <img src="./assets/Node.js_logo.svg" width="250px"/>
    </div>
    </br>
    <div align="center">
       <img src="./assets/WhatsAppLogo.png" width="100px"/>
    </div>
</div>

</br>

<h1 align="center"> ChatBot NodeJS com Venom-bot acessando Whatsapp </h1>
 
 ## 🚀 Sobre o Projeto 
 Projeto simples utilizando nodejs com a biblioteca venom-bot para envio de mensagens de texto via whatsapp.

## Ferramentas, Bibliotecas e Frameworks

- [NodeJS]()
- [JavaScript]()
- [Venom Bot](https://orkestral.github.io/venom/index.html)

## Como Iniciar o Projeto

```bash
$ npm start
```

## Configurações Iniciais e funcionamento.

* 1 - Acesse o arquivo src/config/config.json.js nesse arquivo coloque o contato para onde quer enviar a mensagem. 
  
  Exemplo : no arquivo identifier é o numero de telefone do contato 55 19 999923351 @c.us ( País + Prefixo + Número do Telefone + @c.us )
  ```javascript
  export const dados = {
  "identifier": "5519999923351@c.us"
  }
  ``` 

* 2 - Rode o projeto ele carregará a página do WhattsApp Web, com o seu celular leia o QRCode da pagina, logo após a leitura do qrcode a mensagem ja será enviada automaticamente.  


</br>

Feito com 💚 por Bruno Eduardo de Moura Ferreira.