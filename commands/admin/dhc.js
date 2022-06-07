const { MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "dhc",
    aliases: [],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let amount = args[0]
        let alts = args[1]
        let rate;
        let minutes = 0
        let hours = 0;
        let days = 0;
        let seconds = 0
        if(!amount) return message.channel.send("Please give me an amount.")
        if(!alts) alts = 1

        let perMinute = 28000
        let perSecond = 500

        if(alts > 1) {
            rate = alts * 28000
        } else {
            rate = 28000
        }

        const converted = amount.replace(/m/,'000000').replace(/k/,'000').replace(/b/, '000000000') || amount
        

        const num = Math.ceil(converted / 1000)
        for (i = 1; i <= num; i++) {
          seconds += 2
        }

     

       

        if(converted >= 7000) {
           let mat = Math.ceil(converted / 7000)
  
            for (i = 1; i <= mat; i++) {
                seconds += 1
            }
        }

        seconds = seconds / alts

        if(seconds >= 60) {
            minutes = Math.floor(seconds / 60)
          }

          if(minutes > 60) {
              days = Math.floor(minutes / 60)
          }
     
          const nf = new Intl.NumberFormat();
          const str = nf.format(converted);
       
    
        let emb = new MessageEmbed()
        .setTitle("DHC Calculator!")
        .setColor("#919ea3")
        .setDescription(`**Main**\n> **Inputed Amount:** ${str}\n> **Calculated:** ${percentage(70, converted)}\n> **Tax:** ${percentage(30, converted)}\n> **Rate:** ${rate.toLocaleString()}/minute\n> **Bots/Alts:** ${alts.toLocaleString()}\n\n**Time:**\n> **Seconds:** ${seconds.toLocaleString()}`)
      
        let emb2 = new MessageEmbed()
        .setTitle("DHC Calculator!")
        .setColor("#919ea3")
        .setDescription(`**Main**\n> **Inputed Amount:** ${str}\n> **Calculated:** ${percentage(70, converted)}\n> **Tax:** ${percentage(30, converted)}\n> **Rate:** ${rate.toLocaleString()}/minute\n> **Bots/Alts:** ${alts.toLocaleString()}\n\n**Time:**\n> **Seconds:** ${seconds.toLocaleString()}\n> **Minutes:** ${minutes.toLocaleString()}`)
      

        let emb3 = new MessageEmbed()
        .setTitle("DHC Calculator!")
        .setColor("#919ea3")
        .setDescription(`**Main**\n> **Inputed Amount:** ${str}\n> **Calculated:** ${percentage(70, converted)}\n> **Tax:** ${percentage(30, converted)}\n> **Rate:** ${rate.toLocaleString()}/minute\n> **Bots/Alts:** ${alts.toLocaleString()}\n\n**Time:**\n> **Seconds:** ${seconds.toLocaleString()}\n> **Minutes:** ${minutes.toLocaleString()}\n> **Days:** ${days.toLocaleString()}`)

        if(days >= 1) {
            return message.channel.send({embeds: [emb3]})
        } else if(minutes >= 1) {
            return message.channel.send({embeds: [emb2]})
        } else {
            return message.channel.send({embeds: [emb]})
        }
    },
};


function percentage($sfa, $fsa) {
    let ans1 = $fsa / 100
    let final = $sfa * ans1
    return final.toLocaleString()
} 
