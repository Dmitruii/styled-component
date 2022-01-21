export enum TodoActionTypes {
    FETCH_TODOS = "redux-ts/todoReducer/FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "redux-ts/todoReducer/FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "redux-ts/todoReducer/FETCH_TODOS_ERROR",
    SET_TODO_PAGE = "redux-ts/todoReducer/SET_TODO_PAGE"
}

export interface TodoState {
    todos: Array<any>;
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: Array<any>
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string
}
interface SetTodoPageAction {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPageAction
