import React from 'react';
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ data }) {
    
    function handleAddToCart(count) {
    alert(`Agregaste al carrito ${count} productos.`);
    } 

    return (
            <div className="CardDetail">
                
                <img src={data.img} alt={data.title}/>
                <h4>{data.title}</h4>
                <h4>{data.detail}</h4>
                <h4>${data.price}</h4>            
                <ItemCount initial={1} stock={data.stock} onAddToCart={handleAddToCart}/>              
            </div>
    );
}

export default ItemDetail;