import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import '../../styles/SalesReceipt.css'
import { FC, useRef, MouseEvent } from "react";
import { CSSTransition } from "react-transition-group";
import { isModal } from "../../store/reducers/ModalSlice";
import { CartSlice } from "../../store/reducers/CartSlice";
import { FishSlice } from "../../store/reducers/FishSlice";
import { MapSalesReceipt } from "../../map/SalesReceipt/MapSalesReceipt";

type SalesReceiptType = {
    total: string,
    openOrderList: boolean
}


export const SalesReceipt: FC<SalesReceiptType> = ({total, openOrderList}) => {
    const cart = useAppSelector(state => state['CartSlice'].cart)
    const nodeRef = useRef(null);
    const dispatch = useAppDispatch()
    const { closeOrder } = isModal.actions
    const { clearCart } = CartSlice.actions
    const { resetAllIsCartState } = FishSlice.actions
    const order = useAppSelector(state => state['ModalSlice'].isOrder)

    const closeSalesReceipt = () => {
        dispatch(resetAllIsCartState())
        dispatch(clearCart())
    }

    return(
        <CSSTransition in={order} classNames='check' timeout={1000} unmountOnExit nodeRef={nodeRef}>
            <>
               <div className='check' ref={nodeRef} onClick={() => dispatch(closeOrder())}>
                   {openOrderList && <div className="check__container" onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                       <h2 className="check__title">Sales Receipt</h2>

                       <div className='products'>
                           <MapSalesReceipt cart={cart} />
                       </div>

                       <span className="check__price">
                           <span className="product__title">Total price: </span>
                           {total}$
                       </span>

                       <Link to='/shop'>
                           <Button className='menu__text menu__button check__button' onClick={closeSalesReceipt}>
                               Close
                           </Button>
                       </Link>
                   </div>
                   }
                </div>
            </>
        </CSSTransition>
    )
}