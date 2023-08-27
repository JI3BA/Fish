import {IFish} from "../../models/IFish";
import {FC} from "react";

type MapSalesReceiptType = {
    cart: IFish[]
}

export const MapSalesReceipt: FC<MapSalesReceiptType> = ({cart}) => {
    return(
        <>
            {cart.map(fish => {
                return (
                    <div className='product' key={fish.id}>
                                       <span className="product__name">
                                           <span className="product__title">fish: </span>
                                           {fish.name}
                                       </span>
                        <span className="product__amount">
                                           <span className="product__title">amount: </span>
                            {fish.amount}
                                       </span>
                    </div>
                )
            })
            }
        </>
    )
}