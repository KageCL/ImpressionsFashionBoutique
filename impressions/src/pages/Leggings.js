import Item from "../components/Item.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Leggings = () => {

    const [leggings, setLeggings] = useState([]);

    useEffect(() =>{
        (async () => {
            const response = await axios.get(
              "https://impressions-backend.onrender.com/api/leggings"
            );

            console.log(response.data);
            setLeggings(response.data.jeggings);
          })();
    }, []);
    return (
        <>

            <h3 className="label">Leggings: </h3>
            <section id="item-area">
                {leggings.map((legging) => {
                   return <Item type="item" name={legging.name} link="/ClothingItem" image={legging.image} desc={legging.description}/>;
                })}
            </section>
        </>
    );
};

export default Leggings;