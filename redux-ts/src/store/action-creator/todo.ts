import axios from "axios";
import {Dispatch} from "redux";
import {TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodo = (page: number, limit: number) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const todos = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit }
            })
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: todos.data})
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Ошибка при запросе заданий'})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}