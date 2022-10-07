import React, { useState, createContext } from "react";
// 1- Se inicializa CreateContext

const cartContext = createContext({username: "nonymous", logedIn: false});

// 2- Se define nuestro Provider

export default function CartContextProvider({children}) {
        const [cart, setCart] = useState([]);

        function addItem(data, count) {
            console.log("desde context", data, count)
        }

        return(
            //3- se pasa el objeto Value a los componentes hijos
        <cartContext.Provider value ={{ cart, addItem}}>{children}</cartContext.Provider>
        );
}

export { cartContext }
