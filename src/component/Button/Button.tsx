import '../../styles/Button.css'

interface IButton{
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    style?: React.CSSProperties,
    className: string,
}

const Button = ({children, onClick, ...rest}: IButton) => {
    return(
            <button onClick={onClick} {...rest} >{children}</button>
    )
}

export default Button