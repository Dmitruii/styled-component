import React from 'react'
import {Route} from "react-router-dom"
import TodosPage from './TodosPage'

const TodoItemPage: React.FC = () => {
    return (
        <div>
            <Route path="/todos" element={<TodosPage />} />
        </div>
    )
}

export default TodoItemPage