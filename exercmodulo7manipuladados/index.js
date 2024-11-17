// Função para obter a lista de curtidas do localStorage
function getCurtidas() {
  const curtidas = localStorage.getItem('curtidas');
  return curtidas ? JSON.parse(curtidas) : [];
}

// Função para salvar a lista de curtidas no localStorage
function saveCurtidas(curtidas) {
  localStorage.setItem('curtidas', JSON.stringify(curtidas));
}

// Função para atualizar a lista de curtidas no parágrafo
function atualizarLista() {
  const curtidas = getCurtidas();
  const listaCurtidasElement = document.getElementById('lista-curtidas');

  // Condicionais para atualizar a lista de curtidas dependendo da quantidade
  if (curtidas.length === 0) {
      listaCurtidasElement.textContent = 'Ninguém curtiu';
  } else if (curtidas.length === 1) {
      listaCurtidasElement.textContent = `${curtidas[0]} curtiu`;
  } else if (curtidas.length === 2) {
      listaCurtidasElement.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
      // Usando "pessoa(s)" de forma mais dinâmica
      listaCurtidasElement.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} pessoa${curtidas.length - 2 > 1 ? 's' : ''} curtiram`;
  }
}

// Atualiza a lista de curtidas quando a página é carregada
window.onload = function() {
  atualizarLista();
};

// Adicionando o evento de clique no botão "Curtir"
document.getElementById('curtir').addEventListener('click', function() {
  const nome = document.getElementById('nome').value.trim();
  const curtidas = getCurtidas();

  // Verifica se o nome não está vazio e não está duplicado
  if (nome && !curtidas.includes(nome)) {
      curtidas.push(nome);
      saveCurtidas(curtidas);
      atualizarLista();
  }

  // Limpa o campo de texto, se o nome foi válido
  if (nome) {
      document.getElementById('nome').value = '';
  }
});

// Adicionando o evento de clique no botão "Limpar"
document.getElementById('limpar').addEventListener('click', function() {
  localStorage.removeItem('curtidas');
  atualizarLista();
});
