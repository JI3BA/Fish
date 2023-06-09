import { ChangeEvent, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Input } from '../../component/Input/Input'
import { Link } from 'react-router-dom'
import '../../styles/Cart.css'
import { Button } from '../../component/Button/Button'
import { CartSlice } from '../../store/reducers/CartSlice'
import { IFish } from '../../models/IFish'

export const Cart = () => {
    const cart = useAppSelector(state => state['CartSlice'].cart)
    const dispatch = useAppDispatch()
    const { changeAmount, disabledAmount } = CartSlice.actions
    const [total, setTotal] = useState<string>('0')

    useEffect(() => {
        const delayTotal = setTimeout(() => setTotal(cart.reduce((acc,item) => (acc + item.price * Number(item.amount)), 0).toFixed(2)), 1000)

        return () => clearTimeout(delayTotal)
    }, [cart])

    useEffect(() => {
        cart.map(item => dispatch(disabledAmount({name: item.name, amount: item.amount, disabled: item.disabled})))
    }, [cart, dispatch, disabledAmount])

    const minusBtn = (item: IFish): void=> {
        dispatch(changeAmount({name:item.name, amount: item.amount - 1})) 
    }

    const plusBtn = (item: IFish): void=> {
        dispatch(changeAmount({name:item.name, amount: item.amount + 1})) 
    }

    return(
        <div className='cart'>
            <div className="cart__container wrapper">
                <h1 className='cart__name'>Order</h1>

                {!cart.length ? <h2 className='cart__name'>Cart is empty</h2>
                        :
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
                                            <p className="cart__text cart__price">Price: <span style={{fontWeight: 700, fontStyle: 'italic'}}>{item.price}$</span></p>
                                        </div>
                                    </div>
                                )
                            })}
                            <h3 className="cart__text cart__total">Total: <span style={{fontWeight: 700, fontStyle: 'italic'}}>{total}$</span></h3>
                            <Button className='cart__make-order'>Make an Order</Button>
                        </>
                }

                <Link to='/Fish' className="cart__callback-link">Menu</Link>
            </div>
        </div>
    )
}