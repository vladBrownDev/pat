import React from "react"
import "./Contact.css"

export default function Contact () {
    return (
        <>
            <section id="contact">
                <h1>Contacts</h1>
                <div id="contactText">
                    <div id="contactColWrap">
                        <div className="contactColumn">
                            <h3>Headquarters</h3>
                            <p>ABSOLUT Distribution AG</p>
                            <p>Parkstrasse 1b</p>
                            <p>6214 Schenkon / Lucerne</p>
                        </div>
                        <div className="contactColumn">
                            <h3>Sales Office Romande</h3>
                            <p>Avenue Ernest-Pictet 31</p>
                            <p>1203 Genève</p>
                        </div>
                        <div className="contactColumn">
                            <h3>Training and Logistics Center Zurich</h3>
                            <p>In the Luberzen 19</p>
                            <p>8902 Urdorf / Zurich</p>
                        </div>
                        <div className="contactColumn">
                            <h3>Sales Office Ticino</h3>
                            <p>Via Lema 15</p>
                            <p>6986 Novaggio</p>
                        </div>
                        <div className="contactColumn contactColumnLast">
                            <a className="tel" href="tel:+41 43 534 72 00">+41 43 534 72 00</a>
                            <a className="mail"href = "mailto: info@absolut-distribution.ch">info@absolut-distribution.ch</a>
                        </div>
                    </div>
                </div>
                <form id="partnerForm" className="contactForm" action="">
                    <div className="formColumn contactFormCol">
                        <select className="contactInput" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input className="contactInput" name="name" placeholder="Name" type="text" />
                        <input className="contactInput" name="surname" placeholder="Surname" type="text" />
                    </div>
                    <div className="formColumn contactFormCol">
                        <input className="contactInput" name="function" placeholder="Function" type="text" />
                        <input className="contactInput" name="company" placeholder="Company" type="text" />
                        <input className="contactInput" name="phone" placeholder="Mobile phone" type="text" />
                    </div>
                    <div className="formColumn contactFormCol">
                        <input className="contactInput" name="location" placeholder="Location" type="text" />
                        <input className="contactInput" name="postal" placeholder="Postal Code" type="text" />
                        <input className="contactInput" type="submit" id="send" value="Send" />
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