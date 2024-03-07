// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será
//a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
//escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci
//e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function isFibonacci(num) {
  let a = 0;
  let b = 1;
  let c = a + b;

  if (num === 0 || num === 1) {
    console.log("O número informado pertence a sequência de Fibonacci");
    return;
  }

  while (c <= num) {
    if (c === num) {
      console.log("O número informado pertence a sequência de Fibonacci");
      return;
    }
    a = b;
    b = c;
    c = a + b;
  }

  console.log("O número informado não pertence a sequência de Fibonacci");
}

//EXEMPLO
const numCheck = 10;

isFibonacci(numCheck);
