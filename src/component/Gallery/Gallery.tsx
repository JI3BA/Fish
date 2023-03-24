import React, { FC } from "react";
import '../../styles/Gallery.css';
import '../../styles/Button.css';
import { useAppSelector } from "../../hooks/redux";
import Button from "../Button/Button";




const Gallery: FC = () => {
    const fishImage = useAppSelector(state => state.FishReducer.fish)
   

    return(
        <div className="gallery">
            <div className="gallery__container wrapper">
                {fishImage.map((item,index) => {
                    return(
                        <div className="image__container" key={index}>
                            <img src={item.picture} className="gallery__image" alt={item.name} />
                            <div className="gallery__description">
                                <h2 className="image__title">{item.name}</h2>
                                <p className="image__description">{item.description}</p>
                            </div>
                        </div>
                    )
                })}
                
                <Button className="button__slider button__prev">{'<'}</Button>
                <Button className="button__slider button__next">{'>'}</Button>
            </div>
        </div>
    )
}

export default Gallery