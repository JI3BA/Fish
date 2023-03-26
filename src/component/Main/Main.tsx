import { FC } from 'react'
import Gallery from '../Gallery/Gallery'
import '../../styles/Main.css'
import Menu from '../Menu/Menu'

const Main: FC = () => {
    return(
        <div className="main">
            <div className="main__container wrapper">
                <Gallery />
                <Menu />
            </div>  
        </div>
    )
}

export default Main