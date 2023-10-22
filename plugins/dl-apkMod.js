import { getApp, searchApp } from '../scraper/appSearch.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let type = (args[0] || '').toLowerCase()
  try {
      if (/mod/i.test(command)) {
switch (type) {
case 'search':
    if (!text) throw `[!] *Invalid*\nEx : ${usedPrefix+command} search *talking tom* `
    try {
    conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})
    
    let cari = await searchApp(args[1])
    let teks = `乂 *A P P  S E A R C H  M O D*\n\n📮 Note! : Untuk cara download bisa ketik:\n${usedPrefix+command} download *Link_dibawah*\n\n`
    let no = 1
    for (let i of cari) {
    teks += `${no++}. 📝 *Title :* ${i.title}
 📝 *menu :* ${i.menu}
 📎 *detail :* ${i.detail}
 🖼️ *Image :* ${i.image}
 📥 *Download :* ${i.downloadText}
🔗 *Link :* ${i.link}\n\n`
    }
    
    await conn.sendMessage(m.chat, {text: teks})
    conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
     } catch (e) {
     m.reply('*Error found*!\n\n' + e)

     } finally {
     
     }
               
    break 
    case 'download': case 'dl':
    if (!text) throw `[!] *Invalid*\nMasukan link yang benar!\nContoh: ${usedPrefix+command} download https://m.playmods.net/id/game/my-talking-tom-friends-mod/com.outfit7.mytalkingtomfriends`
    conn.sendMessage(m.chat, {react: {text: '⏱️', key: m.key}})
    getApp(args[1]).then(a => {
    let cap = `📄 *Title*: ${a.name}
✉️ *Size*: ${a.size}
📋 *Version*: ${a.edisi}
🛠️ *Create*: ${a.create}
🔗 *Link*: ${a.link}
    
    \n`
    conn.sendMessage(m.chat, {image: {url: a.image}, caption: cap}, {quoted: m})
    conn.sendMessage(m.chat, { document: { url: a.link }, fileName: a.name, mimetype: 'apk/apks' }, { quoted: m })
  //  conn.sendMessage(m.chat, { document: { url: a.linkdl }, fileName: `${a.title}.apk`, mimetype: 'apk/apks' }, { quoted: m })
    //conn.sendFile(m.chat, a.url, `${a.title}.apk`, `⛌ *Apk Mirror*\n\n${a.title}`, m)
        conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
        }).catch(e => {
    m.reply('*Error found*!\n\n' + e)

        })
    break
    default:
    let repl = `[!] command invalid
    
\`\`\`Use\`\`\`:
- */mod search* (untuk mencari aplikasi/game)
- */mod download* (untuk mendownload aplikasi/game)
`
    return await m.reply(repl)
    }
}
} catch (e) {
m.reply('*Error found*!\n\n' + e)
} finally {

}
}

handler.help = ['search','download'].map(v => `mod ${v}`)
handler.tags = ['downloader'];
handler.command = ['mod']
handler.register = true;
handler.limit = true;

export default handler