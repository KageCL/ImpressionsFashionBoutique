import Item from "../components/Item.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Outfits = () => {

    const [outfits, setOutfits] = useState([]);

    useEffect(() =>{
        (async () => {
            const response = await axios.get(
              "https://impressions-backend.onrender.com/api/outfits"
            );

            console.log(response.data);
            setOutfits(response.data.outfits);
          })();
    }, []);
    return (
        <>

            <h3 className="label">Outfits: </h3>
            <section id="item-area">
                {outfits.map((outfit) => {
                   return <Item type="item" name={outfit.name} link="/ClothingItem" image={`https://impressions-backend.onrender.com/${outfit.image}`} desc={outfit.description}/>;
                })}
            </section>
        </>
    );
};

export default Outfits;