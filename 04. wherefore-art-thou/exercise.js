function whatIsInAName(collection, source) {
    const sourceKey = Object.keys(source)

    return collection.filter(obj => {
        for(let i = 0; i < sourceKey.length; i++) {
            if(!obj.hasOwnProperty(sourceKey[i]) || obj[sourceKey[i]] !== source[sourceKey[i]]) {
                return false
            }
        }
        return true
    })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// expected output: { first: "Tybalt", last: "Capulet" }