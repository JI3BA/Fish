import { FC } from "react";
import '../../styles/Recipes.css'
import '../../styles/Menu.css'
import '../../styles/ModalRecipes.css'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";   
import { isModal } from "../../store/reducers/ModalSlice";
import { IRecipes } from "../../models/IRecipes";
import { ModalRecipesSlice } from "../../store/reducers/ModalRecipesSlice";
import ModalRecipes from "../Modal/ModalRecipes/ModalRecipes";

const Recipes: FC = () => {
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
            <div className="recipes">
                <div className="recipes__container wrapper">
                    <h1 className="title__component recipes__title">Recipes</h1>
                    <div className='card__container'>
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
                        </div>
                </div>
            </div>
            <ModalRecipes />
        </>
    )
}

export default Recipes