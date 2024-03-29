document.getElementById('addTodo').addEventListener('click', function() {
    var value = document.getElementById('todoInput').value
    if (value) {
        addTodo(value)
        document.getElementById('todoInput').value
        storeTodos()
    }
})

function addTodo(text) {
    var list = document.getElementById('todoList')

    var item = document.createElement('li')
    item.innerText = text
    item.classList.add('list-group-item')

    var removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'
    removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end')
    removeButton.addEventListener('click', function() {
        item.parentNode.removeChild(item)
        storeTodos()
    })

    item.appendChild(removeButton)
    list.appendChild(item)
}

function storeTodos() {
    var todos = []
    for (var i = 0; i < todoList.children.length; i++) {
        todos.push(todoList.children[i].innerText.replace('Remove', '').trim())
    }
    localStorage.setItem('todos', JSON.stringify(todos))
}

function loadTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'))
    if(todos) {
        todos.forEach(function(todo) {
            addTodo(todo)
        })
    }
}

loadTodos()