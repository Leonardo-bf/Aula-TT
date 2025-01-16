/*
Exercício 1
Calcule a tabuada dos número do array abaixo

[1, 2, 3, 4, 5, 6]
*/ 

let numeros = [1, 2, 3, 4, 5, 6]

let i = 0

while(i<5){
    console.log("Tabuada de " + numeros[i] + ":")
    for(let j = 1; j <11; j++){
        console.log(numeros[i] * j)
    }
    i++
}