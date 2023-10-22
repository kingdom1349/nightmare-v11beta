let handler  = async (m, { conn }) => {

let cap = `Script nightmare Bot bisa di beli dengan menghubungi nomor di bawah

Nope dana : ${global.pdana}
wa.me/${global.nomerown}

*Note* : Kirim bukti transfer untuk segera di proses pembelian script
`

 await conn.relayMessage(m.chat, { requestPaymentMessage: {
					currencyCodeIso4217: "IDR",
					amount1000: 10000000,
					requestFrom: m.sender,
					noteMessage: {
						extendedTextMessage: {
							text: cap,
						}
					},
					expiryTimestamp: 999999999,
					amount: {
						value: 91929291929,
						offset: 1000,
						currencyCode: "IDR"
					}
				}}, {})
}
handler.customPrefix = /^(sc|script)$/i
handler.command = new RegExp

export default handler