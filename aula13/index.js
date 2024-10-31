const meusdados = {
    nome: 'Adriana',
    sobrenome:'Camargos',
    moranoBrasil: true,
    idade: 48,
    pegaDocumento: () => {
        console.log ('CPF: 001002003-06')
    }
};

//verificando se objeto possui determinado valor

function objetoPossuiValor (valorDaChave) {
    const valoresDoObjeto =  Object.values(meusdados)
    return valoresDoObjeto.includes(valorDaChave)
}

console.log (objetoPossuiValor('Adriana'))
console.log (objetoPossuiValor('Camargos'))
console.log (objetoPossuiValor(true))
console.log (objetoPossuiValor(48))
console.log ('--------------------------------')
console.log (objetoPossuiValor('Maria'))
console.log (objetoPossuiValor('Santos'))
console.log (objetoPossuiValor(false))
console.log (objetoPossuiValor(17))
console.log ('--------------------------------')

function objetoPossuiChave (nomeDaChave) {
    const valoresDoObjeto =  Object.keys(meusdados)
    return valoresDoObjeto.includes(nomeDaChave)
}
console.log (objetoPossuiChave('nome'))
console.log (objetoPossuiChave('sobrenome'))
console.log (objetoPossuiChave('moranoBrasil'))
console.log (objetoPossuiChave('idade'))
console.log ('--------------------------------')

console.log (objetoPossuiChave('Nome'))
console.log (objetoPossuiChave('Sobrenome'))
console.log (objetoPossuiChave('MoranoBrasil'))
console.log (objetoPossuiChave('Idade'))

meusdados.pegaDocumento()
console.error ('Deu ruim')
console.info ('Informação Importante')
console.warn ('ATENÇÃO')
