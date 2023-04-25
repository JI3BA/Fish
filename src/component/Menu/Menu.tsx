import { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { CartSlice } from '../../store/reducers/CartSlice'
import Button from '../Button/Button'
import '../../styles/Menu.css'
import '../../styles/Main.css'
import { IFish } from '../../models/IFish'
import { Link } from 'react-router-dom'
import { FishSlice } from '../../store/reducers/FishSlice'

const Menu: FC = () => {
    const fishMenu = useAppSelector(state => state.FishSlice.fish)
    const cart = useAppSelector(state => state.CartSlice.cart)
    const dispatch = useAppDispatch()
    const { addFish } = CartSlice.actions
    const { changeIsCart } = FishSlice.actions

    const addInOrder = (item: IFish): void => {
        dispatch(addFish(item))
        dispatch(changeIsCart(item))
    }

    return (
        <div className="menu" id='menu'>
            <div className="menu__container">
                <h1 className="title__component menu__title">Menu</h1>
                <div className='card__container'>
                    {fishMenu.map((item,index) => {
                        return(
                            <div className='menu__card' key={index}>
                                <img src={item.picture} className='menu__picture' alt={item.name}/>
                                <div className="menu__description">
                                    <h3 className='menu__name'>{item.name}</h3>
                                    <p className="menu__text menu__weight">weight: <span className='menu__text--bold'>{item.weight}g</span></p>
                                    <p className="menu__text menu__price">price: <span className='menu__text--bold'>{item.price}$</span></p>
                                    {!item.isCart ? <Button className='menu__text menu__button' onClick={() => addInOrder(item)}>Add to Cart</Button>
                                            : <Button className='menu__text menu__button' >In Cart</Button>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link to="/order" className='cart__link'>
                <svg version="1.1" className='cart__area' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="50px" height="50px" viewBox="0 0 510 510" xmlSpace="preserve">
                <g>
                    <g>
                        <path className='cart__item' d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306
                            c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
                            c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408
                            c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"/>
                    </g>
                </g>
                </svg>
                {cart.length
                    ?   <div className='cart__circle'>
                            <p className="cart__amount">{cart.length}</p>
                        </div>
                    :   null
                }
            </Link>
        </div>
    )
}

export default Menu