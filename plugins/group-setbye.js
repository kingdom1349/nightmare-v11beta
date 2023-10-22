let handler = async (m, { conn, text, isROwner, isOwner }) => {
	if (text) {
		if (isROwner) global.conn.bye = text;
		else if (isOwner) conn.bye = text;
		else global.dbSucceed.data.chats.sBye = text;
		m.reply("Succeed");
	} else throw "the text?";
};
handler.help = ["setbye"];
handler.tags = ["group"];
handler.command = /^setbye$/i;
handler.group = true;
handler.admin = true;

export default handler;
