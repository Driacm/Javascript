// Array para armazenar os nomes das pessoas que curtiram
let likes = [];

// Elementos do DOM
const nameInput = document.getElementById('nameInput');
const likeButton = document.getElementById('likeButton');
const likeStatus = document.getElementById('likeStatus');

// Função para atualizar a mensagem de curtidas
const updateLikeStatus = () => {
  if (likes.length === 0) {
    likeStatus.textContent = 'Ninguém curtiu';
  } else if (likes.length === 1) {
    likeStatus.textContent = `${likes[0]} curtiu`;
  } else if (likes.length === 2) {
    likeStatus.textContent = `${likes[0]} e ${likes[1]} curtiram`;
  } else {
    likeStatus.textContent = `${likes[0]}, ${likes[1]} e mais ${likes.length - 2} pessoas curtiram`;
  }
};

// Função para lidar com o clique no botão "Curtir"
likeButton.addEventListener('click', () => {
  const name = nameInput.value.trim();

  if (name === '') {
    alert('Por favor, digite um nome.');
    return;
  }

  // Verifica se o nome já está na lista de curtidas
  if (!likes.includes(name)) {
    likes.push(name); // Adiciona o nome à lista de curtidas
    nameInput.value = ''; // Limpa o campo de texto
    updateLikeStatus(); // Atualiza o texto de curtidas
  } else {
    alert('Você já curtiu!');
  }
});
