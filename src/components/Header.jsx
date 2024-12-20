import { useState } from "react";
import { Link } from "react-router";

export const Title = () => (
    <a href="/">
  <img className="logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/833/9125194833_704ee3c5-f4f0-4383-9dab-577e9bafe130.png?cb=1729192151" ></img>
  </a>
  );
  

  const Header = () => {
    const [isLoggenIn, setIsLoggedIn] = useState(false);
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
          </ul>
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