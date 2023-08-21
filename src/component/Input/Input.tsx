import {ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from "react";

export interface IInput {
    placeholder: string,
    value: string,
    name?: string,
    onChange: ChangeEventHandler,
    onKeyDown?: KeyboardEventHandler,
    onKeyUp?: KeyboardEventHandler,
    onBlur?: FocusEventHandler,
    onFocus?: FocusEventHandler,
    className: string,
    max: number,
    min: number
}

export const Input = ({placeholder, value, name, ...rest}: IInput) => {
    return(
            <input type='number' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}
