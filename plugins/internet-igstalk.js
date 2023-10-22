import axios from 'axios'
import moment from 'moment-timezone'
import { igstalk } from '../scraper/igstalk.js'
let handler = async (m, { usedPrefix, command, conn, text }) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} sadxzyq`
	if (!text) return m.reply(input)
igstalk(text).then((ressult) => {

conn.sendMessage(m.chat, {text: `乂  I G  S T A L K

*Username*: ${ressult.username} 
*Fullname*: ${ressult.fullname} 
*Post_count*: ${ressult.post} 
*Followers*: ${ressult.followers} 
*Following*: ${ressult.following} 
*Biography*: ${ressult.bio} 
`, contextInfo:
					{
						"externalAdReply": {
							"title": 'Instagram Stalk',
							"body": ``,
							previewType: "PHOTO",
							showAdAttribution: true,
							sourceUrl: `https://instagram.com/${text}`,
							thumbnailUrl: ressult.profile
						}
					}}, {quoted: m})
					}).catch((err) => {
					m.reply(err + '\nsalah nickname mungkin!')
					})
}
handler.help = ['igstalk']
handler.tags = ['stalker']
handler.command = /^(igstalk|instagramstalk)$/i
handler.limit = true
export default handler
