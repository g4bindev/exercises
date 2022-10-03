Este algoritmo recebe um array com uma lista de objetos e um objeto de filtragem como segundo parâmetro. Então ele faz uma busca no primeiro parâmetro para saber se o segundo existe e retorna ele.

Exemplo:

[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }] e { "apple": 1 } deve retornar [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }] porquê todos os objetos da array possuem "apple: 1"