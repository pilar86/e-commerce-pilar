import React from 'react';
import Item from "../Productos/Item";

function ItemList(props) {
    return (
        <div>
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
    )
}

export default ItemList;