class TodoList{

    constructor(title, todoArray = []){
        this.title = title;
        this.todoArray = todoArray;
    }

    addTodo(todo){
        this.todoArray.push(todo);
    }

    removeTodo(todo){

    }

    sortByTitle(){

    }

    sortByCreationDate(){

    }

    completeTodo(){

    }

    static fromObjectArray(title, objectArray){
        const newTodoList = new TodoList(title);
        for (let i = 0; i < objectArray.length; i++) {
            const todoObject = objectArray[i];
            const newTodo = Todo.fromTodoObject(todoObject);
            newTodoList.addTodo(newTodo);
        }
        return newTodoList;
    }

}