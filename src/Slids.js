import { useState } from "react";
import { data } from "./data";

function Slids() {
    const [pic, setPic] = useState(0);
    const { name, image} = data[pic]
    

    const prevPhoto = () => {
        setPic((pic => {
            pic--
        if (pic < 0) {
            return data.length -1
        }
        return pic
        }))
        
    }

    const nextPhoto = () => {
        setPic((pic => {
            pic++
            if (pic > data.length -1) {
                pic=0
            }
            return pic
        }))
    }

    return (
        <div className="container">
            <div className="container">
                <h1> Музеи Санкт-Петербурга</h1>
                
            </div>

            <div className="flex-wrapper">
            <div className="slider-wrapper">

            <div className="slider">
                <img className="foto" src={image}  alt="city" />
                <p className="par">{name}</p>
            </div>
            
            <div className="btn-prev" onClick={prevPhoto}>&#10094;</div>
            <div className="btn-next" onClick={nextPhoto}>&#10095;</div>
        </div>
    </div>
        </div>
    )
}

export default Slids;