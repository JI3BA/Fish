import { FC } from 'react'
import Gallery from '../../component/Gallery/Gallery'
import '../../styles/Main.css'
import Menu from '../../component/Menu/Menu'
import Recipes from '../../component/Recipes/Recipes'

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