import {FC} from "react";
import {IRecipes} from "../../models/IRecipes";

type MapModalIngredientsType = {
    recipeFish: IRecipes[]
}

export const MapModalIngredients: FC<MapModalIngredientsType> = ({recipeFish}) => {
    return(
        <>
            {recipeFish[0].ingredients.map((item,index) => {
                    return(
                        <p className="modal__item ingredients__item" key={index}>{item};</p>
                    )
                })
            }
        </>
    )
}