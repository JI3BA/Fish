import { useAppSelector } from '../../hooks/redux'
import { Link } from 'react-router-dom'
import '../../styles/Cart.css'
import Button from '../../component/Button/Button'

const Cart = () => {
    const cart = useAppSelector(state => state.CartSlice.cart)

    return(
        <div className='cart'>
            <div className="cart__container wrapper">
                <h1 className='cart__order'>Order</h1>

                {!cart.length ? <h2 className='cart__empty'>Cart is empty</h2>
                        :
                        cart.map(item => {
                            return(
                                <div className='cart__item' key={item.id}>
                                    <img src={item.picture} alt={item.name} className='cart__image'/>

                                    <div className="cart__description">
                                        <h3 className="cart__title">Fish: {item.name}</h3>
                                        <p className="cart__weight">Weight: {item.weight}g</p>
                                        <input type="number" placeholder='amount' className='cart__input'/>
                                    </div>
                                </div>
                            )
                        })
                }

                <Link to='/Fish' className="cart__callback-link">Menu</Link>
                <Button className='cart__make-order'>Make an Order</Button>
            </div>
        </div>
    )
}


export default Cart