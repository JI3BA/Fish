import { useRef, MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { isModal } from "../../../store/reducers/ModalSlice";
import { Button } from "../../Button/Button";
import '../../../styles/ModalRecipes.css';
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { MapModalIngredients } from "../../../map/ModalIngredients/MapModalIngredients";


export const ModalRecipes = () => {
    const recipeFish = useAppSelector(state => state['ModalRecipesSlice'].recipe)
    const modal = useAppSelector(state => state['ModalSlice'].isModal)
    const dispatch = useAppDispatch()
    const { closeModal } = isModal.actions
    const nodeRef = useRef(null);

    return(
        <CSSTransition in={modal} classNames='modal' timeout={1000} unmountOnExit nodeRef={nodeRef}>
                <div className="modal" ref={nodeRef} onClick={() => dispatch(closeModal())}>
                    {recipeFish &&
                        <div className="modal__container" onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                            <img src={recipeFish[0].picture} className='modal__picture recipes__picture' alt={recipeFish[0].name}/>
                            <div className="modal__description recipes__description">
                                <h3 className='modal__name recipes__name'>{recipeFish[0].name}</h3>

                                <div className="modal__ingredients recipes__ingredients">
                                    <MapModalIngredients recipeFish={recipeFish} />
                                </div>

                                <p className="modal__time recipes__time"><span style={{fontStyle: 'normal'}}>Cooking time: </span>{recipeFish[0].time}</p>
                                <Button className='modal__close' onClick={() => dispatch(closeModal())}>Close</Button>
                                <Link to='/recipe' className="modal__close modal--open-recipe">Open recipe</Link>
                                <p className="modal__close--cross" onClick={() => dispatch(closeModal())}>✖</p>
                            </div>
                        </div>
                    }
                </div>
        </CSSTransition>
        
    )
}