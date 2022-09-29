import React from 'react';
import "./Item.css";
import { Link } from "react-router-dom";


function Item(props) {
    let { img, title, price, id } = props;
    /* Hooks*/
    const urlDetalle = `/body/${props.id}`;

    const onAdd = (quantity) => {
    console.log(quantity)
    }

    return(
        <div className="card">
            <div className="card-img">
                <img src={img} alt="card img"></img>
            </div>
            <div className="card-detail">
                <h3>{title}</h3>
                <h4>${price}</h4>
            </div>
            <Link to={urlDetalle}> 
                <button className= "ver-mas">Ver Más</button>
            </Link> 
        </div>         
    );
}

export default Item;

/* 
     <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemCount initial={1} stock={15} onAdd={onAdd}/>
        <ItemCount initial={1} stock={0} onAdd={onAdd}/>

        */