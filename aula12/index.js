const meusdados = {
    nome: 'Adriana',
    sobrenome:'Camargos',
    moranoBrasil: true,
    idade: 48
}

console.log (meusdados);
console.log (meusdados.nome);
console.log (meusdados ['sobrenome']);

function retornadadopessoal (dadopessoal){
    return (meusdados[dadopessoal])
}

console.log (retornadadopessoal('sobrenome'))
console.log (retornadadopessoal('moranoBrasil'))
console.log (retornadadopessoal('idade'))