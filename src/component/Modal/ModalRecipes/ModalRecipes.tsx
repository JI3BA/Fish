import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { isModal } from "../../../store/reducers/ModalSlice";
import Button from "../../Button/Button";
import '../../../styles/ModalRecipes.css';


const ModalRecipes = () => {
    const recipeFish = useAppSelector(state => state.ModalRecipes.recipe)
    const modal = useAppSelector(state => state.ModalSlice.isModal)
    const dispatch = useAppDispatch()
    const { closeModal } = isModal.actions

    return(
        <>
            {modal && <div className="modal" onClick={() => dispatch(closeModal())}>
                {recipeFish && 
                    <div className="modal__container" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <img src={recipeFish[0].picture} className='modal__picture recipes__picture' alt={recipeFish[0].name}/>
                        <div className="modal__description recipes__description">
                            <h3 className='modal__name recipes__name'>{recipeFish[0].name}</h3>
                            <div className="modal__ingredients recipes__ingredients">
                                {recipeFish[0].ingredients.map((item,index) => {
                                    return(
                                        <p className="modal__item ingredients__item" key={index}>{item};</p>
                                        )
                                    })}
                            </div>
                            <Button className='modal__close' onClick={() => dispatch(closeModal())}>Close</Button>
                            <p className="modal_close--cross" onClick={() => dispatch(closeModal())}>✖</p>
                        </div>
                    </div>
                }
            </div>
            }
        </>
    )
}

export default ModalRecipes