import "../css/Dialog.css";
import React, { useState } from "react";

const DeleteItem = (item) => {
  const [result, setResult] = useState("");

  const deleteItem = async() => {
    const response = await fetch(`http://localhost:3001/api/items/${item._id}`, {
      method: "DELETE"
    });

    if(response.status === 200){
      setResult("Item successfully deleted");
      item.hideItem();
      item.closeDialog();
    } else {
      setResult("Sorry, we couldn't delete your item at this time.");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={item.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {item.name}?</h3>
            <section>
              <button onClick={item.closeDialog}>No</button>            
              <button onClick={deleteItem}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
