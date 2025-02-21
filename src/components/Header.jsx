import { useState, useContext} from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Title = () => (

    <a href="/">
  <img className="logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/833/9125194833_704ee3c5-f4f0-4383-9dab-577e9bafe130.png?cb=1729192151" ></img>
  </a>
  );

  const Header = () => {
    const [isLoggenIn, setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    const cartItems = useSelector((state) => state?.cart?.items);
      console.log(cartItems);
    return (
      <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            
            <li>
            <Link to="/">Home </Link>
              </li>
            <li>
            <Link to="/about">
            About</Link>
              </li>
            
              <li>
            <Link to="/contact">
            Contact</Link>
              </li>
            <li>
             <Link to="/GharKaMart"> GharKaMart</Link>
              </li>
              <Link to="/cart">
  <li className="cart-btn">Cart - {cartItems?.length}</li>
</Link>

          </ul>
        </div>
        <div className="user-info text-right space-y-1">
        <p className="text-lg font-semibold text-gray-800">{user?.names}</p>
        <p className="text-sm text-gray-600 italic">{user?.email}</p>
      </div>
        {
         isLoggenIn ? (
          <button className="logoutbtn" onClick={() => setIsLoggedIn(false)}>Logout</button> 
        ) : (
          <button className="loginbtn" onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
      </div>
    );
  }; 
  export default Header;