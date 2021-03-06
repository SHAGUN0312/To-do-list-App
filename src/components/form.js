import React from "react";
import '../App.css';

const Form = ({
    setInputText,
    setTodos,
    todos,
    inputText
}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            },
        ]);
        setInputText("");
    };
    return ( 
        <form>
        <
        input value = {
            inputText
        }
        onChange = {
            inputTextHandler
        }
        type = "text"
        className = "todo-input"
        placeholder = "Add a task"
        / >
        <button onClick = {submitTodoHandler}
        className = "todo-button"
        type = "submit" >+
        </button> 
        </form>
    );
};

export default Form;