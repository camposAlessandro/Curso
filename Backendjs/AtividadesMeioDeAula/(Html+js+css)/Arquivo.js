let dia = 0;
let mes = 1;
let ano = 10;

function aceito(dia = mes = ano) {
    if (dia <= 33 && mes <= 24 && ano <= 2025) return 'okk'
    return 'tente novamente'
}

console.log(aceito(dia = mes = ano))