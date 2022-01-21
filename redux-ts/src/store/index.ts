import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {todoReducer} from "./reducers/todoReducer";

const reducers = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunk))