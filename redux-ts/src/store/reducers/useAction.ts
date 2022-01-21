import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionTypes from "../../store/action-creator/user";
import * as TodoActionTypes from "../../store/action-creator/todo";

const actionTypes = { ...UserActionTypes, ...TodoActionTypes }

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionTypes, dispatch)
}