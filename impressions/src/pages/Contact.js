import "../css/Contact.css"; 

const Contact = () => {
    return (
        <>
            <div id="main-content">
           <div id="main-contact">
                <h1>Contact Information</h1>

                <h2>Phone Number 1: (803) 569-7879</h2>
                <h2>Phone Number 2: (803) 441-6792</h2>
                <h2>Location: 248 Fake Street Sumter, SC</h2>
                <h2>Email: Fakeemail@gmail.com</h2>
                <h2>Email 2: Fakemail@fake.com</h2>
                <h2>Deliver is possible for locations in or around Sumter. Appointments must me made.</h2>
                <h2>Deilver fees included.</h2>

                <h1>Contact Form</h1>
                <h2 id="form-desc">Include questions such as shipping, pricing and event questions.</h2>

                <div id="form-area">
                <form id="form-contact" action="https://api.web3forms.com/submit" method="POST" class="columns">

<input type="hidden" name="access_key" value="267c8075-2a5a-4196-818b-44779ab8ab56"/>

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
<textarea name="message" rows="4" cols="50" required></textarea>
</p>
<p>
<input type="hidden" name="redirect" value="https://web3forms.com/success"/>
</p>
<button type="submit">Submit Form</button>

<p id="result"></p>
</form>

        </div>

           </div>
           <div id="social-media">
                <h1>Social Media</h1>

                <h2>Facebook: @thefacebooktag</h2>
                <h2>Instagram: @theinstatag</h2>
                <h2>Twitter: @twitteruser</h2>
           </div>
        </div>

        </>
    );
};

export default Contact;