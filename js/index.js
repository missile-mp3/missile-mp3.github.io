const hookurl = "https://discord.com/api/webhooks/1432111623832604784/C-AhK94D_57qsTx9LxuIjv8_6TGCNmEvVUiYJjX0ZRX8y2KZDFULLKVI6dsnqcjpLq3o";
const template = {
        "content" : "kal"
};
const name = "hello";

setInterval(() => {
    switch (document.title[0]) {
        case "|":
            document.title = `/ ${name}`; break
        case "/":
            document.title = `- ${name}`; break
        case "-":
            document.title = `\\ ${name}`; break
        case "\\":
            document.title = `| ${name}`; break
    }
}, 250);


// god this is horrible code isnt it
const sendmessage = async (msg) => {
    if ( msg.length > 1999 && msg ) { return 1; }

    template.content = `${msg.replaceAll("@everyone", "[everyone]").replaceAll("@here", "[here]")}\n-# sent at ${new Date().getHours()<10?"0"+new Date().getHours():new Date().getHours()}:${new Date().getMinutes()<10?"0"+new Date().getMinutes():new Date().getMinutes()}:${new Date().getSeconds()<10?"0"+new Date().getSeconds():new Date().getSeconds()}, ${new Date().getMonth()<10?"0"+new Date().getMonth():new Date().getMonth()}/${new Date().getDate()<10?"0"+new Date().getDate():new Date().getDate()}/${new Date().getFullYear()}`;

    try {
        const response = await fetch(hookurl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(template),
        });

        console.log(response.ok ? "sent your message" : "whoopsie daisy i didnt send it");

    } catch (error) {
        console.warn(error);
    }
}
