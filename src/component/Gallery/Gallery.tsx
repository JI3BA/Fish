import React, { FC, useState, useEffect } from "react";
import '../../styles/Gallery.css';
import '../../styles/Button.css';
import { useAppSelector } from "../../hooks/redux";
import Button from "../Button/Button";




const Gallery: FC = () => {
    const fishImage = useAppSelector(state => state.FishReducer.fish)

    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex(activeIndex === fishImage.length - 1 ? 0 : activeIndex + 1);
        }, 10000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return(
        <div className="gallery">
            <div className="gallery__container wrapper">
                {fishImage.map((item,index) => {
                    return(
                        <div className={index === activeIndex ? "image__container active" : "inactive"} key={index}>
                            <img src={item.picture} className="gallery__image" alt={item.name} />
                            <div className="gallery__description">
                                <h2 className="image__title">{item.name}</h2>
                                <p className="image__description">{item.description}</p>
                            </div>
                        </div>
                    )
                })}
                
                <Button className="button__slider button__prev" onClick={() => setActiveIndex(activeIndex < 1 ? fishImage.length - 1 : activeIndex - 1)}>{'<'}</Button>
                <Button className="button__slider button__next" onClick={() =>  setActiveIndex(activeIndex === fishImage.length - 1 ? 0 : activeIndex + 1)}>{'>'}</Button>
            </div>
        </div>
    )
}

export default Gallery