function translatePigLatin(str) {
    const splitStr = str.split("");

    // Checks if the first character of str is a vowel
    if(/^[aeiou]/.test(str)) {
        splitStr.push("way")

        return splitStr.join("")
    }
    
    // For each consonant cluster at the beginning of str add it to the end
    for(let c = 0; c < str.length; c++) {
        if(!/[aeiou]/.test(str[c])) {
            splitStr.push(str[c])
            splitStr.shift()
        } else {
            break
        }
    }
    
    splitStr.push("ay")
    return splitStr.join("")
}

console.log(translatePigLatin("glove"));
// expected output: oveglay