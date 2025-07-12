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
