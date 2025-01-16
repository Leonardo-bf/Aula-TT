/*
Exercício 2
Dado dois arrays de strings, Utilize os métodos de manipulação de
array para colocar as palavras em um único array com ordem alfabética de 
palavras.(Não utilize bibliotecas ou algoritmos de ordenação, o foco é fixar
os métodos de manipulação brutos)

palavras1 = ["Flamengo", "Vasco", "Fluminense", "Botafogo"]
palavras2 = ["Avaí", "São Paulo", "Palmeiras", "Coritiba"]

*/

let auxiliar = []
palavras1 = ["Flamengo", "Internacional", "Fortaleza", "Botafogo"]
palavras2 = ["Avaí", "São Paulo", "Palmeiras", "Coritiba"]

auxiliar[0] = palavras1[3]
palavras1.pop()
palavras1.unshift(auxiliar[0])
auxiliar[0] = palavras1[3]
palavras1.pop()
auxiliar[1] = palavras1[2]
palavras1.pop()
palavras1.push(auxiliar[0])
palavras1.push(auxiliar[1])

palavras2.shift()
palavras2.push("Avaí");
let times = palavras1.concat(palavras2)


auxiliar[0] = times[7]
times.pop()
auxiliar[1] = times[6]
times.pop()
auxiliar[2] = times.shift()
times.unshift(auxiliar[1])
times.unshift(auxiliar[2])
times.unshift(auxiliar[0])

auxiliar[0] = times[7]
auxiliar[1] = times[6]
times.pop()
times.pop()
times.push(auxiliar[0])
times.push(auxiliar[1])
console.log(times)
