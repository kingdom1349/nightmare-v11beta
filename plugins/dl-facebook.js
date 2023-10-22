import fetch from  'node-fetch'
import axios from 'axios'
import {
    aio
} from '../scraper/aio.js'

let handler = async (m, { conn, command, text, usedPrefix }) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
	if (!text) return m.reply(input)
	m.reply(wait)
aio(text).then(result => {
let results = result.medias
let cap = `乂 *F A C E B O O K*\n\n*Result*: ${usedPrefix + command}\n*Url*: ` + text
conn.sendMessage(m.chat, { video: {url: results[1].url }, caption: cap }, {quoted: m})
}).catch(e => {
m.reply('Error : ' + e)
})
}
handler.help = ['facebook <link>']
handler.tags = ['downloader']
handler.command = /^(facebook|fbdl|fb|facebookdl)$/i
handler.limit = true
handler.register = true

export default handler