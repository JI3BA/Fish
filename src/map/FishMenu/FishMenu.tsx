import {Button} from "../../component/Button/Button";
import {IFish} from "../../models/IFish";
import {FC} from "react";

type FishMenuType = {
    fishMenu: IFish[],
    addInOrder: (item: IFish) => void,
    removeFromOrder: (item: IFish) => void
}

export const FishMenu: FC<FishMenuType> = ({fishMenu, addInOrder, removeFromOrder}) => {
    return(
        <>
            {fishMenu.map((item,index) => {
                return(
                    <div className='menu__card' key={index}>
                        <img src={item.picture} className='menu__picture' alt={item.name}/>
                        <div className="menu__description">
                            <h3 className='menu__name'>{item.name}</h3>
                            <p className="menu__text menu__weight">weight: <span className='menu__text--bold'>{item.weight}g</span></p>
                            <p className="menu__text menu__price">price: <span className='menu__text--bold'>{item.price}$</span></p>
                            {!item.isCart
                                ? <Button className='menu__text menu__button' onClick={() => addInOrder(item)}>Add to Cart</Button>
                                : <Button className='menu__text menu__button' onClick={() => removeFromOrder(item)}>In Cart</Button>
                            }
                        </div>
                    </div>
                )
            })}
        </>
    )
}