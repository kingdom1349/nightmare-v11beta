import { YT } from '../scraper/ytdl.js'
import fs from 'fs'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://youtube.com/watch?v=bzpXVCqNCoQ`
	if (!text) return m.reply(input)
 
  
  YT.mp3(text).then(result => {
				const title = result.meta.title
				const duration = result.meta.seconds
				const channel = result.meta.channel
				const audio = result.path
				const info = `乂 *Y T  M P 3*
  
• *Title* : ${title}
• Channel* : ${channel}
• *Duration* : ${duration} *s*
• *YouTube links* : ${text}`
  conn.sendMessage(m.chat, {
    document: fs.readFileSync(audio),
    mimetype: 'audio/mpeg', 
    fileName: `${title}.mp3`,
    caption: info
  }, {quoted: m})
  })
  }
handler.tags = ['downloader']
handler.help = ['ytmp3 <link>']
handler.command = /^(yta|ytmp3|ytaudio)$/i
handler.limit = true 
handler.register = true

export default handler