import React, {useState, useEffect }from 'react';
import {getSingleItem} from "../../services/mockAPI";
import './itemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';




function ItemDetailContainer() {
    let [data, setData] = useState({});

    useEffect (()=> {

    getSingleItem().then((respuestaDatos)=> setData(respuestaDatos));
    }, []);
    
    return(
        <div>
            <div className="main container">
                { /* Card Detail */}
                    <img src={data.img}/>
                    <h3>{data.title}</h3>
                    <h3>{data.detail}</h3>
                    <h3>{data.price}</h3>            
                    <ItemCount initial={1} stock={data.stock}/>              
               
                
            </div>
        </div>
    );
}

export default ItemDetailContainer;