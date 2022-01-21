export interface UsersState {
    users: Array<any>;
    loading: boolean;
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = 'redux-ts/userReducer/FETCH_USERS',
    FETCH_USERS_SUCCESS = 'redux-ts/userReducer/FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'redux-ts/userReducer/FETCH_USERS_ERROR'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: Array<any>
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction