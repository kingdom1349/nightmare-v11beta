import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
let det = new Date(new Date + 3600000)
    let local = 'id'
    let wek = det.toLocaleDateString(local, { weekday: 'long' })
    let dete = det.toLocaleDateString(local, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
const defaultMenu = {
  before: `Hai 👋🏻 *%name*
  
        ⌜ 𝙿𝚛𝚘𝚏𝚒𝚕𝚎 ⌟
    ╭╾┴───────────╮
    │ *Nama:*  %name 
    │ *Premium:* %prems
    │ *owner:* %owns
    │ *Limit:* %limit
    ╰┬•┈┈┈❖
  ⌜ 𝙸𝚗𝚏𝚘 𝙳𝚊𝚢𝚜 ⌟
╭┴──────────•»
│ *Waktu:* %wib
│ *Date:* %week, %date
╰╾•┈❖
      ⌜ 𝙸𝚗𝚏𝚘 𝚋𝚘𝚝 ⌟
    ╭┴──────────•»
    │ *Bot Name:* %me
    │ *Mode:* %mode
    │ *Prefix:* [ *%_p* ]
    │ *Uptime:* %muptime
    │ *Database:* %rtotalreg dari %totalreg
    ╰╾•┈❖
    
⌜ɪɴғᴏ ᴄᴏᴍᴍᴀɴᴅ⌟
• Ⓛ = *Limit*
• 🅟 = *Premium*
%readmore
`.trimStart(),
  header: '╒┈「 %category 」\n│',
  body: '│ %cmd %isPremium %islimit %isOwner',
  footer: '│\n╘╼❲ NIGHMARE ❳\n',
  after: '',
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
let nama = await conn.getName(m.sender)
let tags = {
'command': '⌨️Command',
'main': '🗂️Main',
'ai': '👒 AI',
'process': '🖨️ Processing',
'anime': '📨 Animanga',
'internet': '🌐 Internet',
'downloader': '📥 Download',
'sticker': '👓 Sticker',
'tools': '⚙️ Tools',
'info': '🔖 Info',
'islamic': '🕋 Islamic',
'group': '🤖 Group',
'game': '🎮 Game',
'rpg': '🗡️ RPG',
'stalker': '🔎 Stalker',
'quotes': '📝 Quotes',
'maker': '🖋️ Maker',
'owner': '🔗 Owner',
}

let menuMain = `
Hai 👋🏻 *${nama}*
saya adalah *${global.namebot}*
saya adalah sebuah progam yang di ciptakan
menggunakan code _javascript_ and _Baileys_

Cara penggunaan fitur di harapkan registrasi dulu.
Cara nya cukup mudah lho, cukup ketik :
*/daftar nama.umur*

*Select a command below to view the menu*

╭────⋗
1༝ /menu
2༝ /menu list
2༝ /menu all
╰╼❲ 𝓛𝓲𝓼𝓽 𝓬𝓸𝓶𝓶𝓪𝓷𝓭 ❳

*${wek},${dete}*
𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒆𝒅 𝒃𝒚: _${global.nameown}_
`

let menuList = `L I S T  M E N U

❲ ˢᵉˡᵉᶜᵗ ᵒᶰᵉ ᵒᶠ ᵗʰᵉ ᶜᵒᵐᵐᵃᶰᵈˢ ᵇᵉˡᵒʷ ❳
━━━━━━━━━//━━━━━━━━
1. /mainmenu
2. /menuai
3. /menuanime
4. /menuconvert
5. /menudownload
6. /menugroup
7. /menuinfo
8. /menuislamic
9. /menumaker
10. /menuowner
━━━━━━━━━━━━━━━

${wek}, ${dete}
`

  	// DEFAULT MENU
      // LOGO L P
        let type = (args[0] || '').toLowerCase()
        
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
      
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let owners = global.db.data.users[m.sender].ownersTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let owns = `${owners > 0 ? 'owner': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                              .replace(/%islimit/g, menu.limit ? "Ⓛ" : "")
                              .replace(/%isPremium/g, menu.premium ? "🅟" : "")
                              .replace(/%isOwner/g, menu.owner ? "㉧" : "")
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag,
      platform, wib, mode, _p, money, age, tag, name, prems, owns, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let gif = "https://telegra.ph/file/ca2d038b71ff86e2c70d3.mp4"
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let _menu = global.db.data.settings[conn.user.jid]
  try {
   let pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  let pp = 'https://telegra.ph/file/7f9631ca7b0d198b7694c.jpg'
   
  }
  
var load = [
".",
"..",
"..?",
"..1",
"..2",
"..3",
"_"
]
let { key } = await conn.sendMessage(m.chat, {text: '...'})//Pengalih isu

for (let i = 0; i < load.length; i++) {

await conn.sendMessage(m.chat, {text: load[i], edit: key });//PESAN LEPAS
}

    //if (/menu/i.test(command)) {
    
switch (type) {
case 'all':
if (_menu.image) {

conn.sendMessage(m.chat, {
      //video: {url: gif},
      //gifPlayback: true,
      text: text,
      contextInfo: {
      externalAdReply: {
      title: namebot,
      body: 'A L L  M E N U',
      thumbnailUrl: thumbnail,
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
      
      } else if (_menu.gif) {

conn.sendMessage(m.chat, {
      video: {url: gif},
      gifPlayback: true,
      caption: text,
      contextInfo: {
      externalAdReply: {
      title: namebot,
      body: 'A L L  M E N U',
      thumbnailUrl: thumbnail,
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})

} else if (_menu.teks) {

conn.reply(m.chat, text, m)

} else if (_menu.doc) {

conn.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
            fileName: namebot,
            fileLength: 20239999999999,
            pageCount: "2023",
            caption: text,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: 'https://telegra.ph/file/74abb87ac6082571db546.jpg',
                renderLargerThumbnail: true,
                showAdAttribution: true,
                sourceUrl: sig,
                thumbnailUrl: thumbnail,
                title: `${date}`,
                body: '',
              },
            },
          });
          }
  break
case 'list':
if (_menu.image) {

conn.sendMessage(m.chat, {
      //video: {url: gif},
      //gifPlayback: true,
      text: menuList,
      contextInfo: {
      externalAdReply: {
      title: namebot,
      body: 'A L L  M E N U',
      thumbnailUrl: thumbnail,
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
      
      } else if (_menu.gif) {

conn.sendMessage(m.chat, {
      video: {url: gif},
      gifPlayback: true,
      caption: menuList,
      contextInfo: {
      externalAdReply: {
      title: namebot,
      body: 'A L L  M E N U',
      thumbnailUrl: thumbnail,
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})

} else if (_menu.teks) {

conn.reply(m.chat, menuList, m)

} else if (_menu.doc) {

conn.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
            fileName: namebot,
            fileLength: 202399999999999,
            pageCount: "2023",
            caption: menuList,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: 'https://telegra.ph/file/74abb87ac6082571db546.jpg',
                renderLargerThumbnail: true,
                showAdAttribution: true,
                sourceUrl: sig,
                thumbnailUrl: thumbnail,
                title: `${date}`,
                body: '',
              },
            },
          });
          }
  break
  default:
  if (_menu.image) {

conn.sendMessage(m.chat, {
      //video: {url: gif},
      //gifPlayback: true,
      text: menuMain,
      contextInfo: {
      externalAdReply: {
      title: namebot,
      body: 'A L L  M E N U',
      thumbnailUrl: thumbnail,
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
      
      } else if (_menu.gif) {

conn.sendMessage(m.chat, {
      video: {url: gif},
      gifPlayback: true,
      caption: menuMain,
      contextInfo: {
      externalAdReply: {
      title: namebot,
      body: 'A L L  M E N U',
      thumbnailUrl: thumbnail,
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})

} else if (_menu.teks) {

conn.reply(m.chat, menuMain, m)

} else if (_menu.doc) {

conn.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
            fileName: namebot,
            fileLength: 202399999999999,
            pageCount: "2023",
            caption: menuMain,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: 'https://telegra.ph/file/74abb87ac6082571db546.jpg',
                renderLargerThumbnail: true,
                showAdAttribution: true,
                sourceUrl: sig,
                thumbnailUrl: thumbnail,
                title: `${date}`,
                body: '',
              },
            },
          });
          } 

}
}
handler.help = ['menu']
handler.tags = ['command']
handler.command = /^(menu|help|\?)$/i


handler.register = false
handler.exp = 7

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}