import "./navbar.css";
import CartWidget from "./CartWidget";


function NavBar () {
    return (
      <div className="navbar">
        <h1>
           Natural 
        </h1>
        <CartWidget/>
        
        <div id ="sectionsNav"> 
            <ul>
                <li>Home</li>
                <li>Cosmetics</li>
                <li>Hair</li>
                <li>Body</li>
            </ul>
        </div>
      </div>
    )
  }
  
  export default NavBar;