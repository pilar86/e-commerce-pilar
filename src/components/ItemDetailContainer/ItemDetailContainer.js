import React, {useState, useEffect }from 'react';
import {getSingleItem} from "../../services/mockAPI";
import './itemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from "react-router-dom";





function ItemDetailContainer() {
    let [data, setData] = useState({});

    /*forma larga
    const params = useParams();
    const id = params.id; */

    /*sugar syntax / destracturing */
    const { id } = useParams();


    useEffect (()=> {

    getSingleItem(id).then((respuestaDatos)=> setData(respuestaDatos));
    }, []);
    
    return(
        <div>
            <div className="CardDetail">
                { /* Card Detail */}
                    <img src={data.img} alt={data.title}/>
                    <h3>{data.title}</h3>
                    <h3>{data.detail}</h3>
                    <h3>${data.price}</h3>            
                    <ItemCount initial={1} stock={data.stock}/>              
            </div>
        </div>
    );
}

export default ItemDetailContainer;