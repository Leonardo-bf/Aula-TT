/*
    Aqui estão os comandos utilizados na aula de JavaScript
    Será disponibilizado junto da aula no github
*/  

// Imprimindo valores
//console.log("Hello World!")

// Declaração de Variáveis

var prova;
let teste;
const disciplina = "programação";

// Operadores aritméticos

let soma = 2 + 2; // Soma é 4
let subtracao = 5 - 2; // Subtração é 3
let multiplicacao = 2 * 2; // Multiplicação é 4
let divisao = 10 / 5; // Divisão é 2
let mod = 3 % 2; // Resto da divisão inteira é 1
let pot = 3 ** 2; //Potência é 9
//outra forma de potencia:
pot = Math.pow(3,2); // Potência também é 9
let raiz = 4 ** (1/2) //raiz é 2
//outra forma de raiz:
rad = Math.sqrt(4,2) // raiz também é 2
soma++ //incremento
soma-- //decremento
//atribuição com operação:
soma += 5; //soma = soma + 5
soma -= 5; //soma = soma - 5
soma *= 5; //soma = soma * 5
soma /= 5; //soma = soma / 5
subtracao **= 2; //soma = soma ** 2

//Operadores de Comparação

let igual = (2==2); // true
let diferente = (2!=3); // false
let maior = 2 > 3; // false
let menor = 2 < 3; // true
let maiorIgual = 2 >= 1 ;//true
let menorIgual = 2 <= 1 ;//false

//Operadores Lógicos

let ou = (menor || maior);
let e = (maior && diferente);
//console.log(ou);
//console.log(e);

//Escopo de Variáveis:

let matricula = 122115986;//global

{
    let nota1 = 9;//Local
    let nota2 = 8;//Local
}

//Tipos de Variáveis:

let objeto = {propriedade: "valor", propriedade2: "valor2"}
let array = [0, 2, "Gabriel", "Bruno"]
let string = "string";
let numberInt = 23;
let numberFloat = 1.5
let boolean = true;

function imprimirValor (valor) {
    //console.log(valor);
    return;
}

let imprimirValor2 = (valor) => {console.log(valor)}
imprimirValor(typeof array)
imprimirValor(numberFloat)
//imprimirValor2(numberFloat)

//Case Sensitive

let num = 1
let Num = 2
//console.log(num == Num)

//parseInt e parseFloat

let id = "123456ab"
let idFix = parseInt(id)
console.log(idFix)

let id2 = "7.89bc"
let id2Fix = parseFloat(id2)
console.log(id2Fix)


//Criação e Manipulação de Arrays

let toDoList = ["Estudar JS I", "Fazer exercícios do TT","Chorar um pouco", 
    "Fazer mais exercícios do TT" ]

toDoList[0] = "Estudar JS II"

let toDoList2 = ["Participar da RG", "Jogar LOL"]

toDoList = toDoList.concat(toDoList2)

toDoList2.push("Dormir um pouco")
toDoList2.pop();
toDoList.unshift("Acordar")
toDoList.shift()

let numeros = [1, 2, 3, 4, 5];
let dobro = numeros.map(function(numeros){
    return numeros * 2
});
let numeroGrande = numeros.filter(function(numeros){
    return numeros > 3;
})
let numeroSoma = numeros.reduce(function(total, numeros){
    return total + numeros
}, 0)

let numeroEncontrado = numeros.find(function(numeros){
    return numeros == 3
})

let incluiDois = numeros.includes(2);

//if else

teste = 5

if(teste >= 7){
    console.log("Aprovado")
} else{
    console.log("Nota Insuficiente, faça a PF")
}

//ternário
teste >= 6 ? console.log("Aprovado") : 
console.log("Nota insuficiente, Faça a PF")

//for

for(let i = 0; i<3; i++){
    console.log("Estudar")
    console.log("Dormir")
}

//Do While
let i = 0
do{
    console.log("Jogar")
    i+=1
}while(i<5)

//While
let j = 0
while(j<10){
    console.log(j * 2)
    j++
}