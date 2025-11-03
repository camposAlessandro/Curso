//Escreva  um  programa  que  solicite  ao  usuário  dois  números  e  exiba  a  soma,  subtração, 
//multiplicação e divisão entre eles
//o number serve para que o usuario digite apenas numero ou avera erro
// prompt serve para chamar a operaçao
// a function serve para saber oque vai acntecer 
// o switch serve de uma forma mais simplificada de qual vai entrar e como vai caucular
// n1 n2 n3 serve para o usuario escoler 1 numero para determinar a operaçao que ele deseja executar 
// o alerte e uma caixa que nao pode ser insirida nada ent, serve para mostrar o resultado da operaçao
//os case pega o numero selecionado pelo usuario e caucula, pode ser insirido a mensagem ou cauculo no return, ou gerar uma const para salvar as informaçoes


const num1 = Number(prompt('iforme o primeiro número'));
const num2 = Number(prompt('informe o segundo número'));

const operaçao = Number(prompt('oque você deseja fazer' + 
    "\n[1] Somar" + " \n[2]Dividir"+ " \n[3] Mutiplicar" + " \n[4] subtrair"));
    
    function operaçãomatematica(operaçao){
        switch(operaçao){
            case 1:
                return num1 + num2;
            case 2:
                return num1 / num2 .toFixed;
            case 3:
                return num1 * num2;
            case 4:
                return num1 - num2 .toFixed;
                default:
                    return 'Inaudivel' 
         
            }
        }
    alert("Resultado  " + operaçãomatematica(operaçao));
    