//Sistema simples de gerenciamento de Estoque de uma Livraria
//cria array para listar Livros no estoque
let EstoquedeLivros = []

//função para adicionar Livros no estoque
function adicionaLivro (titulo,autor,quantidade){
//verifica se o livro já existe no estoque
         let livroexistente = EstoquedeLivros.find (livro => livro.titulo === titulo);
         if (livroexistente) {
            console.log ('Este livro já existe no Estoque. Se optar por adicioná-lo, atualize a quantidade')
         }  else{
            //adiciona o novo livro ao Estoque
            EstoquedeLivros.push ({titulo, autor, quantidade});
            console.log (`Livro "${titulo}" foi adicionado ao Estoque.`);
         }
}
 //função para remover um Livro do Estoque
function removeLivro (titulo){
    //encontra o índice do Livro a ser removido
    let indice = EstoquedeLivros.findIndex (livro => livro.titulo === titulo);
    if (indice !== -1) {
        EstoquedeLivros.splice(indice, 1);
        console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
        console.log("Livro não encontrado no estoque.");
    }
    }

function atualizaQuantidade (titulo, novaquantidade) {
    let livroExistente = EstoquedeLivros.find(livro => livro.titulo === titulo);
    
    if (livroExistente) { //condição para livros existentes no estoque
        livroExistente.quantidade = novaquantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaquantidade}.`);
    } else {
        console.log("Livro não encontrado no estoque."); //condição para livro que não existe no Estoque.
    }
}
//função listar Livros no Estoque 
function ListaLivros () {
    if (EstoquedeLivros.length === 0) {
        console.log("Estoque vazio.");
    } else {
        console.log("Lista de livros no estoque:");
        EstoquedeLivros.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        });
    }
}

//TESTES DO SISTEMA

adicionaLivro("O Alquimista", "Paulo Coelho", 10);
adicionaLivro("1984", "George Orwell", 5);
ListaLivros();
atualizaQuantidade("1984", 8);
removeLivro("O Alquimista");
ListaLivros();
adicionaLivro ('O Lobo da Estepe', 'Hermann Hesse', 2);
adicionaLivro ('O sitio do Pic Pau Amarelo', 'Monteiro Lobato', 3);
ListaLivros ();