import React from "react"
import owner from "../media/owner1.png"
import "./Owners1.css"


export default function Owners1 (props) {
    return (
        <>
            <section id="owners">
                <div id="headOwner">
                    <img id="ownerPhoto" src={owner} alt="" srcSet="" />
                    <div id="headOwnerText">
                        <h1>Patrick Straessle </h1>
                        <h3>Deputy CEO, TON Total Optical Network AG</h3>
                        <div> «Thanks to our many years of experience with OTN networks, we deliver tailor-made WDM solutions that meet both the growth plans of each customer and the security requirements. The operational safety and availability of our products and services are top priorities for TON.
                            With the Huawei OSN products and their "optical packet frame technology" we offer, among other things, "customized DCI" solutions for SMEs and large companies in Switzerland and worldwide. Our engineering team develops and operates everything from simple data center connections to global multi-pop transport solutions. We are pleased to have Absolut as our supplier for smooth hardware logistics and a worldwide spare parts service.
                        </div>
                    </div>
                </div>
                <div id="ownerText">
                    <h1>Solution</h1>
                    <div>The Network Management System NCE is operated on a FusionServer 2288 cluster for the DC908 what is a WDM (Wavelength Division Multiplexing) system for DCI (Data Center Interconnect) applications and metro networking.
                    The large transmission capacity (96T per fiber pair) and the easy handling ensure optimal user-friendliness.
                    </div>
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