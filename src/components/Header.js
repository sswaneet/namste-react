import { useState } from "react";
import { appLogoURL } from "../utils/constants";

const Header = () => {

    const [btnLogin,setbtnLogin] = useState("Login");

    return (
      <div id="header-container" className="header-container">
        <div className="logo-container">
          <img
            className="app-logo"
            src={appLogoURL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Cart</li>
            <button className="btnLogin" onClick={
                ()=>{
                    (btnLogin=="Login") ? setbtnLogin("Logout") : setbtnLogin("Login");
                }
            }>
                {btnLogin}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;