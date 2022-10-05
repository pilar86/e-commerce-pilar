import React, {useState, useEffect }from 'react';
import {getSingleItem} from "../../services/mockAPI";
import './itemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from "react-router-dom";


function ItemDetailContainer() {

    let [data, setData] = useState({});
    const  id = useParams().id;

    useEffect (()=> {

    getSingleItem(id).then((respuestaDatos)=> setData(respuestaDatos));
    }, [id]);

    return(
            <div className="CardDetail">
                
                <img src={data.img} alt={data.title}/>
                <h4>{data.title}</h4>
                <h4>{data.detail}</h4>
                <h4>${data.price}</h4>            
                <ItemCount initial={1} stock={data.stock}/>              
            </div>
    );
}

export default ItemDetailContainer;




/*forma larga
    const params = useParams();
    const id = params.id; */

    /*sugar syntax / destracturing 
    const { id } = useParams(); */