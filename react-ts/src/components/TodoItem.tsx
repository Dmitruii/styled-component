import React from 'react'
import {ITodo} from "../types/types"

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    return (
        <div>
            {todo.id}. {todo.title}
            <input type={'checkbox'} checked={todo.completed}/>
        </div>
    )
}

export default TodoItem