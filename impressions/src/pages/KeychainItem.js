import Leonardo from "../images/leo-keychain.jpg";
import "../css/ClothingItem.css";
import { Outlet, NavLink } from "react-router-dom";
const KeychainItem = () => {
    return (
        <>
            <div id="main-content">
            <div id="item-img">
                <img src={Leonardo}/>
            </div>
            <div id="info">
                <div id="top">
                    <h1>Keychain Name</h1>
                    <h2>Price: $00.00</h2>
                </div>
                <div id="middle">
                    <div id="left-middle">
                        <div>
                            <h2>Design</h2>
                        </div>
                    </div>
                    <div id="right-middle">
                        <div>
                            <h2>Quantity</h2>
                        </div>
                    </div>
                </div>
                <div id="bottom">
                    <h2>Description</h2>
                    <p>Leonardo, a giant mutant turtle with a blue bandana and leader of the group.</p>

                    <h2 id="cart-btn"><NavLink to="/Cart">Add to Cart</NavLink></h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default KeychainItem;