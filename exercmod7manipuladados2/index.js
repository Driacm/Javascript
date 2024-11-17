// Função para obter as tarefas do localStorage
function getTarefas() {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
  }

  // Função para salvar as tarefas no localStorage
  function saveTarefas(tarefas) {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // Função para atualizar a lista de tarefas
  function atualizarListaTarefas() {
    const tarefas = getTarefas();
    const listaTarefasElement = document.getElementById('lista-tarefas');
    listaTarefasElement.innerHTML = ''; // Limpar a lista antes de atualizar

    tarefas.forEach((tarefa, index) => {
      const tarefaElement = document.createElement('div');
      tarefaElement.classList.add('tarefa-item');

      const statusClass = tarefa.status ? 'tarefa-concluida' : 'tarefa-nao-concluida';
      tarefaElement.innerHTML = `
        <input type="checkbox" id="tarefa-${index}" ${tarefa.status ? 'checked' : ''} data-index="${index}">
        <span class="${statusClass}">${tarefa.descricao}</span>
        <button onclick="excluirTarefa(${index})">Excluir</button>
      `;

      listaTarefasElement.appendChild(tarefaElement);
    });
  }

  // Função para adicionar uma nova tarefa
  document.getElementById('adicionar').addEventListener('click', function() {
    const descricao = document.getElementById('descricao').value.trim();
    if (descricao) {
      const tarefas = getTarefas();
      tarefas.push({ descricao, status: false });
      saveTarefas(tarefas);
      atualizarListaTarefas();
      document.getElementById('descricao').value = ''; // Limpar o campo de texto
    }
  });

  // Função para excluir uma tarefa
  function excluirTarefa(index) {
    const tarefas = getTarefas();
    tarefas.splice(index, 1);
    saveTarefas(tarefas);
    atualizarListaTarefas();
  }

  // Função para alterar o status de uma tarefa
  document.getElementById('lista-tarefas').addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
      const index = event.target.getAttribute('data-index');
      const tarefas = getTarefas();
      tarefas[index].status = event.target.checked;
      saveTarefas(tarefas);
      atualizarListaTarefas();
    }
  });

  // Atualiza a lista de tarefas ao carregar a página
  window.onload = function() {
    atualizarListaTarefas();
  };