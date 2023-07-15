import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Button} from "../../component/Button/Button";
import {Input} from "../../component/Input/Input";
import {ChangeEvent} from "react";
import {CartSlice} from "../../store/reducers/CartSlice";
import {IFish} from "../../models/IFish";
import {FishSlice} from "../../store/reducers/FishSlice";


export const OrderList = () => {
    const cart = useAppSelector(state => state['CartSlice'].cart)
    const dispatch = useAppDispatch()
    const { changeAmount, removeFish } = CartSlice.actions
    const { changeIsCart } = FishSlice.actions

    const minusBtn = (item: IFish): void=> {
        dispatch(changeAmount({name: item.name, amount: item.amount - 1}))
    }

    const plusBtn = (item: IFish): void=> {
        dispatch(changeAmount({name: item.name, amount: item.amount + 1}))
    }

    const removeFromOrder = (item: IFish): void => {
        dispatch(removeFish(item))
        dispatch(changeIsCart(item))
    }

    return (
        <>
            {cart.map(item => {
                return(
                    <div className='cart__item' key={item.id}>
                        <img src={item.picture} alt={item.name} className='cart__image'/>

                        <div className="cart__description">
                            <h3 className="cart__text cart__title">Fish: <span style={{fontWeight: 700, fontStyle: 'italic'}}>{item.name}</span></h3>
                            <p className="cart__text cart__weight">Weight: <span style={{fontWeight: 700, fontStyle: 'italic'}}>{item.weight}g</span></p>
                            <div className='cart__amount-container'>
                                <Button className='cart__amount-button amount__minus' disabled={item.disabled} onClick={() => minusBtn(item)}>-</Button>
                                <Input placeholder='amount' className='cart__input' value={(item.amount).toString()} max={999} min={1} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeAmount({name:item.name, amount: Number(e.target.value)}))}/>
                                <Button className='cart__amount-button amount__plus' onClick={() => plusBtn(item)}>+</Button>
                            </div>
                            <Button className='' onClick={() => removeFromOrder(item)}>Remove</Button>
                            <p className="cart__text cart__price">Price: <span style={{fontWeight: 700, fontStyle: 'italic'}}>{item.price}$</span></p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}