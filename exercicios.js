//Exercício 1: 
//Dado um valor string "1234", converta-o em um número inteiro 
const num = "1234";
const numConvertido = Number(num);
console.log(numConvertido);
console.log(typeof num);
console.log(typeof numConvertido);

//Exercício 2:
//Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.
const JS = "JavaScript é incrivel"; 
const num_caracteres_JC = JS.length;
const num_palavras_JS = JS.split(" ").length;
console.log(`Número de caracteres: ${num_caracteres_JC}`); // Número de caracteres: 23
console.log(`Número de palavras: ${num_palavras_JS}`); // Número de palavras: 3


//Exercício 3:
//Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.
const nomes = ["Ana", "Paula", "Gabriela", "Beatriz", "joana"];
console.log(nomes.length);
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}