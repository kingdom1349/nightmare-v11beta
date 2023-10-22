let haked = `





















HEMGKER BY TIO (gk tau cara matiin nya bjir wkwk) 














































`

let handler = async (m, { conn }) => {

conn.relayMessage(m.chat, {
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: haked
}
}, {})
}
handler.command = ['hacked']
handler.owner = true 
export default handler