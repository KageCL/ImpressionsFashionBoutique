import butterflyDress from "../images/butterfly-dress.jpg";
import "../css/ClothingItem.css";
import { Outlet, NavLink } from "react-router-dom";
const ClothingItem = () => {
    return (
        <>
            <div id="main-content">
            <div id="item-img">
                <img src={butterflyDress}/>
            </div>
            <div id="info">
                <div id="top">
                    <h1>Lion Leggings</h1>
                    <h2>Price: $00.00</h2>
                </div>
                <div id="middle">
                    <div id="left-middle">
                        <h2>Size</h2>
                    </div>
                    <div id="right-middle">
                        <div>
                            <h2>Design</h2>
                        </div>
                        <div>
                            <h2>Quantity</h2>
                        </div>
                    </div>
                </div>
                <div id="bottom">
                    <h2>Description</h2>
                    <p>Lion print leggings made from cotton with a great stretch to them. While the leggings have no pockets they also don't need to be washed in any special way.</p>

                    <h2 id="cart-btn"><NavLink to="/Cart">Add to Cart</NavLink></h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default ClothingItem;