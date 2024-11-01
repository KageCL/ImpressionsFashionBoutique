import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import Header from "./components/Header";
const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <Header/>

            <nav id="main-nav" className={menuOpen?"":"hide-small"}>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/about">About</Link></li> 
              <li><Link to="/pictures">Pictures</Link></li>
            </nav>
            
            <Outlet />

            <p>This is my footer</p>
        </>
    );
};

export default Layout;
