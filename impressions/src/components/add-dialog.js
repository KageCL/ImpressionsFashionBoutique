import "../css/dialog.css";
import React, { useState } from "react";

const AddDialog = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values)=>({...values,[name]:value}));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values)=>({...values,[name]:value}));
  };

  const addToServer = async(event) => {
    event.preventDefault();
    setResult("Sending....");
  
    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    const response = await fetch("https://impressions-backend.onrender.com/api/dresses", {
      method: "POST",
      body: formData
    });
  
    if (response.status === 200) {
      setResult("Dress successfully added!");
      console.log("Dress successfully added!")
      props.addDress(await response.json());
      event.target.reset();
      props.closeDialog();
    } else {
      setResult("Error adding dress");
      console.log("Error adding dress");
    }
  };
  


  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
            &times;
          </span>
          <form id="add-property-form" onSubmit={addToServer}>
            <p>
              <label htmlFor="name ">Item Name:</label>
              <input type="text" id="name" name="name" required value={inputs.name || ""} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" required value={inputs.description || ""} onChange={handleChange}/>
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange}/>
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

export default AddDialog;