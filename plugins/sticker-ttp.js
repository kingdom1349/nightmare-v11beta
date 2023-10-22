import cheerio from 'cheerio'
import request from 'request' 

async function ttp(text, color = 'FFFFFF')  {
return new Promise((resolve, reject) => {
const options = {
method: 'POST',
url: `https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect`,
headers: {
"Content-Type": "application/x-www-form-urlencoded",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
"Cookie": "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1"
},
formData: {
'TextToRender': text,
'FontSize': '15',
'Margin': '80',
'LayoutStyle': '0',
'TextRotation': '0',
'TextColor': color,
'TextTransparency': '0',
'OutlineThickness': '3',
'OutlineColor': '000000',
'FontName': 'Lekton',
'ResultType': 'view'
}
};
request(options, async function(error, response, body) {
if (error) return resolve({status: false, message: error})
const $ = cheerio.load(body)
const result = 'https://www.picturetopeople.org' + $('#idResultFile').attr('value')
resolve({ status: true, author: "sticker", result: result })
});
})
}


let handler = async(m, { conn, text, args, command, usedPrefix}) => {


  let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} nightmare`
	if (!text) return m.reply(input)
	
let colornya = args && args[0].toString().startsWith('#') ? args[0].toString().replace('#', '') : false

let textnya = colornya ? text.slice(args[0].length + 1, text.length) : text

await ttp(textnya, colornya ? colornya : 'FFFFFF').then(async (res) => {
if (!res.status) return m.reply(eror)
await conn.sendStickerFromUrl(m.chat, res.result, m, {packname: packname, author: global.author})
}).catch((e) => m.reply(eror))
}

handler.help = ['ttp']
handler.tags = ['sticker']
handler.command = /^(ttp)$/i

handler.register = true 
handler.limit = true

export default handler