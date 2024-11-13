import Item from "../components/Item.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Dresses = () => {

    const [dresses, setDresses] = useState([]);

    useEffect(() =>{
        (async () => {
            const response = await axios.get(
              "https://impressions-backend.onrender.com/api/dresses"
            );

            console.log(response.data);
            setDresses(response.data.dresses);
          })();
    }, []);
    return (
        <>

            <h3 className="label">Dresses: </h3>
            <section id="item-area">
                {dresses.map((dress) => {
                   return <Item type="item" name={dress.name} link="/ClothingItem" image={`https://impressions-backend.onrender.com/${dress.image}`} desc={dress.description}/>;
                })}
            </section>
        </>
    );
};

export default Dresses;