/**
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;
 */

function reverseString(string) {
  let invertedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  return invertedString;
}

const myString = "Teste técnico em Javascript";
const myInvertedString = reverseString(myString);

console.log("String original: ", myString);
console.log("String invertida: ", myInvertedString);
