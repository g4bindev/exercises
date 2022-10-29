function myReplace(str, before, after) {
    // Splits the words of "str" into an array
    const splittedStr = str.split(" ")

    // Checks if "before" exists in the "str" parameter
    if(splittedStr.indexOf(before) == -1)
        return str
    
    // Checks if the first character of the "before" is lowercase or uppercase
    if(/^[A-Z]/.test(before) && !/^[A-Z]/.test(after)) {
        after = after.split("")
        after[0] = after[0].toUpperCase()
        after = after.join("")
    } else {
        after = after.toLowerCase()
    }

    // Search "before" in "str" and replace with "after"
    splittedStr.splice(splittedStr.indexOf(before), 1, after)

    return splittedStr.join(" ")
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
// expected output: "A quick brown fox leaped over the lazy dog"