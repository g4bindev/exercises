function truthCheck(collection, pre) {
    // Loop que entra em todos os objects e checa se são verdadeiros ou falsos
    for(let objectInd in collection) {
        if(!collection[objectInd].hasOwnProperty(pre) || !collection[objectInd][pre]) {
            return false
        }
    }

    return true
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"))
// output: false