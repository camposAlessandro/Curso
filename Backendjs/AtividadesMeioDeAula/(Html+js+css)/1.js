let salario = 1500;

const custo = [((salario / 100) * 115) + 300 + 450];
//Para caucular os 15% fiz desse modo pq tava sem net para ver um jeito mais facil
const custopj = (salario + 300);
const custocontrato = (salario + 450);


function podecontratar(custo) {
    if (custo >= 2400) return "Infezlimente não foi dessa vez!";
    if (custo >= 2000) return "Vamos entrar em contato!";
    return "Parabens voce foi contratado!";
}

//Meio que ele determina o valor total e caucula se voce pode ser ou nao contratado determinate ao valor da carteira de trabalho

console.log(podecontratar(custo));
console.log("o total do custo do funcionario se esse valor for para a carteira sera de ", custo);
console.log("o valor de custo de um funcionario pj sera", custopj);
console.log("o valor do salario por contrato sera de ", custocontrato);
// sistema para auxiliar empreendedores (mostra o custo total em determinado valor de carteira)