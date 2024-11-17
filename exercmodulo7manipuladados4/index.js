// Estrutura inicial do feed (array de objetos)
let feed = [];

// Elementos do DOM
const postButton = document.getElementById('postButton');
const postText = document.getElementById('postText');
const postList = document.getElementById('postList');

// Função para obter uma imagem de gatinho aleatória da API
const fetchCatImage = async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url; // Retorna o URL da imagem do gatinho
  } catch (error) {
    console.error('Erro ao buscar imagem de gatinho:', error);
    return 'https://via.placeholder.com/200'; // Caso a imagem falhe, retorna uma imagem de placeholder
  }
};

// Função para exibir as postagens no feed
const renderFeed = () => {
  postList.innerHTML = ''; // Limpar feed antes de renderizar novamente

  // Organiza o feed da mais recente para a mais antiga
  const sortedFeed = [...feed].sort((a, b) => new Date(b.date) - new Date(a.date));


  // Renderiza as postagens
  sortedFeed.forEach(post => {
    const postItem = document.createElement('li');
    postItem.classList.add('post-item');

    // Cria a postagem
    postItem.innerHTML = `
      <img src="${post.avatar}" alt="${post.username}" width="50" height="50">
      <div class="post-text">
        <strong>${post.username}</strong>
        <p>${post.text}</p>
        <img src="${post.catImage}" alt="Imagem de gatinho" width="200" height="200">
        <div class="post-meta">
          <button class="like-button" onclick="likePost('${post.id}')">Curtir</button>
          <span class="like-count">${post.likes} curtidas</span>
        </div>
      </div>
    `;

    postList.appendChild(postItem);
  });
};

// Função para adicionar uma nova postagem
const addPost = async () => {
  const text = postText.value.trim();

  if (text === '') {
    alert('Você precisa escrever algo!');
    return;
  }

  // Pega a imagem do gatinho
  const catImage = await fetchCatImage();
  const post = {
    id: Date.now(), // Usando timestamp como id único
    date: new Date().toISOString(),
    username: 'Usuário123', // Nome de usuário fixo para simplificação
    avatar: 'https://i.pravatar.cc/150?img=1', // Avatar fixo
    text: text,
    catImage: catImage, // Imagem do gatinho
    likes: 0, // Inicialmente, 0 curtidas
  };

  feed.push(post); // Adiciona a nova postagem ao feed

  postText.value = ''; // Limpa a textarea

  renderFeed(); // Atualiza o feed
};

// Função para dar like em uma postagem
const likePost = (postId) => {
  const post = feed.find(p => p.id === parseInt(postId));
  if (post) {
    post.likes++;
    renderFeed(); // Atualiza o feed com o novo número de curtidas
  }
};

// Adiciona o evento de clique no botão de postar
postButton.addEventListener('click', addPost);

// Inicializa o feed renderizando-o
renderFeed();
