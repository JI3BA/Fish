import { FC } from 'react'
import Gallery from '../Gallery/Gallery'
import '../../styles/Main.css'
import Menu from '../Menu/Menu'
import Recipes from '../Recipes/Recipes'

const Main: FC = () => {
    return(
        <div className="main">
            <div className="main__container wrapper">
                <Gallery />
                <Menu />
                <Recipes />
            </div>  
        </div>
    )
}

export default Main