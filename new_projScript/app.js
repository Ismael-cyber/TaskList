function addTask() {
    //Cria um novo elemento
    const newTask = document.createElement('div')

    // Cria um elemento h3 para o título da tarefa
    const taskTitle = document.createElement('h3')
    taskTitle.textContent = 'Nova Tarefa'

    //Cria um input para editar a tarefa
    const taskInput = document.createElement('input')
    taskInput.type = 'checkbox'

    //Adiciona o h3 e o input dentro da nova div (tarefa)
    newTask.appendChild(taskInput)
    newTask.appendChild(taskTitle)

    //Adiciona a classe estilizada 'task'
    newTask.classList.add('task')

    //Seleciona o campo onde as tarefas serão adicionadas
    const taskList = document.getElementById('group-tasks')

    //Adiciona a nova tarefa no campo
    taskList.appendChild(newTask)
}

//Captra o botão e adiciona um evento de clique para chamar a função addTask
const addTaskButton = document.getElementById('add-task-btn')
addTaskButton.addEventListener('click', addTask)