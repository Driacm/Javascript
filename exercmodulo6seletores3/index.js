// Array de tarefas
let tarefas = [];

// Elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Função para renderizar as tarefas
const renderTasks = () => {
  taskList.innerHTML = ''; // Limpa a lista de tarefas antes de renderizar novamente

  tarefas.forEach((tarefa, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.toggle('completed', tarefa.status); // Adiciona classe "completed" se a tarefa estiver concluída

    taskItem.innerHTML = `
      <input type="checkbox" ${tarefa.status ? 'checked' : ''} data-index="${index}" class="task-checkbox">
      <span>${tarefa.descricao}</span>
    `;

    taskList.appendChild(taskItem);
  });
};

// Função para adicionar uma nova tarefa
const addTask = () => {
  const descricao = taskInput.value.trim();

  if (descricao === '') {
    alert('Digite uma descrição para a tarefa!');
    return;
  }

  // Adiciona a nova tarefa ao array (status inicial como false - não concluída)
  tarefas.push({ descricao, status: false });

  taskInput.value = ''; // Limpa o campo de texto
  renderTasks(); // Atualiza a lista de tarefas
};

// Função para alternar o status da tarefa
const toggleTaskStatus = (index) => {
  tarefas[index].status = !tarefas[index].status;
  renderTasks(); // Atualiza a lista de tarefas após a alteração
};

// Adiciona o evento de clique no botão "Adicionar"
addTaskButton.addEventListener('click', addTask);

// Adiciona o evento de mudança nos checkboxes
taskList.addEventListener('change', (event) => {
  if (event.target.classList.contains('task-checkbox')) {
    const index = event.target.getAttribute('data-index');
    toggleTaskStatus(index); // Alterna o status da tarefa
  }
});

// Inicializa a renderização das tarefas (caso já existam)
renderTasks();
