import { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'
import Button from '../Button/Button'
import '../../styles/Menu.css'
import '../../styles/Main.css'

const Menu: FC = () => {
    const fishMenu = useAppSelector(state => state.FishReducer.fish)

    return (
        <div className="menu">
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
                                    <Button className='menu__text menu__button'>Add to Basket</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu