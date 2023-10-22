//import fetch from "node-fetch"
export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
    let name = await this.getName(who)
    let id = m.chat
    if (id in this.autosholat) {
        return false
    }
    let data = await (await fetchJson("https://api.aladhan.com/v1/timingsByCity?city=Lubuklinggau&country=Indonesia&method=8"))
    let jadwalSholat = data.data.timings;
    /*let jadwalSholat = {
      Fajr: "04:49",
      Sunrise: "06:04",
      Dhuhr: "12:06",
      Asr: "15:21",
      Sunset: "18:08",
      Maghrib: "18:08",
      Isha: "19:38",
      Imsak: "04:39",
      Midnight: "00:06",
      Firstthird: "22:07",
      Lastthird: "02:06"
    }*/
    const date = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
        let caption = `Hai kak ${name},\nSekarang sudah waktunya *${sholat}* telah tiba, Segera bergegas ambil air wudhu dan lakukan sholat 😊.\n\n*${waktu}*\n_untuk wilayah Lubuklinggau dan sekitarnya._`
            this.autosholat[id] = [
                this.reply(m.chat, caption, null),
                setTimeout(() => {
                    delete this.autosholat[id]
                }, 57000)
            ]
        }
    }
}
export const disabled = false