import Item from "../components/Item.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Anime = () => {

    const [dragon, setDragon] = useState([]);
    const [naruto, setNaruto] = useState([]);
    const [jujutsu, setJujutsu] = useState([]);
    


    useEffect(() => {
        (async () => {
            const dragonResponse = await axios.get(
                "https://impressions-backend.onrender.com/api/dragon"
            );
            const narutoResponse = await axios.get(
                "https://impressions-backend.onrender.com/api/naruto"
            );
            const jujutsuResponse = await axios.get(
                "https://impressions-backend.onrender.com/api/jujutsu"
            );
    
            console.log(dragonResponse.data);
            console.log(narutoResponse.data);
            
            setDragon(dragonResponse.data.dragon);
            setNaruto(narutoResponse.data.naruto);
            setJujutsu(jujutsuResponse.data.jujutsu);
        })();
    }, []);
    
    return (
        <>

            <h3 className="label">Dragon Ball: </h3>
            <section id="item-area">
                {dragon.map((dragon) => {
                   return <Item type="item" name={dragon.name} link="/KeychainItem" image={dragon.image} desc={dragon.description}/>;
                })}
            </section>

            <h3 className="label">Naruto: </h3>
            <section id="item-area">
                {naruto.map((naruto) => {
                   return <Item type="item" name={naruto.name} link="/KeychainItem" image={naruto.image} desc={naruto.description}/>;
                })}
            </section>

            <h3 className="label">Jujutsu Kaisen: </h3>
            <section id="item-area">
                {jujutsu.map((jujutsu) => {
                   return <Item type="item" name={jujutsu.name} link="/KeychainItem" image={jujutsu.image} desc={jujutsu.description}/>;
                })}
            </section>
        </>
    );
};

export default Anime;