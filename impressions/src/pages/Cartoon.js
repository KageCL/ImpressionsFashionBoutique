import Item from "../components/Item.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Cartoon = () => {

    const [inside, setInside] = useState([]);
    const [turtle, setTurtle] = useState([]);
    const [powerpuff, setPowerpuff] = useState([]);
    


    useEffect(() => {
        (async () => {
            const insideResponse = await axios.get(
                "https://impressions-backend.onrender.com/api/inside"
            );
            const turtleResponse = await axios.get(
                "https://impressions-backend.onrender.com/api/turtle"
            );
            const powerpuffResponse = await axios.get(
                "https://impressions-backend.onrender.com/api/powerpuff"
            );
    
            console.log(insideResponse.data);
            console.log(turtleResponse.data);
            console.log(powerpuffResponse.data);
            

            setInside(insideResponse.data.inside_out);
            setTurtle(turtleResponse.data.turtles);
            setPowerpuff(powerpuffResponse.data.powerpuff);
        })();
    }, []);
    
    return (
        <>

            <h3 className="label">Inside Out: </h3>
            <section id="item-area">
                {inside.map((inside) => {
                   return <Item type="item" name={inside.name} link="/KeychainItem" image={`https://impressions-backend.onrender.com/${inside.image}`} desc={inside.description}/>;
                })}
            </section>

            <h3 className="label">TMNT: </h3>
            <section id="item-area">
                {turtle.map((turtle) => {
                   return <Item type="item" name={turtle.name} link="/KeychainItem" image={`https://impressions-backend.onrender.com/${turtle.image}`} desc={turtle.description}/>;
                })}
            </section>

            <h3 className="label">Powerpuff Girls: </h3>
            <section id="item-area">
                {powerpuff.map((powerpuff) => {
                   return <Item type="item" name={powerpuff.name} link="/KeychainItem" image={`https://impressions-backend.onrender.com/${powerpuff.image}`} desc={powerpuff.description}/>;
                })}
            </section>
        </>
    );
};

export default Cartoon;