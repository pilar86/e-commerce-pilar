import React, {useState, useEffect} from 'react';
import "./itemListContainer.css";
/*import getItems from "../../services/mockAPI";*/
import ItemList from "../../components/Productos/ItemList";
import { useParams } from "react-router-dom";
import getItems, { getItemsByCategory } from '../../services/mockAPI';


function ItemListContainer() {

        let [data, setData] = useState([]);
        useEffect(
            ()=>{
            getItems().then((respDatos)=>{
            setData (respDatos);
            console.log("data recibida",  data);
            });
},[]);

    const { categoria } = useParams ();

    useEffect(()=>{
        if (categoria === undefined) {
            getItems().then((respDatos)=> setData(respDatos));
        } else {
            getItemsByCategory(categoria).then((respDatos) => setData (respDatos));
        }
    }, [categoria]);

    return (
        <div>
            <div className="main container">
                <ItemList data = {data}/>  
                </div>
            </div>
    );
}

export default ItemListContainer;


    /*useEffect(
                ()=>{
                getItems().then((respDatos)=>{
                setData (respDatos);
                console.log("data recibida", data);
                });
            },[]);
            */
    
    
    