import React from "react"
import owner from "../media/owner2.png"
import "./Owners1.css"
import icom from "../media/icom.png"


export default function Owners2 (props) {
    return (
        <>
            <section id="owners">
                <div id="headOwner">
                    <img id="ownerPhoto" src={owner} alt="" srcSet="" />
                    <div id="headOwnerText">
                        <h1>Michael Keller </h1>
                        <h3>Geschäftsführer, i-Community</h3>
                        <div>«i-Community AG is the competent IT cloud provider for private individuals, companies and the public sector. We offer our customers individual solutions, 24/7 support and secure cloud services. We are supported by our supplier Absolut Services with smooth hardware logistics.»</div>
                        <img id="icom" src={icom} alt="" srcSet="" />
                    </div>
                </div>
                <div id="ownerText">
                    <h1>ABSOLUT Distribution AG</h1>
                    <div>As a value-added distributor, we work together with partners and Cloud providers in the design and implementation of ICT solutions. With our own engineering team, we ensure that even demanding solutions, the solution exactly meets the customer requirements. In addition, Absolut Distribution imports all parts directly and itself from China Mainland, thus ensuring the fastest and most effective supply chain to the customer on site.
                    </div>
                    <h1>ABSOLUT Services AG</h1>
                    <div>Absolut Services AG offers ICT product maintenance services from simple product maintenance to 7x24/4h on-site services. Our service team is set up throughout the countries and globally to always ensure the SLA.
                        We also offer the official Huawei and xFusion HALP training center with our trainer team for all Huawei and xFusion products training courses for sales, pre-sales and post-sales for all expert levels.
                    </div>
                </div>
            </section>  
        </>
    )
}