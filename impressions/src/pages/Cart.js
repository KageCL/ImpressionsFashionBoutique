import "../css/Cart.css";
import butterflyDress from "../images/butterfly-dress.jpg";
import Leonardo from "../images/leo-keychain.jpg";
const Cart = () => {
    return (
        <>
            <div id="main-cont">
            <div id="cart">
                <div class="cartItem">
                    <div class="pic">
                        <h2>Lion Leggings</h2>
                        <img src={butterflyDress}/>
                    </div>
                    <div class="info">
                        <div id="column-1" class="column">
                            <div class="label">
                                <h3>Price</h3>
                                <h4>$10.00</h4>
                            </div>
                            <div class="label">
                                <h3>Size</h3>
                                <h4>Large</h4>
                            </div>
                        </div>
                        <div id="column-2" class="column">
                            <div class="label">
                                <h3>Design</h3>
                                <h4>Lion</h4>
                            </div>
                            <div class="label">
                                <h3>Qt.</h3>
                                <h4>2</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cartItem">
                    <div class="pic">
                        <h2>Goku Keychain</h2>
                        <img src={Leonardo}/>
                    </div>
                    <div class="info">
                        <div id="column-1" class="column">
                            <div class="label">
                                <h3>Price</h3>
                                <h4>$5.00</h4>
                            </div>
                            <div class="label">
                                <h3>Qt.</h3>
                                <h4>2</h4>
                            </div>
                        </div>
                        <div id="column-2" class="column">
                            <div class="label">
                                <h3>Design</h3>
                                <h4>Goku</h4>
                            </div>
                            <div class="label">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="user-info">
                <div id="total">
                    <h2>Total</h2>
                    <h3>[Clothing Product] $10.00 <br/>
                        [Keychain Product] $5.00  <br/>
                        = $15.00
                    </h3>
                </div>
                <div id="card-info">
                    <h2>Card Information</h2>
                    <h3>First Name: Christian</h3>
                    <h3>Last Name: Lowery</h3>
                    <h3>Card Number: 5034 8769 2043 1079</h3>
                    <h3>Expiration: 11/27</h3>
                    <h3>CVC: 343</h3>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cart;
