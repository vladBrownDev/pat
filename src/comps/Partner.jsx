import React from "react"
import "./Partner.css"

export default function Partner () {
    function submit (e) {
        e.preventdefault()
        alert("Sdsds")
    }
    return (
        <>
            <section id="partnerSec">
                <h1>Partner Registration</h1>
                <form onSubmit={submit} id="partnerForm" action="">
                    <div className="formColumn">
                    <select name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                        <input name="name" placeholder="Name" type="text" />
                        <input name="surname" placeholder="Surname" type="text" />
                    </div>
                    <div className="formColumn">
                        <input name="location" placeholder="Location" type="text" />
                        <input name="postal" placeholder="Postal Code" type="text" />
                        <input name="street" placeholder="Street" type="text" />
                    </div>
                    <div className="formColumn">
                        <input name="function" placeholder="Function" type="text" />
                        <input name="company" placeholder="Company" type="text" />
                        <input name="phone" placeholder="Mobile phone" type="text" />
                    </div>
                    <div className="formColumn">
                        <input name="email" placeholder="Email" type="text" />
                        <input name="message" placeholder="Message" type="text" />
                        <input type="submit" id="send" value="Send" />
                    </div>
                </form>
                <div id="termsWrapper">
                    <div>
                        <input type="checkbox" id="terms" name="scales"/>
                        <label for="terms">I agree that my details from the contact form will be collected and processed to answer my request in accordance with the data protection declaration.</label>
                    </div>
                </div>
            </section>
        </>
    )
}