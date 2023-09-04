import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {isModal} from "../../store/reducers/ModalSlice";
import '../../styles/Recipe.css'


export const Recipe = () => {
    const recipeFish = useAppSelector(state => state['ModalRecipesSlice'].recipe)
    const dispatch = useAppDispatch()
    const { closeModal } = isModal.actions

    return(
        <div className="recipe">
            {recipeFish &&
                <>
                    <Link to='/Fish' className="cart__callback-link" onClick={() => dispatch(closeModal())}>Menu</Link>
                    <div className="recipe__container wrapper">
                        <div className="preview">
                            <img src={recipeFish[0].picture} alt={recipeFish[0].name} className="preview__image"/>
                            <h3 className='modal__name preview__name'>{recipeFish[0].name}</h3>
                        </div>
                        <div className="steps">
                            {recipeFish[0].steps.map((item, index) => {
                                return(
                                    <div className="step">
                                        <p className="step__text"><span className='step__title'>Step {index+1}:</span> {item}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}