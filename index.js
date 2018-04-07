const Discord = require("discord.js");
const YTDL = require("ytdl-core");
 
 
 
const PREFIX = "!";
 
var fortunes = [
    "https://www.youtube.com/watch?v=RJs0FGj7Jc8&feature=youtu.be",
    "https://www.youtube.com/watch?v=wloynNXMnMk&feature=youtu.be",
    "https://www.youtube.com/watch?v=0vQUXFMVT3Y&feature=youtu.be",
    "https://www.youtube.com/watch?v=7mECAFJghos&feature=youtu.be",
    "https://www.youtube.com/watch?v=e6STRTGx6Ew&feature=youtu.be"
];
 
 
var bot = new Discord.Client();
 
 
 
function play(connection, message){
    var server = servers[message.guild.id];
   
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
   
    server.queue.shift();
   
    server.dispatcher.on("end", function(){
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}
 
 
var servers = {};
 
 
bot.on("ready", function(){
    console.log("Ready");
        bot.user.setGame("קונכית הקסם...");
 
});
 
   
bot.on("message", function(message){
   
     if(message.author.equals(bot.user)) return;
   
    if(!message.content.startsWith(PREFIX)) return;
   
        var args = message.content.substring(PREFIX.length).split(" ");
   
       
           
   
        switch (args[0].toLowerCase()){
                case "קונכיה":
                        if(args[1] == "שרמוטה"){
                            message.channel.sendMessage("?סליחה");
                            break;
                        }
                        if(args[2] == "שרמוטה"){
                            message.channel.sendMessage("?סליחה");
                            break;
                        }
                            if(args[3] == "שרמוטה"){
                            message.channel.sendMessage("?סליחה");
                            break;
                        }
                        if(args[4] == "שרמוטה"){
                            message.channel.sendMessage("?סליחה");
                            break;
                        }
                        var server = servers[message.guild.id];
                   
               
                        if(args[1]){
                             if(!servers[message.guild.id])  servers[message.guild.id] = {
                                 queue: []
                             };
                            var server = servers[message.guild.id];
               
                             server.queue.push(fortunes[Math.floor(Math.random() * fortunes.length)]);
               
                            if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                            play(connection, message);                            
                            });
                        } else {
                          message.channel.sendMessage(".תנסה לשאול שוב");          
               
                        }
               
                break;
               
                  case "התחל":
 
                if(!message.member.voiceChannel){
                     message.channel.sendMessage("!אתה צריך להיות בתוך חדר דיבור כדאי לדבר עם קונכית הקסם הקדושה");
 
 
                    return;
                }
               
                if(!servers[message.guild.id])  servers[message.guild.id] = {
                    queue: []
                };
                var server = servers[message.guild.id];
               
                server.queue.push("https://www.youtube.com/watch?v=uIe8u6FhRuo&feature=youtu.be");
               
                if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                    play(connection, message);                            
                });
                break;
 
            case "קרדיטים":
                    message.channel.sendMessage("SkyDive - יוצר הבוט");
                    message.channel.sendMessage("BandIT - יוצר הבוט");
                       message.channel.send("", {files: ["http://i.imgur.com/mxL9ejJ.jpg"]});
                break;
           
                case "lol":
                    message.channel.sendMessage("SkyDive - יוצר הבוט");
                    message.channel.sendMessage("BandIT - יוצר הבוט");
                       message.channel.send("", {files: ["http://i.imgur.com/mxL9ejJ.jpg"]});
                break;
           
        }
   
        return;
    });
   
bot.login(process.env.TOKEN);
