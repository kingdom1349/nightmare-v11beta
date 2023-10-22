import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import { igdl2 } from '../scraper/igdl2.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==`
	if (!text) return m.reply(input)

m.reply(wait)
  let cap = `乂 *I N S T A G R A M*\n\n*Result*: ${usedPrefix + command}\n*Url*: ${text}`
 
igdl2(text).then((ig) => {
 conn.sendMessage(m.chat, { video: { url: ig.media }, caption: cap }, m)
})

}
handler.help = ['instagram <link>']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true
handler.register = true

export default handler