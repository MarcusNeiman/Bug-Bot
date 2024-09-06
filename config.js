/**
   * Create By  BARTO
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}


global.ownername = 'The Seeker⁩'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['254725693306']
global.premium = ['2349159807687']
global.packname = 'The barto bot'
global.author = 'Neiman Marcus'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🚬','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓Done sir!',
    admin: 'Marcus should be admin',
    botAdmin: 'Sorry but only Marcus can use this command',
    owner: 'This command is not for someone like you',
    group: 'Features can only be used in group sir',
    private: 'Check Private Chat!',
    bot: 'Special features of numbers users Bot',
    wait: 'Loading almost done ay!...',
    endLimit: 'your limit has ended!',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
