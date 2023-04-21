export interface Iinput {
    placeholder: string,
    value: string,
    name?: string,
    onChange: React.ChangeEventHandler,
    onKeyDown?: React.KeyboardEventHandler,
    onKeyUp?: React.KeyboardEventHandler,
    onBlur?: React.FocusEventHandler,
    onFocus?: React.FocusEventHandler,
    className: string,
}

const Input = ({placeholder, value, name, ...rest}: Iinput) => {
    return(
            <input type='number' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}

export default Input