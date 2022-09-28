import React from 'react';
import Item from "../Productos/Item";
import "./itemList.css";

function ItemList(props) {
    return (
        <div className = "cards-container">
            {props.data.map((item) => {

            return (
                <Item
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    detail={item.detail}
                    price={item.price}
                />
            );
            })}
        </div>
    );
}

export default ItemList;