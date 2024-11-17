// Função para buscar usuários na API do GitHub
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.trim();
    const userList = document.getElementById('userList');
    const message = document.getElementById('message');

    // Limpar resultados anteriores
    userList.innerHTML = '';
    message.textContent = '';

    // Se o campo de busca estiver vazio, mostra uma mensagem
    if (!searchTerm) {
      message.textContent = 'Por favor, insira um nome para buscar.';
      message.classList.add('error');
      return;
    }

    // Chama a API do GitHub
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        // Se não encontrar usuários
        if (data.items && data.items.length > 0) {
          data.items.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `
              <img src="${user.avatar_url}" alt="${user.login}" width="50" height="50">
              <a href="${user.html_url}" target="_blank">${user.login}</a>
            `;
            userList.appendChild(li);
          });
        } else {
          message.textContent = 'Não foram encontrados usuários para esta pesquisa.';
          message.classList.add('error');
        }
      })
      .catch(error => {
        message.textContent = 'Erro ao buscar usuários, tente novamente mais tarde.';
        message.classList.add('error');
      });
  });