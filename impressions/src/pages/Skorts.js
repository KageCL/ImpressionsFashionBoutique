import Item from "../components/Item.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Skorts = () => {

    const [skorts, setSkorts] = useState([]);

    useEffect(() =>{
        (async () => {
            const response = await axios.get(
              "https://impressions-backend.onrender.com/api/skorts"
            );

            console.log(response.data);
            setSkorts(response.data.skorts);
          })();
    }, []);
    return (
        <>
            <h3 className="label">Skorts: </h3>
            <section id="item-area">
                {skorts.map((skort) => {
                   return <Item type="item" name={skort.name} link="/ClothingItem" image={skort.image} desc={skort.description}/>;
                })}
            </section>
        </>
    );
};

export default Skorts;
