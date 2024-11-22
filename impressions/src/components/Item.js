import "../css/Item.css";
import { Outlet, NavLink } from "react-router-dom";
import React, { useState } from "react";
import EditItem from "./EditItem";
import DeleteItem from "./DeleteItem";
const Item = (item) => {

    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [Item, setItem] = useState(item);
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
            <section className={item.type}>


            {showDeleteDialog ? (
            <DeleteItem
              closeDialog={closeDeleteDialog}
              hideItem = {hideItem}
              name={item.name}
              _id = {item._id}
              
            />
          ) : ("")}

            {showEditDialog ? (
            <EditItem
              closeDialog={closeEditDialog}
              updateItem = {editItem}
              _id = {item._id}
              name = {item.name}
              description = {item.description}
              
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
                <h3 className="item-name"><NavLink to={item.link}>{item.name}</NavLink></h3>
                <img className="item-pic" src={item.image} alt={item.name} />
                <p className="item-desc">{item.desc}</p>
            </section>
        ) : ("")}
        </>
    )
};

export default Item;