import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings = " Beauty & Skin Care"/> 
      <ItemDetailContainer/>
    </div>
     
  );
}


export default App;
