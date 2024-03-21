import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([
        { task: "sample Task", isDone: false, id: uuidv4() },
    ]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                { task: newTodo, isDone: false, id: uuidv4() },
            ];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id != id);
        });
    };

    let doneAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return { ...todo, isDone: true };
            })
        );
    };

    let doneOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div>
            <input
                id="input"
                type="text"
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br />
            <br />
            <button onClick={addNewTodo}>Add Task</button>
            <br />
            <br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <span className={todo.isDone ? "crossed-line" : ""}>
                                {todo.task}
                            </span>
                            &nbsp; &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                            &nbsp; &nbsp;
                            <button onClick={() => doneOne(todo.id)}>
                                Done
                            </button>
                        </li>
                    );
                })}
            </ul>
            <br />
            <br />
            <button onClick={doneAll}>Done All</button>
        </div>
    );
}
