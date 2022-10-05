import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
      <NavBar/>

      <Routes> 
        <Route path="/home" element={<ItemListContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/body/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h7>"Producto no Encontado"</h7>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
     
  );
}
export default App;
