function convertHTML(str) {
    // Splits the characters of "str"
    const splittedStr = str.split("")
    
    // List of HTML entities for character conversion
    const convertChar = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }

    // Finds the HTML entities and converts them
    for(const char in splittedStr) {
        if(convertChar.hasOwnProperty(splittedStr[char])) {
            splittedStr[char] = convertChar[splittedStr[char]]
        }
    }

    return splittedStr.join("")
}

console.log(convertHTML("Dolce & Gabbana"))
// expected output: "Dolce &amp; Gabbana"