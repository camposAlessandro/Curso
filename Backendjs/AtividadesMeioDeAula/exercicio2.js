const nome = prompt('Informe seu nome:');
alert(`Olá, ${nome}. Seja bem-vindo(a)!`)
const confirmar = confirm('Você tem 16 anos ou mais?');


if (confirmar) {
    console.log('Você pode votar');
} else {
    console.log('Você não pode votar');
}

const numero = prompt('Informe um número:');
const numero2 = prompt('Informe um novo número:');

const soma = Number(numero) + Number(numero2)

alert(`Soma dos números ${soma}`);