import React, {useState, useEffect} from 'react';

import "./itemListContainer.css";
import getItems from "../../services/mockAPI";
import ItemList from "../../components/Productos/ItemList";


function ItemListContainer(props) {

        let [data, setData] = useState([]);

        useEffect(
                ()=>{
                getItems().then((respDatos)=>{
                setData (respDatos);
                console.log("data recibida",  data);
                });
    },[]);
    
    
    
    return (
        <div>
        <div className="main container">
            <ItemList data = {data}/>  
        </div>
        </div>
    );
}


export default ItemListContainer;