import { useState, useEffect } from "react";
import { getTodos } from './api';

function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then((res) => console.log(res))
    }, []);


    return (
        <div>
            <h1>TODOS</h1>
        </div>
    )
}

export default Todos;