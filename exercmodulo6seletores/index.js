
    // Mudar o texto do título
    const titulo = document.getElementById('titulo');
    titulo.textContent = 'Novo Título';

    // Alterar o estilo dos itens da lista
    const itensLista = document.querySelectorAll('#lista li');
    itensLista.forEach(item => {
      item.style.color = 'green';
      item.style.fontWeight = 'bold';
    });

    // Adicionar uma classe a todos os parágrafos
    const paragrafos = document.querySelectorAll('p');
    paragrafos.forEach(paragrafo => {
      paragrafo.classList.add('paragrafo-estilizado');
    });

    // Alterar o texto do botão
    const botao = document.getElementById('botao');
    botao.textContent = 'Botão Alterado';