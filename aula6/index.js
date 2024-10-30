function chamaPrimeiro (){
    console.log ('Chama essa primeiro')
}

function chamaDepois () {
    console.log('Entrou na segunda função')
    chamaPrimeiro();
}


function recebePrimeira (primeirafuncao) {
    primeirafuncao()
}

recebePrimeira(chamaPrimeiro);