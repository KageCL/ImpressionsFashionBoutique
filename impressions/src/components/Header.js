import "../css/Header.css";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../images/site-logo2.png";
const Header = () => {
    return (
        <header>
            <div id="header-top">
                <img src={logo} id="main-img"/>
                <h1 id="main-header">Impressions Fashion Boutique</h1>
                <nav id="main-menu">
                        <ul>
                            <li><a><NavLink to="/">Admin Login</NavLink></a></li>
                            <li><a><NavLink to="/Cart">Shopping Cart</NavLink></a></li>
                        </ul>
                </nav>
            </div>
            <div id="header-bottom">

            </div>
        </header>
    );
};

export default Header;