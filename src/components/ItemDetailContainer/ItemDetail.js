import React, { useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount";

import { cartContext } from "../../context/cartContext";

function ItemDetail({ data }) {
  //queremos conectar al context con useContext
   const { addItem } = useContext(cartContext);

    //const [handleEstado, setHandleEstado] = useState(false)

function handleAddToCart(count) {
      addItem(data, count)
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

/*
 <ItemCount initial={1} stock={data.stock} onAddToCart={handleAddToCart}/>              
 
 desafio anterior: // estado para guardar el valor del "count" del ItemCount 
 (ahora cambia)
              const handleAddToCart = (count) => {
              alert(`Agregaste al carrito ${count} productos.`)
                  setHandleEstado(true)

{ handleEstado === false? <ItemCount initial={1} stock={data.stock} onAddToCart={handleAddToCart}/>:<Link to="/Cart">Finalizar Compra</Link>}          
 */