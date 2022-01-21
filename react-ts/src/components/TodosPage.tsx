import React, {useEffect, useState} from 'react'
import {ITodo} from "../types/types"
import axios from "axios"
import List from "./List"
import TodoItem from "./TodoItem"

const TodosPage: React.FC = () => {
    const [todo, setTodo] = useState<Array<ITodo>>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<Array<ITodo>>('https://jsonplaceholder.typicode.com/todos?_limit=50')
            setTodo(response.data)

        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <List items={todo} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}/>
        </div>
    );
};

export default TodosPage