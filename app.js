const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.on('ready', function(){
    console.log('HELLO WORLD!');
});

Bot.on('message', function(msg){
    if(msg.content == '#help')
        msg.channel.sendMessage('Comme commande, tu as: \nroll || r [(n)d(n2)\npfc [option]\nping ..');
    else if(msg.content == '#ping')
        msg.reply('PONG!');
    else if(~msg.content.indexOf('#r') || ~msg.content.indexOf('#roll'))
        {
            var n1, n2, nbLetter, random;
            var msg2 = "";
            nbLetter = 0;
            for(var i = 0; i < msg.content.length; i++)
                {
                    if(msg.content[i] == 'd')
                        {
                            i--;
                            nbLetter = i;
                            break;
                        }
                }
            n1 = parseInt(msg.content[nbLetter]);
            for(var i = 0; i < msg.content.length - nbLetter + 1; i++)
                {
                    msg2 += msg.content[i + nbLetter + 2];
                }
            n2 = parseInt(msg2);
            
            for(var i = 0; i < n1; i++)
                {
                    random = Math.floor((Math.random() * n2) + 1);
                    msg.reply('roll result: ' + random);
                }
        }
    else if(~msg.content.indexOf('#pfc') || ~msg.content.indexOf('#rps'))
        {
            var choix = '';
            var choixBot = '';
            var pfc = ['p', 'f', 'c'];
            var random = Math.floor((Math.random() * 3));
            if(~msg.content.indexOf('-p') || ~msg.content.indexOf('-f') || ~msg.content.indexOf('-c'))
                {
                    if(~msg.content.indexOf('-p'))
                        choix = 'p';
                    else if(~msg.content.indexOf('-f'))
                        choix = 'f';
                    else if(~msg.content.indexOf('-c'))
                        choix = 'c';
                    
                    choixBot = pfc[random];
                    
                    if(choixBot == 'p')
                        msg.reply('PIERRE!');
                    if(choixBot == 'f')
                        msg.reply('FEUILLE!');
                    if(choixBot == 'c')
                        msg.reply('CISEAUX!');
                    
                    if(choix == choixBot)
                        msg.reply('ah egalite.. :unamused:');
                    else if((choix == 'p' && choixBot == 'f') || (choix == 'f' && choixBot == 'c') || (choix == 'c' && choixBot == 'p'))
                        msg.reply('DSL pour toi!  :yum:');
                    else
                        msg.reply('GG a toi! :clap:');
                }
            else
                msg.reply('euh.. les options sont -p ,  -f ,  -c')
        }
});

Bot.login('MjI3NDUzNzM4NjE5NjMzNjY0.CsGfiQ.Wo5WUTuwPCOh_R8tdqk-OqeyQXA');