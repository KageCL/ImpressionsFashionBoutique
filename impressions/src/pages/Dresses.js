import Item from "../components/Item.js";
import AddDialog from "../components/add-dialog.js";
import "../css/Clothing.css";
import axios from "axios";

import React, {useState, useEffect} from "react";
const Dresses = () => {

    const [dresses, setDresses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() =>{
        (async () => {
            const response = await axios.get(
              "https://impressions-backend.onrender.com/api/dresses"
            );

            console.log(response.data);
            setDresses(response.data);
          })();
    }, []);

    const addDress = (dress) =>{
        setDresses((dresses) => [...dresses, dress]);
    };
    const openAddDialog = () =>{
        setShowAddDialog(true);
    };

    const closeAddDialog = () =>{
        setShowAddDialog(false);
    };

    return (
        <>

            <button id="add-dress" onClick={openAddDialog}>+</button>

            {showAddDialog ? <AddDialog closeDialog={closeAddDialog} addDress={addDress}/>:""}
            

            <h3 className="label">Dresses: </h3>
            <section id="item-area">
                {dresses.map((dress) => {
                   return <Item type="item" _id={dress._id} name={dress.name} link="/ClothingItem" image={`https://impressions-backend.onrender.com/${dress.image}`} desc={dress.description}/>;
                })}
            </section>
        </>
    );
};

export default Dresses;