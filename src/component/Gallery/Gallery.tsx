import React, {FC, useEffect} from "react";
import '../../styles/Gallery.css'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";


const Gallery: FC = () => {
    const dispatch = useAppDispatch()
    const fishImage = useAppSelector(state => state.FishReducer.fish)
   

    return(
        <div className="gallery">
            <div className="gallery__container wrapper">
                {fishImage.map((item,index) => <img src={item.picture} key={index} className="gallery__image" alt={item.name} />)}
            </div>
        </div>
    )
}

export default Gallery