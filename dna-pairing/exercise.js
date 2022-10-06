function pairElement(str) {
    // Divides the characters of the "str" parameter in an array
    const splittedStr = str.split("")

    // Checks each element of "splittedStr" and arranges them according to each DNA pair
    for(const element in splittedStr) {
        switch(splittedStr[element]) {
            case "A":
                splittedStr[element] = ["A", "T"]
                break
            case "T":
                splittedStr[element] = ["T", "A"]
                break
            case "C":
                splittedStr[element] = ["C", "G"]
                break
            case "G":
                splittedStr[element] = ["G", "C"]
                break
        }
    }

    return splittedStr
}

console.log(pairElement("ATCGA"))
// expected output: [["A", "C"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]