let handler = async (m, { conn }) => {
let sewa = `
Untuk sewa silahkan konfirmasi dengan owner
Ketik .owner 
List harga
• 10k/minggu
• 15k/bln
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|prem|premium)$/i

export default handler