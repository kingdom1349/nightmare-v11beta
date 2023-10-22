import fetch from 'node-fetch'
import axios from 'axios'
import { search } from '../scraper/spotify.js'
  
let handler = async (m, { conn, usedPrefix, text, command }) => {
let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} kemarin `
	if (!text) return m.reply(input)
m.reply(wait)
search(text).then(result => {

const hasil = `乂 *S P O T I F Y*

*Title*: ${result.data[0].title}
*Duration*: ${result.data[0].duration}
*Popular*: ${result.data[0].popularity}
*Url*: ${result.data[0].url}
`
  conn.sendMessage(m.chat, {text: hasil, contextInfo:
					{
						"externalAdReply": {
							"title": namebot,
							"body": `${result.data[0].url}`,
							"showAdAttribution": true,
							"mediaType": 1,
							"sourceUrl": '',
							"thumbnailUrl": spotify,
							"renderLargerThumbnail": true

						}
					}}, {quoted: m})
					
   const spoDl = `https://spotifyku.my.id/download?url=${result.data[0].url}`
conn.sendMessage(m.chat, {audio: {url: spoDl}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
   }).catch(e => {
   m.reply(eror)
   })
  }
handler.help = ['spotify <link>']
handler.tags = ['downloader']
handler.command = /^(sp|spotify)$/i
handler.limit = true
handler.register = true

export default handler
/*
const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};


async function shortener(url) {
  return url;
}

async function Tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  let result = {};

  result.creator = "Tioxy";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}
*/