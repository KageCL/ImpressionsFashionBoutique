import Item from "../components/Item.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Rompers = () => {

    const [rompers, setRompers] = useState([]);

    useEffect(() =>{
        (async () => {
            const response = await axios.get(
                "https://impressions-backend.onrender.com/api/rompers"
            );

            console.log(response.data);
            setRompers(response.data.rompers);
          })();
    }, []);
    return (
        <>
            <h3 className="label">Rompers: </h3>
            <section id="item-area">
                {rompers.map((romper) => {
                   return <Item type="item" name={romper.name} link="/ClothingItem" image={romper.image} desc={romper.description}/>;
                })}
            </section>
        </>
    );
};

export default Rompers;
