export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "267c8075-2a5a-4196-818b-44779ab8ab56");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        
        <h1>Contact Form</h1>
        <h2>Include questions such as shipping, pricing and event questions.</h2>
        <form onSubmit={onSubmit}>

            <p>
                <label for="name">Name:</label>
                <input type="text" name="name" required/>
            </p>

            <p>
                <label for="email">Email:</label>
                <input type="email" name="email" required/>
            </p>

            <p>
                <label for="message">Message:</label>
                <textarea name="message" required></textarea>
            </p>

          <button type="submit">Submit Form</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }
  