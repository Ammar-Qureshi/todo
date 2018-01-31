export default class todoAction {
    static ADDTODO = 'add_todo';
    static DELETETODO = 'delete_todo';
    static EDITTODO = 'edit_todo';
    static CHECKTODO = 'check_todo';

    static addTodo(value){
        return {type:this.ADDTODO, val: value};
    }
    static deleteTodo(key){
        return {type:this.DELETETODO, key : key};
    }
    static editTodo(key,value){
        return {type:this.EDITTODO, inputval: value,key:key};
    }
    static checkTodo(key,done){
        return {type :this.CHECKTODO, done:done, key:key}
    }
}
