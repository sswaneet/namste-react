import { appLogoURL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;