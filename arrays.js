//1 - Manipulações de Arrays

const frutas = ["maça" , "Acerola"];
frutas.unshift("laranja"); //Add elementos no comeco da lista
console.log(frutas);
frutas.shift(frutas);
console.log(frutas); //Remove primeiro elemento da lista

// 1.1 - map, filter, reduce -> Arrow function

//find -> retorna o primeiro elemento  criterio
const numeros = [1, 2, 3, 4, 5, 6];
const num_par = numeros.find((num) => num % 2 === 0);
console.log(num_par);
//filter -> retorna todos elementos
const num_pares = numeros.filter((num) => num % 2 === 0);
console.log(num_pares);

// 1.2 manipulação de string
const frase = "         ola, mundo!!!!    "
const palavras =  frase.trim().split(); //tira os espaços
console.log(frase);
console.log(palavras);

const frase2 = "JavaScript é incrível!"
console.log(frase2.startsWith("Java")); //verifica padroes no começo da frase
console.log(frase2.startsWith("lala")); //verifica padroes no começo da frase
console.log(frase2.endsWith("!")); //verifica padroes no fim da frase

// 1.3 exceções etratamento de erros
const idade = 15;


//if(idade < 18){
//    throw new Error("Você deve ter mais de 18 anos"); //programa é encerrado
//} 
