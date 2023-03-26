import { FC } from 'react'
import Gallery from '../Gallery/Gallery'
import '../../styles/Main.css'

const Main: FC = () => {
    return(
        <div className="main">
            <div className="main__container wrapper">
                <Gallery />

            </div>  
        </div>
    )
}

export default Main