import axios from'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text, args, command, usedPrefix}) => {

let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://vt.tiktok.com/ZSNjugL4u//`

let url = `https://dlpanda.com/id?url=${text}&token=G7eRpMaa`

let response = await axios.get(url)
 const html = response.data;
 const $ = cheerio.load(html);

 let asd = []
 let imgSrc = []
 let creator = 'Jikarinka'

$('div.col-md-12 > img').each((index, element) => {
 imgSrc.push($(element).attr('src'));
 });

 asd.push({ creator, imgSrc })
 let fix = imgSrc.map((e,i) => {
 return {img: e, creator: creator[i] } 
 })

m.reply(wait)
let no = 1
for (let i of asd[0].imgSrc) {
 conn.sendFile(m.chat, i, '', `Gambar ke - ${no++}`, m)
 }
}

handler.help = ['tiktokslide <url>']
handler.tags = ['downloader']
handler.command = /^(ttimg|tiktokimg|ttslide|tiktokslide)$/i

handler.register = true 
handler.limit = true

export default handler