import React from "react";
import s from './Input.module.css'

const Input = ({input, label ,type ,meta: { touched, error }, ...restProps}) => {
    return (
        <div className={s.inputWrap}>
            <input {...input} type={type} className={s.input} placeholder={label}/>
            {touched && error &&  <span className={s.error}>{error}</span>}
        </div>
    )
}

export default Input;