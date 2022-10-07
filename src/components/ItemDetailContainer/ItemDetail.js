import React, { useContext, useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";

function ItemDetail({ data }) {

  const {qantty, setQantty} = useState(1)

  //queremos conectar al context con useContext
  const { addItem } = useContext(cartContext);

  const onAddToCart = () => {
    addItem(data, qantty)
  }

    return (
        <div className="CardDetail">
                
          <img src={data.img} alt={data.title}/>
          <h4>{data.title}</h4>
          <h4>{data.detail}</h4>
          <h4>${data.price}</h4>  
          <ItemCount qantty={qantty} setQantty={setQantty} stock={data.stock} onAdd={onAddToCart}/>          
               
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

/*const [handleEstado, setHandleEstado] = useState(false)

function handleAddToCart(count) {
  addItem(data, count)
} */