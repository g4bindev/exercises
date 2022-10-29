function binaryAgent(str) {
    // Separa cada binário pelo espaço entre eles e joga em uma array
    const convertBin = str.split(" ")

    // Converte todos os binários em ASCII Code, depois converte eles para Char e une tudo em uma string
    return convertBin.map(item => String.fromCharCode(parseInt(item, 2))).join("")
}

console.log(binaryAgent("01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001 00100001 00100001"))
// output: Hello World!!!