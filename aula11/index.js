const cores = ['preto', 'branco']
console.log (cores)
console.log (cores [1])
console.log (cores[0])
console.log ('quantidade de elementos', cores.length)
console.log (cores.indexOf('preto'))
console.log (cores.indexOf('branco'))
console.log (cores.indexOf('vermelho'))
cores.push ('vermelho')
console.log (cores.indexOf[0])
console.log (cores)
console.log (cores.length)
console.log (cores.indexOf('vermelho'))
console.log (cores.indexOf('azul'))
cores.push ('azul')
console.log (cores)
console.log (cores.length)
cores.shift()
console.log(cores)
cores.unshift('preto')
console.log (cores)
cores.pop()
console.log (cores)

function removecor (nomedacor) {
        const posicaodacor = cores.indexOf(nomedacor)
        if (posicaodacor >=0) {    
          cores.splice(posicaodacor,1)
        }
        console.log(cores)
    }        


removecor ('branco')
removecor('vermelho')
removecor('vermelho')