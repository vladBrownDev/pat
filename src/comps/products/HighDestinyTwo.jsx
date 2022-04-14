import React from "react"
import {connect} from "react-redux"
import star from "../../media/features.png"

function HighDestinyTwo (props) {
    const {info} = props
    return (
        <>
            <section id="upperProduct">
                <img id="productBanner" src={info.img} alt="" srcset=""/>
                <div className="productDescSection">
                    <h1>{info.head}</h1>
                    <div className="productDesc">{info.descr}</div>
                </div>
            </section>
            <section id="features">
                <h1>Features</h1>
                <div id="featureList">
                    <div className="feature">
                        <img className="starImg" src={star} alt="" srcSet="" />
                        <h3>{info.feature1}</h3>
                    </div>
                    <div className="feature">
                        <img className="starImg" src={star} alt="" srcSet="" />
                        <h3>{info.feature2}</h3>
                    </div>
                    <div className="feature">
                        <img className="starImg" src={star} alt="" srcSet="" />
                        <h3>{info.feature3}</h3>
                    </div>
                </div>
            </section>
            <section id="specs">
                <h1>Technical Specifications</h1>
                <table>
                    <tbody>
                        <tr className="topTable">
                            <td>Specification Name</td>
                            <td>Specifications</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>{info.model}</td>
                        </tr>
                        <tr>
                            <td>Form Factor</td>
                            <td>{info.formfactor}</td>
                        </tr>
                        <tr>
                            <td>Processors</td>
                            <td>{info.processors}</td>
                        </tr>
                        <tr>
                            <td>Memory Slots</td>
                            <td>{info.memoryslots}</td>
                        </tr>
                        <tr>
                            <td>Local Storage</td>
                            <td>{info.localstorage}</td>
                        </tr>
                        <tr>
                            <td>PCIe</td>
                            <td>{info.pcie}</td>
                        </tr>
                        <tr>
                            <td>OCP</td>
                            <td>{info.ocp}</td>
                        </tr>
                        <tr>
                            <td>Management</td>
                            <td>{info.management}</td>
                        </tr>
                        <tr>
                            <td>OS</td>
                            <td>{info.os}</td>
                        </tr>
                        <tr>
                            <td>Security Features</td>
                            <td>{info.security}</td>
                        </tr>
                        <tr>
                            <td>Operating Temperature</td>
                            <td>{info.temperature}</td>
                        </tr>
                        <tr>
                            <td>Product Certifications</td>
                            <td>{info.certifications}</td>
                        </tr>
                        <tr>
                            <td>Dimensions (H x W x D)</td>
                            <td>{info.dimensions}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <button onClick={props.specs} id="learnMore">Documentations</button>
        </>  
        
    )
}
const mapState = (state) => {
    return ({
        state:state
    })
}

const mapAct = (deploy) => {
    return (
        {
            specs: () => deploy({type:"specs"}),
        }
    )
}
export default connect(mapState, mapAct)(HighDestinyTwo)