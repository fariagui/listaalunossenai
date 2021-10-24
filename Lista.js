let numeroAlunos = 5;
let listaAlunos = ["Marina","Frederico","Victor","Ismael","Pablo"];


for(let contador = 0; contador < listaAlunos.length; contador++){
    //console.log(contador)
    if(contador == 0 ){
        console.log (contador + ": ZERO");//concatenação
    }else if (contador % 2 == 1 ){
        console.log(`${contador} : Ímpar`);// interpolação - Template strings
    }else {
        console.log(`${contador} : PAR`)
    }



}//declaração da variavel contadora, apartir do 0 até 5 e conta 1 por 1