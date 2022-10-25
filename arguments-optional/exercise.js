function addTogether() {
    // Setup
    const [first, second] = arguments

    // Checa se o primeiro argumento não é um número
    if(typeof(first) !== "number") {
        return undefined
    }

    // Recursão para agrupar os argumentos em uma só função
    if(arguments.length == 1) {
        return (second) => addTogether(first, second)
    }

    // Checa se o segundo argumento não é um número
    if(typeof(second) !== "number") {
        return undefined
    }

    // Retorna a soma do primeiro argumento com o segundo
    return first + second
}

console.log(addTogether(2)(5))
// output: 7