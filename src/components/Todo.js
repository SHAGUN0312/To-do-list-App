import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';


const Todo = ({text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );
    };
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            <button className ="complete-btn" onClick = {completeHandler}><CheckIcon/></button>
            <button className="trash-btn" onClick = {deleteHandler}><DeleteIcon/></button>
        </div>
    );
}

export default Todo;