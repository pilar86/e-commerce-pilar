import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


function ItemDetail({ data }) {

  // estado para guardar el valor del "count" del ItemCount  

    const [handleEstado, setHandleEstado] = useState(false)

    const handleAddToCart = (count) => {
    alert(`Agregaste al carrito ${count} productos.`)
    setHandleEstado(true)
    } 

    return (
            <div className="CardDetail">
                
                <img src={data.img} alt={data.title}/>
                <h4>{data.title}</h4>
                <h4>{data.detail}</h4>
                <h4>${data.price}</h4>  
                { handleEstado === false? <ItemCount initial={1} stock={data.stock} onAddToCart={handleAddToCart}/>:<Link to="/Cart">Finalizar Compra</Link>}          
               
            </div>
    );
}

export default ItemDetail;

/*
 <ItemCount initial={1} stock={data.stock} onAddToCart={handleAddToCart}/>              
 */