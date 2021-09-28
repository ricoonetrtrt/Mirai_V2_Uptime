module.exports.config = {
    name: "fast",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "JRT",
    description: "kiem tra toc do mang",
    commandCategory: "Hệ thống",
    cooldowns: 15,
    dependencies: {
		"fast-speedtest-api": ""
	}
};

module.exports.run = async function({ api, event }) {
	try {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
		return api.sendMessage(
			"=== Result ===" + 
			"\n- Speed: " + resault + " Mbps",
			event.threadID, event.messageID
		);
	}
	catch {
		return api.sendMessage("Không th? speedtest ngay lúc này, hãy th? l?i sau!", event.threadID, event.messageID);
	}
}