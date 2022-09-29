import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
      <NavBar/>

      <Routes> 
        <Route path="/" element={<ItemListContainer greeting = " Beauty & Skin Care"/>}/>
        <Route path="/home" element={<ItemListContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/body/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h7>404: producto no encontado</h7>}/>
      </Routes>

      
      <Footer/>
    </BrowserRouter>
     
  );
}


export default App;
