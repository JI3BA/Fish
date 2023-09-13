import {CSSTransition} from "react-transition-group";
import {IFish} from "../../models/IFish";
import {FC} from "react";

type MapFishImagesType = {
    fishImage: IFish[],
    changeSlide: boolean,
    activeIndex: number
}


export const MapFishImages: FC<MapFishImagesType> = ({fishImage,changeSlide,activeIndex}) => {
    return(
        <>
            {fishImage.map((item,index) => {
                return(
                    <CSSTransition in={changeSlide} classNames='image__container' timeout={1000} key={index}>
                        <div className={index === activeIndex ? "image__container active" : "inactive"} key={index}>
                            <img src={item.picture} className="gallery__image" alt={item.name} />
                            <div className="gallery__description">
                                <h2 className="image__title">{item.name}</h2>
                                <p className="image__description">{item.description}</p>
                            </div>
                        </div>
                    </CSSTransition>
                )
            })}
        </>
    )
}