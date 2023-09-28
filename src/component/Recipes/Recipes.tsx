import '../../styles/Recipes.css'
import '../../styles/Menu.css'
import '../../styles/ModalRecipes.css'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";   
import { isModal } from "../../store/reducers/ModalSlice";
import { IRecipes } from "../../models/IRecipes";
import { ModalRecipesSlice } from "../../store/reducers/ModalRecipesSlice";
import { ModalRecipes } from "../Modal/ModalRecipes/ModalRecipes";
import { MapRecipes } from "../../map/Recipes/MapRecipes";

export const Recipes = () => {
    const recipesFish = useAppSelector(state => state.RecipesSlice.recipes)
    const dispatch = useAppDispatch()
    const { openModal } = isModal.actions
    const { addDataModal } = ModalRecipesSlice.actions


    const addModalRecipe = (id: IRecipes['id']) => {
        dispatch(addDataModal(recipesFish.filter(item => item.id === id)))
        dispatch(openModal())
    }

    return(
        <>
            <div id="recipes" className="recipes">
                <div className="recipes__container wrapper">
                    <h1 className="title__component recipes__title">Recipes</h1>
                    <div className='card__container'>
                        <MapRecipes recipesFish={recipesFish} addModalRecipe={addModalRecipe} />
                        </div>
                </div>
            </div>
            <ModalRecipes />
        </>
    )
}