import React from 'react';
import "./cartWidget.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
    return (
        <div className="cart"> 
        <FontAwesomeIcon icon={faCartArrowDown}/>
        </div>
    )
}

export default CartWidget;