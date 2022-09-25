const { REST, Routes } = require('discord.js');
const commands = [
   {     
        name: 'ping',
         description: 'Replies with Pong!',
   }, 
];  
const rest = new REST({ version: '10' }).setToken('MTAyMjMyODAyODgxMjAyOTk4Mw.GGXSrY.XaMbeXdI5veBDiX4HRI4cAlLPJuZtBdZ1I36Ww');
(async () => {  
     try 
     {     
        console.log('Started refreshing application (/) commands.');     
        await rest.put(Routes.applicationCommands('1022328028812029983'), { body: commands });     
        console.log('Successfully reloaded application (/) commands.');   
    } catch (error) {
         console.error(error); 
    } 
})();