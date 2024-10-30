const Todomundove = 'Todo mundo vê esta variável de escopo global'

function executaescopoglobal() {
    console.log (Todomundove)
}

function executaescopolocal () {
    const visivelemescopolocal =  'Só quem está dentro  do bloco da função vê esta variável de escopo local'
    console.log(visivelemescopolocal)
    
    
    function chamadentrodoescopo () {
        console.log ('Dentro do escopo=>', visivelemescopolocal)
        const dentrodolocal = false;
        console.log (dentrodolocal)
    }
chamadentrodoescopo (); 

}

executaescopoglobal();

executaescopolocal();