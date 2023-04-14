class DataService{

    // static getTodos(callback){
    //     fetch('https://643672ab8205915d34f3b508.mockapi.io/todos')
    //     .then(resp => resp.json())
    //     .then(data => callback(data));
    // }

    static getTodos(){
        return fetch('https://6437a2bd0c58d3b145753906.mockapi.io/todos')
        .then(resp => resp.json());
    }

    static postTodo(todo){
        
    }

    static putTodo(todo){
        const jsonTodo = JSON.stringify(todo.toDbModel());
        return fetch('https://6437a2bd0c58d3b145753906.mockapi.io/todos/' + todo.id, {method: 'PUT', body: jsonTodo, headers: {'content-type': 'application/json'}})
        .then(resp => resp.json());
    }

    static deleteTodo(todo){
        return fetch('https://6437a2bd0c58d3b145753906.mockapi.io/todos/' + todo.id, {method: 'DELETE'})
        .then(resp => resp.json());
    }

}