import "../css/dialog.css";
import React, { useState } from "react";

const DeleteItem = (props) => {
    const [result, setResult] = useState("");
    const deleteItem = async() => {

        console.log(props._id);
        console.log(props.name);
        console.log(props);
        const response = await fetch(
            `https://impressions-backend.onrender.com/api/dresses/${props._id}`,
            {
                method: "DELETE",
            }
        );

        if(response.status === 200){
            setResult("Item Successfully Deleted");
            props.hideItem();
            props.closeDialog();
        } else{
            console.log("Error deleting item", response);
            setResult(response.message);
        }
    };
    

    return  (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>            
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