import {IRecipes} from "../../models/IRecipes";
import {FC} from "react";

type MapRecipesType = {
    recipesFish: IRecipes[]
    addModalRecipe: (id: IRecipes['id']) => void
}

export const MapRecipes: FC<MapRecipesType> = ({recipesFish, addModalRecipe}) => {
    return(
        <>
            {recipesFish.map((item,index) => {
                return(
                    <div className='recipes__card' key={index} onClick={() => addModalRecipe(index)}>
                        <img src={item.picture} className='recipes__picture' alt={item.name}/>
                        <div className="recipes__description">
                            <div className="recipes__title">
                                <h3 className='recipes__name'>{item.name}</h3>
                                <p className="recipes__line"></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}