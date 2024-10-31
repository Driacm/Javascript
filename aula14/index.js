const fibonacci = [1,1,2,3,5,8,13,21,34]



function iteraSobreoArray (){
    for  (let i=0; i< fibonacci.length; i++ ) {
        console.log (i+1,'o item', fibonacci[i])
    
    }

}

iteraSobreoArray()
console.log ('------------------------------')

function contaAte (numero) {
    for (let conta=1;conta<= numero; conta++){
        console.log ('Mariana conta', conta);
    }
}

contaAte (10)
console.log ('-------------------------------')
contaAte(2)
console.log ('------------------------------')
contaAte(5)
console.log ('-------------------------------')

function verificaitemNoArray (Listadenumeros) {
    for (let item of Listadenumeros) {
        console.log (item)
    }
}

verificaitemNoArray (fibonacci)
console.log ('-----------------------------')

function verificaitemporIndice (Listadenumeros) {
    for (let indice in Listadenumeros) {
        console.log (Listadenumeros[indice])
    }
}

verificaitemporIndice (fibonacci)
console.log('---------------------------------')

function contaPeloMenosUmAte (numerolimite) {
    let numero = 0;
    do {
        console.log (numero)
        numero ++;
    } 
    while (numero <= numerolimite)
}

contaPeloMenosUmAte (1)
contaPeloMenosUmAte (0)

function verificasePodeAte (numerolimite) {
    let numero = 0;
    while (numero <= numerolimite){
        console.log (numero);
        numero++;
    }
}
 verificasePodeAte (5)
 verificasePodeAte (1)
 verificasePodeAte (0)