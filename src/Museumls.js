import { useState } from "react";
import { data } from "./data";


function Museumls() {
   
    const [museum, setMuseum] = useState(data);
    const [showText, setShowText] = useState(false);


    const removeItem = (id) => {
        let newMuseum = museum.filter(elem => elem.id !== id );
        setMuseum(newMuseum);
    }

    const showMoreClick = (item) => {
        item.showMore = !item.showMore;
        setShowText(!showText)
    }

    return (
        <div>
            
            
            {museum.map((item) => {
                const {id, name, image, text, showMore} = item;
                    return (
                        <div key={id} className="container">
                            
                            <h2>{id}. {name}</h2>
                            <img src={image} width="450px" alt="музей" />
                            <p>{showMore ? text : text.substring(0, 220) + "..."}
                            <button className="btn-show" onClick={() => showMoreClick(item)}>{showMore ? "Скрыть" : "Показать"}</button>
                            </p>
                            <button className="btn-rem" onClick={() => removeItem(id)}>Удалить</button>
                            
                        </div>
                        
                    )
                })}
                        <div className="container">
                            <button className="btn-del" onClick={() => {setMuseum([])}}>Удалить весь список</button>
                        </div>
                        </div>
    )

}

export default Museumls;