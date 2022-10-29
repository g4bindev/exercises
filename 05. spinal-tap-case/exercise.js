function spinalCase(str) {
    // Filter words in an array
    const matchWords = str.match(/[A-Za-z][a-z]+/g)

    // Returns the join of words with "-" and converts to lowercase
    return matchWords.join("-").toLowerCase();
}

console.log(spinalCase('AllThe-small Things'))
// expected output: "all-the-small-things"