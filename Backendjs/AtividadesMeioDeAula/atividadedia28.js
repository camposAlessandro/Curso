const alunos = [
{nome:"Jow",nota:9.0},
{nome:"Arron",nota:7 },
{nome:"Juca", nota:6},
{nome:"Morfeus", nota:8}
];

const aprovados=alunos.filter(a => a.nota >= 7);
const recuperaçao= alunos.filter(b => b.nota <=6)
console.log("Aprovados")
console.log(aprovados);
const notaAprovados = aprovados.map(aprovados => aprovados.nota);

const media = notaAprovados.reduce((acc,nota)=> acc+nota,0)/3;
console.log('----------------------------------');
console.log("-Recuperaçao")
console.log(recuperaçao )
console.log('----------------------------------');
console.log("A media das notas são aprovadas sao " + media .toFixed(2))
