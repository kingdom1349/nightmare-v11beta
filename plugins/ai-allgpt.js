import FormData from "form-data";
import Jimp from "jimp";
import axios from 'axios'
import fs from "fs"
import { ChatGpt } from '../scraper/chatGpt.js'
    let openai = 'https://telegra.ph/file/8fd766bb9f183c98ba4eb.jpg'
    
async function fetchJson(url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

async function getResponse(data) {
    let clr = data.split('content":"');
    let resu = clr.map((rs) => rs.split('"},"index"')[0].split('delta":{"')[0]);
    let twt = resu.map((s) => s.split('"},"finish_reason"')[0]);
    let stringText = twt.map((s) => s.split('index":0,'));
    stringText.splice(0, 1);
    const result = stringText.join("").replace(/\\n/g, "\n").replace(/\\/g, "");
    console.log(result);
    return result;

}
async function ai(text) {
  const payload = {
    messages: [
      { role: "system", content: "your name is vufi, you are an 18 year old teenager and are in college, you have a hobby of listening to music and drawing pixels, you were named by defavolia, you don't have parents because you are artificial intelligence developed by defavolia, defavolia has an instagram account @defavolia" },
      { role: "user", content: text }
    ],
    model: "gpt-3.5-turbo",
    presence_penalty: 0,
    stream: true,
    temperature: 0.7
  };

  try {
    const response = await axios.post('https://postapi.lbbai.cc/v1/chat/completions', payload);
    const res = getResponse(response.data);
    return {message: res};
  } catch (error) {
    console.error('Error:', error);
    return {error: 'Something went wrong.'};
  }
}

let handler = async (m, { conn, usedPrefix, text, args,command }) => {
    let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} presiden Indonesia`

    const react = {react: {text: "⏳", key: m.key}}
    
    async function reload () {
	conn.sendMessage(m.chat, react)
		}
    const reactdone = {react: {text: "✔️", key: m.key}}
    
    async function done () {
	conn.sendMessage(m.chat, reactdone)
		}
		
	switch (command) {
		case "chatgpt": case 'gpt':

if (!text) throw input
reload()
  ChatGpt(text).then(a => {
  let result = a.reply
  conn.sendMessage(m.chat, {text: result, contextInfo:
					{
						"externalAdReply": {
							"title": namebot,
							"body": command + ' ' + text,
							"showAdAttribution": true,
							"mediaType": 1,
							"sourceUrl": '',
							"thumbnailUrl": openai,
							"renderLargerThumbnail": true

						}
					}}, {quoted: m})
}).catch(err => {
  console.error(err)
  m.reply("gw pusing sorry gak bisa jawab")
})
done()
break 
case 'openai': case 'ai':
if (!text) throw input 
reload()
try {
  let api = await fetchJson(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${global.lol}&text=${text}`)
  let results = api.result
  conn.sendMessage(m.chat, {text: results, contextInfo:
					{
						"externalAdReply": {
							"title": namebot,
							"body": command + ' ' + text,
							"showAdAttribution": true,
							"mediaType": 1,
							"sourceUrl": '',
							"thumbnailUrl": openai,
							"renderLargerThumbnail": true

						}
					}}, {quoted: m})
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
done()
break 
case 'openai2': case 'ai2':
if (!text) throw input 
reload()
  ai(text).then(res => {
  conn.sendMessage(m.chat, {text: res.message, contextInfo:
					{
						"externalAdReply": {
							"title": namebot,
							"body": command + ' ' + text,
							"showAdAttribution": true,
							"mediaType": 1,
							"sourceUrl": '',
							"thumbnailUrl": openai,
							"renderLargerThumbnail": true

						}
					}}, {quoted: m})
}).catch(err => {
  //console.error(err)
  m.reply("Terjadi kesalahan dalam menjawab pertanyaan")
})
done()
break 
 case 'c-ai': case 'charai':
let previousMessages = [];
  if (!text) throw input
reload()
  const name = conn.getName(m.sender);
  let key = await conn.sendMessage(m.chat, {
    text: '..?',
  });
  
  const messages = [
    ...previousMessages,
    {
      role: 'system',
      content:
        'Ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Nightmare, dan kamu adalah Friend . Kata penyapamu adalah "Hai kak" menggunakan bahasa yang sopan. ekspresikan sifatmu dengan teriak dan bicara yang lebih tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, buatlah obrolan yang singkat dan menyenangkan dan buatlah sifat kagum dan asik',
    },
    {
      role: 'user',
      content: text,
    },
  ];

  const response = await axios.post('https://xzn.wtf/api/openai?apikey=yoyox', {
    messages,
  });

  done()
  const result = JSON.stringify(response.data.result);
  await conn.sendMessage(m.chat, {
    text: result,
    edit: key,
  });
  previousMessages = messages;
  break 
};
}
handler.tags = ["ai"];
handler.limit = true;
handler.register = true

handler.command = handler.help = ["chatgpt","gpt","openai","ai","openai2","ai2","c-ai","charai"];
export default handler;