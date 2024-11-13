import Item from "../components/Item.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Shorts = () => {

    const [shorts, setShorts] = useState([]);

    useEffect(() =>{
        (async () => {
            const response = await axios.get(
              "https://impressions-backend.onrender.com/api/shorts"
            );

            console.log(response.data);
            setShorts(response.data.shorts);
          })();
    }, []);
    return (
        <>
            <h3 className="label">Shorts: </h3>
            <section id="item-area">
                {shorts.map((short) => {
                   return <Item type="item" name={short.name} link="/ClothingItem" image={`https://impressions-backend.onrender.com/${short.image}`} desc={short.description}/>;
                })}
            </section>
        </>
    );
};

export default Shorts;
