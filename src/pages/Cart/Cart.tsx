import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Link } from 'react-router-dom'
import '../../styles/Cart.css'
import { Button } from '../../component/Button/Button'
import { CartSlice } from '../../store/reducers/CartSlice'
import {OrderList} from "../../map/OrderList/OrderList";

export const Cart = () => {
    const cart = useAppSelector(state => state['CartSlice'].cart)
    const dispatch = useAppDispatch()
    const { disabledAmount } = CartSlice.actions
    const [total, setTotal] = useState<string>('0')

    useEffect(() => {
        const delayTotal = setTimeout(() => setTotal(cart.reduce((acc,item) => (acc + item.price * Number(item.amount)), 0).toFixed(2)), 1000)

        return () => clearTimeout(delayTotal)
    }, [cart])

    useEffect(() => {
        cart.map(item => dispatch(disabledAmount({name: item.name, amount: item.amount, disabled: item.disabled})))
    }, [cart, dispatch, disabledAmount])

    return(
        <div className='cart'>
            <div className="cart__container wrapper">
                <h1 className='cart__name'>Order</h1>

                {!cart.length
                    ? <h2 className='cart__name'>Cart is empty</h2>
                    :
                    <>
                        <OrderList />
                        <h3 className="cart__text cart__total">Total: <span style={{fontWeight: 700, fontStyle: 'italic'}}>{total}$</span></h3>
                        <Button className='cart__make-order'>Make an Order</Button>
                    </>
                }

                <Link to='/Fish' className="cart__callback-link">Menu</Link>
            </div>
        </div>
    )
}