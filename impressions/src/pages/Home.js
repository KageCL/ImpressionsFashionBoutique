import Item from "../components/Item.js";
import "../css/Home.css";
import lion from "../images/lion-legging.jpg";

const Home = () => {
    return (
        <>
            <h3 id="label">Popular Items: </h3>
            <div id="content">
                <section id="item-area">
                    <Item type="homeItem" name="Butterfly Dress" image="images/butterfly-dress.jpg" link="/ClothingItem" desc="This is a bunch of example text describing the example dress. The example dress is a dress that's an example."/>
                    <Item type="homeItem" name="Gojo Keychain" image="images/gojo-keychain.jpg" link="/KeychainItem" desc="This is a bunch of text describing a keychain in the anime category. Anime keychain is a keychain from an anime."/>
                    <Item type="homeItem" name="Cool Short Leggings" image="images/cool-short-legging.jpg" link="ClothingItem" desc="This is a bunch of example text describing the example leggings. The example leggings are leggings that act as an example."/>
                    <Item type="homeItem" name="Plain Shorts" image="images/plain-short.jpg" link="ClothingItem" desc="This is a bunch of example text describing the example shorts. The example shorts are shorts that act as an example."/>
                    <Item type="homeItem" name="Beach Outfit" image="images/beach-outfit.jpg" link="ClothingItem" desc="This is a bunch of example text describing the example beach outfit. The example beach outfit is a beach outfit that acts as an example."/>
                    <Item type="homeItem" name="Flower Skorts" image="images/flower-skort.jpg" link="ClothingItem" desc="This is a bunch of example text describing the example skorts. The example skorts are skorts that act as an example."/>
                </section>
                <aside id="side">
                    <img src={lion} alt="Lion Leggings"/>
                </aside>
            </div>
        </>
    );
};

export default Home;
