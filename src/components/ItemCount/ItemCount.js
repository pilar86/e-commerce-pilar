import React, {useState} from "react";
import "./itemCount.css";


function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    

    const handleAdd = () => {
        setCount(count + 1);   
    };

    const handleSubstract = () => {
        setCount(count - 1);
     };
    

    return (
        <div className="counter">

            <button disabled= {count >= stock} onClick={handleAdd}>+</button>

            <span>{count}</span>

            <button disabled = {count <= 1} onClick={handleSubstract}>-</button>

            <div className="btnAddToCart">
                <button disabled = {stock <=0} onClick={() =>onAdd (count)}>Agregar al Carrito</button>{""}
            </div>

        </div>
    );
}

export default ItemCount;



   /*const handleSubstract= () =>{
        setCount(count-1);
    };

    return (
        <div className="counter">
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-</button>
            <div>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    );
} */


