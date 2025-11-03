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
    

 
    












