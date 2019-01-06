async function getSheetHTML() {
    return fetch("https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/18gdu6Mi2vchsy9fS9B6QrYUKfwsMV9pVnCncUVkjdAY", {
        mode: "cors",
        referrer: "kryptosrovnavac.cz"
    }).then(res => res.text());
}

function extractTableAndStylesFromHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const table = doc.querySelector("tbody");
    const styles = doc.querySelector("style:nth-child(5)");
    return { table, styles };
}

async function main() {
    getSheetHTML().then(extractTableAndStylesFromHTML).then(console.log);
}

main();