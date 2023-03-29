import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { isModal } from "../../../store/reducers/ModalSlice";
import Button from "../../Button/Button";

const ModalRecipes = () => {
    const recipeFish = useAppSelector(state => state.ModalRecipes.recipe)
    const modal = useAppSelector(state => state.ModalSlice.isModal)
    const dispatch = useAppDispatch()
    const { closeModal } = isModal.actions

    return(
        <div className="modal">
            {recipeFish && 
                <div className="modalll">
                    <div className="modal__container">
                        <img src={recipeFish[0].picture} className='modal__picture recipes__picture' alt={recipeFish[0].name}/>
                        <div className="modal__description recipes__description">
                            <h3 className='modal__description recipes__name'>{recipeFish[0].name}</h3>
                            <p className="recipes__line"></p>
                            <div className="modal__description recipes__ingredients">
                                {recipeFish[0].ingredients.map((item,index) => {
                                    return(
                                        <p className="modal__description ingredients__item" key={index}>{item};</p>
                                        )
                                    })}
                            </div>
                            <Button className='modal__close' onClick={() => dispatch(closeModal())}>Close</Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ModalRecipes