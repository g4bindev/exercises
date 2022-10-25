Este algoritmo examina a propriedade de uma lista de objetos e retorna um boolean, true se caso o valor da propriedade for true, e false se for falso.

Exemplo:

1. [{name: "Quincy", role: "Founder", isBot: true}, {name: "Naomi", role: "", isBot: true}, {name: "Camperbot", role: "Bot", isBot: true}], "role" retorna false porquê o valor de uma propriedade entre a lista não está preenchida.

2. [{name: "Quincy", role: "Founder", isBot: true}, {name: "Naomi", role: "", isBot: true}, {name: "Camperbot", role: "Bot", isBot: true}], "name" retorna true, porquê todos os valores da propriedade "name" estão preenchidos.