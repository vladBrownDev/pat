import React from "react"
import {connect} from "react-redux"
import "./Maintanance.css"
import logo from "../../media/biglogo.png"
import table from "../../media/table.png"
import table2 from "../../media/table2.png"
import table3 from "../../media/table3.png"
import table4 from "../../media/table4.png"

function Maintanance (props) {
    return (
        <>
            <section id="maintanance">
                <img id="bigLogo" src={logo} alt="" srcSet="" />
                <p>ABSOLUT Services AG</p>
                <p>In the Luberzen 19, 8902 Urdorf </p>
                <p>support@absolut-services.ch</p>
                <p><a href="tel:+41 41 552 55 26">+41 41 552 55 26</a></p>
                <h2>Depending on the SLA concluded, the following services apply:</h2>
                <img id="tableImg" src={table} alt="" srcSet="" />
                <div className="maintext">
                    Open an Absolute Prime Care support ticket
                    In the event of a fault, please contact ours in writing at support@absolut-services.ch or by telephone on +41 41 552 552 6
                    support hotline.

                    Please have one of the following information ready: serial number of the defective device or the absolute order number.
                </div>
                <h3>SLA Description</h3>
                <img id="table2Img" src={table2} alt="" />
                <img id="table3Img" src={table3} alt="" />
                <img id="table3Img" src={table4} alt="" />
            </section>
        </>  
        
    )
}
export default connect()(Maintanance)