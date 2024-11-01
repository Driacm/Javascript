function chamar (segundosdeAtraso) {
    console.log (`Atrasou ${segundosdeAtraso} segundos`)
}

function chamaAtrasado (funcaodeAtraso, quantidadedeAtraso) {
    setTimeout (()=>funcaodeAtraso(quantidadedeAtraso), quantidadedeAtraso*10)

}

chamaAtrasado (chamar,1)

function chamarcomIntervalo (funcaodeIntervalo, intervalo) {
    setInterval(() => funcaodeIntervalo(intervalo), intervalo * 1000)
}
 chamarcomIntervalo (chamar,2)
 
