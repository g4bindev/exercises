function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    // Gets the original part of the parameter to extract the missing letter
    const truePart = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1]) + 1)
    
    // Find the missing letter by comparing the characters of "truePart" with "str"
    for(let char in truePart) {
        if(truePart[char] !== str[char]) {
            return truePart[char]
        }
    }

   // If "truePart" and "str" are equal then return "undefined"
    return undefined
}

console.log(fearNotLetter("abdefg"))
// expected output: "c"