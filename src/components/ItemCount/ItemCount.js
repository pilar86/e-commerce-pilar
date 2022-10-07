import React from 'react';
import "./itemCount.css";


export default function ItemCount({ stock, onAddToCart, qantty, setQantty })  {
    
    const handleAdd = () => {
        setQantty( qantty + 1);   
    }
    

    const handleSubstract = () => {
        setQantty(qantty - 1);
     }
    
     

    return (
        <div className="counter">

            <button disabled= {qantty >= stock} onClick={handleAdd}>+</button>

            <span>{qantty}</span>

            <button disabled = {qantty <= 1} onClick={handleSubstract}>-</button>

            <div className="btnAddToCart">          
                <button onClick={() => onAddToCart()}>Agregar al Carrito</button>        
            </div>         
        
        </div>
    );
}





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
} 

 <button onClick={() => onAddToCart(count)}>Agregar al Carrito</button>
*/


