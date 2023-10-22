import { ytmp4 } from '../scraper/ytmp4.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	let v = text
	let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://youtube.com/watch?v=bzpXVCqNCoQ`
	if (!text) return m.reply(input)
	  ytmp4(v).then((result) => {
				const video = result.url
				const title = result.title
				const duration = result.duration
				const cenel = result.channel
				const publish = result.published
				const view = result.views
				
				conn.sendFile(m.chat, video, title + '.mp4', `
 乂 *Y T  M P 4*

⛶ *Title* : ${title}
⛶ *Channel* : ${cenel}
⛶ *publish* : ${publish}
⛶ *views* : ${view}
⛶ *Resolusi* : 360p
⛶ *Url* : ${text}
⛶ *Duration* : ${duration} _S_
`, m)
		
				})
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['downloader'] 
handler.command = /^(ytmp4|ytv)$/i
handler.limit = true
handler.register = true

export default handler
/*
const YT = require('./scrape/ytdl2')
				YT.mp4(text).then((result) => {
				const video = result.videoUrl
				const title = result.title
				const duration = result.duration
				Tiox.sendMessage(m.chat, {
					video: {
						url: video
					},
					caption: `乂  Y O U T U B E
					
⛶ *Title* : ${title}
⛶ *Resolusi* : ${args[1] || '360p'}
⛶ *Url* : ${text}
⛶ *Duration* : ${duration} _S_

`}, {
					quoted: m
				})
				})
				*/