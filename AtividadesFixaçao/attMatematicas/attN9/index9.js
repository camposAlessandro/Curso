let largura= Number(prompt("Insira a largura do triangulo"));
let comprimento = Number(prompt("insira o comrpimento do triangulo"));

const perimetro= 2* (largura+comprimento);
const area = largura* comprimento;

alert("Perimetro de " + perimetro +
    "   area de "+ area);