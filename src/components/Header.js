import { useEffect, useState } from "react";
import { appLogoURL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");

  useEffect(() => {
    console.log("header randered");
  }, [btnLogin]);

  return (
    <div id="header-container" className="header-container">
      <div className="logo-container">
        <img className="app-logo" src={appLogoURL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="link-restro">Home</Link>
          </li>
          <li>
            <Link to="/about" className="link-restro">About</Link>
          </li>
          <li>
            <Link to="/contact" className="link-restro">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="btnLogin"
            onClick={() => {
              btnLogin == "Login"
                ? setbtnLogin("Logout")
                : setbtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
