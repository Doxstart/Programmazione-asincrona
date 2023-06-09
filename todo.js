class Todo{

    constructor(title, creationDate, isCompleted = false, id){
        this.title = title;
        this._creationDate = creationDate;
        this.isCompleted = isCompleted;
        if (id){
            this.id = id;
        }
    }

    get creationDate(){
        const millSec = this._creationDate * 1000; //da milisecondi a secondi
        const date = new Date(millSec); //trasforma i secondi con new Date nel suo formato
        return date;
    }

    set creationDate(newDate){
        const millSec = newDate.getTime();
        const seconds = millSec / 1000;
        this._creationDate = seconds;
    }

    compareByTitle(todo2){
        return this.title.localeCompare(todo2.title);
    }

    compareByCreationDate(todo2){
        if (this._creationDate > todo2._creationDate) {
            return -1;
        } else if (this._creationDate < todo2._creationDate) {
            return +1;
        } else{
            return 0;
        }
    }

    static fromTodoObject(todoObject){
        return new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id);
    }

    toDbModel(){
        const dbModel = {
            title: this.title,
            creationDate: this._creationDate,
            isCompleted: this.isCompleted,
            id: this.id
        }
        return dbModel;
    }

}