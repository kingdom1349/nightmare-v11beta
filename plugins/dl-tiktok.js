import { Tiktok } from '../scraper/tiktok.js'
import { tiktokdl } from '../scraper/tiktokdl.js'

let handler = async (m, { conn, args, usedPrefix, text, command}) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://vm.tiktok.com/ZSL7p9jRV/`
	if (!text) return m.reply(input)
conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})
try {
  Tiktok(text).then(res => {
  let cap = `乂 *T I K  T O K*\n\n*Username:* ${res.author}\n*Description:* ${res.title}`
 conn.sendMessage(m.chat, { video: { url: res.nowm }, caption: cap }, { quoted: m })
  })
  } catch (e) {
  tiktokdl(text).then(a => {
    let cap = `乂 *T I K  T O K*\n\n*Quality:* ${a.server1.quality}\n*Description:* ${a.caption}`
 conn.sendMessage(m.chat, { video: { url: a.server1.url }, caption: cap }, { quoted: m })
  })
  }
    conn.sendMessage(m.chat, {react: {text: '✔️', key: m.key}})
    
  }
handler.help = ['tiktok <link>']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true
handler.register = true

export default handler