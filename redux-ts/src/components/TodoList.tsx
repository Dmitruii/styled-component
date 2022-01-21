import React, {FC, useEffect} from 'react';
import {UseTypedSelector} from "../hooks/useTypeSelector";
import {useAction} from "../store/reducers/useAction";
import {setTodoPage} from "../store/action-creator/todo";

const TodoList: FC = () => {
    const {page, loading, limit, todos, error} = UseTypedSelector(state => state.todo)
    const pages = [1,2,3,4,5]
    const {fetchTodo, setTodoPage} = useAction()

    useEffect(() => {
        fetchTodo(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>Произошла ошибка: {error}</h1>
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id} style={{border: '2px solid #0ff', margin: '1rem', padding: '0.3rem', fontSize: '0.5rem'}}>
                    <h1>{todo.id} {todo.title}</h1>
                </div>
            ))}
            {pages.map(p => (
                <button onClick={() => setTodoPage(p)}
                        style={{border: p === page ? '2px solid #00f' : '2px solid #ccc', fontSize: '1rem'}}>{p}</button>
            ))}
        </div>
    );
};

export default TodoList;