import { FC } from "react";
import '../../styles/Recipes.css'
import '../../styles/Menu.css'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";   
import { isModal } from "../../store/reducers/ModalSlice";
import { IRecipes } from "../../models/IRecipes";
import { ModalDataRecipe } from "../../store/reducers/ModalRecipes";
import ModalRecipes from "../Modal/ModalRecipes/ModalRecipes";

const Recipes: FC = () => {
    const recipesFist = useAppSelector(state => state.FishRecipes.recipes)
    const dispatch = useAppDispatch()
    const { openModal } = isModal.actions
    const { addDataModal } = ModalDataRecipe.actions

    const addModalRecipe = (id: IRecipes['id']) => {
        dispatch(addDataModal(recipesFist.filter(item => item.id === id)))
        dispatch(openModal())
    }

    return(
        <div className="recipes">
            <div className="recipes__container wrapper">
                <h1 className="title__component recipes__title">Recipes</h1>
                <div className='card__container'>
                    {recipesFist.map((item,index) => {
                        return(
                            <div className='recipes__card' key={index} onClick={() => addModalRecipe(index)}>
                                <img src={item.picture} className='recipes__picture' alt={item.name}/>
                                <div className="recipes__description">
                                    <h3 className='recipes__name'>{item.name}</h3>
                                    <p className="recipes__line"></p>
                                    <div className="recipes__ingredients">
                                        {item.ingredients.map((item,index) => {
                                            return(
                                                <p className="ingredients__item" key={index}>{item};</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
            </div>
            <ModalRecipes />
        </div>
    )
}

export default Recipes