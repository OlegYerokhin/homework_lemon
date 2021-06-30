const formAddTask = document.querySelector('#form-add-task'); // получаем форму
const taskList = document.querySelector('#task-list'); // получаем ul
const taskListContainer = document.querySelector('#task-list-container'); // получаем task-list-container, который показывает, что есть невыполненные задачи
const tasksCounter = document.querySelector('#tasksCounter'); // получаем счетчик задач

function markContainer() {
    if (localStorage.length) {
        taskListContainer.classList.add('has-tickets');
    } else {
        taskListContainer.classList.remove('has-tickets');
    }
}

markContainer();

const taskCount = document.createElement('span'); // добавлено в ДЗ
function toCountTasks() {
    if (localStorage.length > 1) {
        taskCount.innerText = localStorage.length + ' tasks left';
    } else {
        taskCount.innerText = localStorage.length + ' task left';
    }
    
    taskCount.classList.add('tasks-count');
    tasksCounter.appendChild(taskCount);
}

formAddTask.addEventListener('submit', function(event) { // слушаем ul
    event.preventDefault(); // останавливаем автоотправку

    // console.log(this.children.title.value); // получаем в консоль введенное в инпут (children) значение

    const task = {
        title: this.children.title.value, // input value
        done: false, // флаг того, что задача выполнена
        id: new Date().getTime(), // уникальный id для localStorage
    };

    addTask(task);
    localStorage.setItem(String(task.id), JSON.stringify(task)); // получаем задачу
    markContainer();

    toCountTasks(); // добавлено в ДЗ
    this.reset(); // встроенный метод // input - здесь 'this'
});

function addTask(task) {
    const listItem = document.createElement('li'); // добавляем list-item (задание)
    listItem.innerText = task.title;
    listItem.classList.add('list-item');
    listItem.setAttribute('data-id', task.id); // уникальный атрибут каждого li для дальнейшего удаления
    taskList.appendChild(listItem);

    const btnDelete = document.createElement('button'); // добавляем кнопку delete
    btnDelete.classList.add('btn-close');
    btnDelete.innerHTML = '&times';
    listItem.appendChild(btnDelete);

    const btnDone = document.createElement('button'); // добавляем кнопку done
    btnDone.classList.add('btn-done');
    btnDone.innerHTML = '&check;';
    listItem.appendChild(btnDone);
}

for (let key in localStorage) { // чтение из LocalStorage
    if (localStorage.hasOwnProperty(key)) {
        const task = JSON.parse(localStorage[key]);
        addTask(task);
    }
}

taskList.addEventListener('click', event => {
    if (!event.target.classList.contains('btn-close')) return;

    const { parentNode } = event.target; // убить родителя кнопки закрытия // parentNode - это 'li'
    // const parentNode = event.target.parentNode; тоже самое, что предыдущая строка. Предыдущая строка - деструктуризация.
    const taskId = parentNode.getAttribute('data-id');
    localStorage.removeItem(taskId); // удалить из localStorage
    parentNode.remove();

    markContainer();
    toCountTasks(); // добавлено в ДЗ
})




// запас
// if (!event.target.classList.contains('btn-close')) return;

// const { parentNode } = event.target; // убить родителя кнопки закрытия // parentNode - это 'li'
// // const parentNode = event.target.parentNode; тоже самое, что предыдущая строка. Предыдущая строка - деструктуризация.
// const taskId = parentNode.getAttribute('data-id');
// localStorage.removeItem(taskId); // удалить из localStorage
// parentNode.remove();


// taskList.addEventListener('click', event => {
//     if (!event.target.classList.contains('btn-done')) return;

//     const { parentNode } = event.target;
//     const taskId = parentNode.getAttribute('data-id');
//     if (event.target.classList.contains('btn-done')) {
//     localStorage.classList.add('is-done')
//     }

// })
// function markTasksDone() {
//     if('is-done') {
//         task.done = true;
//         console.log(meow)
//     }
// }
// markTasksDone();