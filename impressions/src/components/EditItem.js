import "../css/Dialog.css";
import React, { useState } from "react";

const EditItem = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    description: props.description,
    image: props.image,
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    console.log(...formData);
    const response = await fetch(`https://impressions-backend.onrender.com/api/dresses/${props._id}`,{
      method:"PUT",
      body:formData
    });

    if(response.status === 200){
      setResult("Item successfully updated");
      event.target.reset();
      props.updateItem(await response.json());
      props.closeDialog();
    } else {
      setResult("Error editing your item. We're sorry");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-item-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Item Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={inputs.description || ""}
                onChange={handleChange}
                required
              />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.image != null
                      ? `https://impressions-backend.onrender.com/images/${inputs.image}`
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
