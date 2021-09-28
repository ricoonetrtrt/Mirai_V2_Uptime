
module.exports.config = {
    name: "restart",
    version: "2.0.2",
    hasPermssion: 1,
    credits: "Mirai Team mod by Jukie",
    description: "Tag liên tục 10 lần",
    commandCategory: "Nhóm",
    usages: "tag",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=calendar`);
var hour = res.data.data.time.hour;
var minute = res.data.data.time.minute;
var second = res.data.data.time.second;
if(args.length == 0) api.sendMessage("⚡️Vui lòng chờ 1p...",event.threadID, () =>process.exit(1))
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`⚡️Bot sẽ khỏi động lại sau: ${time}s\n⚡️Bây giờ là: ${hour}:${minute}:${second} `, threadID), 0)
setTimeout(() =>
api.sendMessage("⚡️Đang bắt đầu quá trình khỏi động lại",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
}