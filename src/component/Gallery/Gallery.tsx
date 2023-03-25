import React, { FC, useState, useEffect } from "react";
import '../../styles/Gallery.css';
import '../../styles/Button.css';
import { useAppSelector } from "../../hooks/redux";
import Button from "../Button/Button";
import { CSSTransition } from "react-transition-group";





const Gallery: FC = () => {
    const fishImage = useAppSelector(state => state.FishReducer.fish)

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [changeSlide, setChangeSlide] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex(activeIndex === fishImage.length - 1 ? 0 : activeIndex + 1);
        setChangeSlide(true)
        }, 5000);
        setChangeSlide(false)
        return () => clearInterval(interval);
    }, [activeIndex]);

    return(
            <div className="gallery">
                <div className="gallery__container wrapper">
                    {fishImage.map((item,index) => {
                        return(
                            <CSSTransition in={changeSlide} classNames='image__container' timeout={500} key={index}>
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
                  
                    <Button className="button__slider button__prev" onClick={() => {
                        setActiveIndex(activeIndex < 1 ? fishImage.length - 1 : activeIndex - 1)
                        setChangeSlide(true)
                        }
                    }>{'<'}</Button>
                    <Button className="button__slider button__next" onClick={() => {
                        setActiveIndex(activeIndex === fishImage.length - 1 ? 0 : activeIndex + 1)
                        setChangeSlide(true)
                        }
                    }>{'>'}</Button>
                </div>
            </div>
    )
}

export default Gallery