import { Gallery } from "../Gallery/Gallery";
import { Menu } from "../Menu/Menu";
import { Recipes } from "../Recipes/Recipes";
import '../../styles/Main.css'

export const Main = () => {
    return(
        <>
            <div className="main">
                    <div className="main__container wrapper">
                        <Gallery />
                        <Menu />
                        <Recipes />
                    </div>  
            </div>
        </>
    )
}
