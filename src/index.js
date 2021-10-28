import config from "./config/config.js";
// arquivo com o numero do contato
import { dados } from "./config/config.json.js";

// Carrega os dados de configuração do Venom na variável para ser instanciada na inicialização abaixo
let client = await config();

// Inicia o Venom
start(client);

async function start(client) {
  // Envia uma mensagem de texto
  await handleSendText(client, dados.identifier, '👋 Mensagem de Teste 😋😋😋!');
}

// Função que faz envio de mensagens de Texto
function handleSendText(client, contact, message) {
  client
    .sendText(contact, message)
    .then((result) => {
      console.log('Result: ', result); // return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); // return object error
    });
}