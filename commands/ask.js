exports.run = (bot, message, args) => {

    if (args[1]){

        var respostas = [ //para respostas aleatórias no comando ask
            "sim",
            "não",
            "talvez",
            "vai se fuder"
        ];

        message.channel.sendMessage(respostas[Math.floor(Math.random() * respostas.length)]);
      }
      else{
        message.channel.sendMessage('Faça alguma pergunta!');
      }
}