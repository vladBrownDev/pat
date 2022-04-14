import React from "react"
import {connect} from "react-redux"
import "./About.css"
import logo from "../media/biglogo.png"
import fusLogo from "../media/fusLogo.svg"

function About (props) {
    return (
        <>
            <section id="about">
                <img id="aboutLogo" src={logo} alt="" srcSet="" />
                <h2>About Absolute Distribution AG</h2>
                <p>
                    ABSOLUT Distribution is the Swiss value-added distributor for all xFusion and Huawei Enterprise products.
                </p>
                <p>
                    We have been relying on infrastructure and cloud solutions from xFusion and Huawei Enterprise since 2013 and thanks to this clear focus we can support our partners and resellers competently and professionally. Thanks to our excellent networking with xFusion and our well-founded technological know-how, we offer uncomplicated and comprehensive advice on the design and implementation of Huawei solutions and are the largest distributor in Europe for xFusion.
                </p>
                <h3>Absolut assembly factory:</h3>
                <p>As a value-added distributor, we operate our own assembly street to ensure that our custom mage systems are delivered promptly.</p>
                <h3>Local Country Service organization</h3>
                <p>As a value-added distributor, we operate our own assembly street to ensure that our custom mage systems are delivered promptly.</p>
                <p>we offer our partners a comprehensive service portfolio from project support to presales to global logistics and financing advice, project management and marketing support.</p>
                <img id="fusLogo" src={fusLogo} alt="" srcSet="" />
                <h2>About xFusion</h2>
                <p>
                xFusion Digital Technologies Co.,Ltd. is a leading global provider of computing power infrastructure and services. xFusion continuously creates value for customers and partners and accelerates the digital transformation of the industry. Currently, xFusion is serving customers in 130 countries and regions, including 211 Fortune 500 companies and covering finance, carriers, Internet, transportation, and energy industries.
                </p>
            </section>
        </>  
        
    )
}
export default connect()(About)