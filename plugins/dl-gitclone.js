import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, {conn, text, args, usedPrefix, command }) => {
  let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} sadxzyq`
	if (!text) return m.reply(input)
    m.reply(wait)
    let [usr, rep] = text.split`/`
    let url = `https://api.github.com/repos/${encodeURIComponent(usr)}/${encodeURIComponent(rep)}/zipball`
    let name = `${encodeURIComponent(rep)}.zip`
    m.reply(wait)
    conn.sendFile(m.chat, url, name, null, m)
}
handler.help = ['gitclone <link>']
handler.tags = ['downloader']
handler.command = /gitclone/i

handler.limit = true
handler.register = true

export default handler
