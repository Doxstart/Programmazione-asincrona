// console.log('async');

// setTimeout(togliLaLasagna, 1000);

// function togliLaLasagna() {
//     console.log('le lasagne sono pronte!!!');
// }

// setTimeout(buttaLaSpazzatura, 10000);

// function buttaLaSpazzatura(){
//     console.log('ho fatto la differenziata!!!')
// }

// setTimeout(salutaLaNonna, 5000);

// function salutaLaNonna(){
//     document.getElementById('main').innerHTML = '<h1>Ciao Nonna</h1>';
// }

// function salutaJing(){
//     console.log('Ciao Jing!!!')
// }

// setInterval(salutaJing, 500);

fetch('https://643672ab8205915d34f3b508.mockapi.io/todos')
.then(resp => resp.json())
.then(data => displayData(data));

function displayData(data){
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const todo = data[i];
        const newLi = document.createElement('li');
        const titleNode = document.createTextNode(todo.title);
        newLi.appendChild(titleNode);
        todoList.appendChild(newLi);
    }
}