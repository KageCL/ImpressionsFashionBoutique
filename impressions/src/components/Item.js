import "../css/Item.css";
import { Outlet, NavLink } from "react-router-dom";
import React, { useState } from "react";
import EditItem from "./EditItem";
import DeleteItem from "./DeleteItem";
const Item = (props) => {

    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [Item, setItem] = useState(props);
    const [showItem, setShowItem] = useState(true);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hideItem = () => {
    setShowItem(false);
  }

  const editItem = (newItem) => {
    setItem(newItem);
  };  
    
    return (

        <>

        {showItem ? (
            <section className={Item.type}>


            {showDeleteDialog ? (
            <DeleteItem
              closeDialog={closeDeleteDialog}
              hideItem = {hideItem}
              name={Item.name}
              _id={Item._id}
              
            />
          ) : ("")}

            {showEditDialog ? (
            <EditItem
              closeDialog={closeEditDialog}
              updateItem = {editItem}
              _id = {Item._id}
              name = {Item.name}
              description = {Item.description}
              
            />
          ) : ("")}

                <section id="change-buttons">
                    <a href="#" onClick={openEditDialog}>
                        &#9998;
                    </a>
                    <a href="#" onClick={openDeleteDialog}>
                        &#x2715;
                    </a>
                </section>
                <h3 className="item-name"><NavLink to={Item.link}>{Item.name}</NavLink></h3>
                <img className="item-pic" src={Item.image} alt={Item.name} />
                <p className="item-desc">{Item.desc}</p>
            </section>
        ) : ("")}
        </>
    )
};

export default Item;