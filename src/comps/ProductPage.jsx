import React from "react"
import {connect} from "react-redux"
import info from "../app/info"
import bigImg from "../media/bigPic/1288hv6.jpeg"
import star from "../media/features.png"
import "./ProductPage.css"

function ProductPage (props) {
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
                            <td>Chipset</td>
                            <td>{info.chipset}</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>{info.memory}</td>
                        </tr>
                        <tr>
                            <td>Local Storage</td>
                            <td>{info.localstorage}</td>
                        </tr>
                        <tr>
                            <td>RAID Support</td>
                            <td>{info.raidsupport}</td>
                        </tr>
                        <tr>
                            <td>Network</td>
                            <td>{info.network}</td>
                        </tr>
                        <tr>
                            <td>PCIe Expansion</td>
                            <td>{info.pcieexpansion}</td>
                        </tr>
                        <tr>
                            <td>Fan Modules</td>
                            <td>{info.fanmodules}</td>
                        </tr>
                        <tr>
                            <td>Power Supply</td>
                            <td>{info.powersupply}</td>
                        </tr>
                        <tr>
                            <td>Management</td>
                            <td>{info.management}</td>
                        </tr>
                        <tr>
                            <td>Operating Systems</td>
                            <td>{info.operatingsystems}</td>
                        </tr>
                        <tr>
                            <td>Security Features</td>
                            <td>{info.securityfeatures}</td>
                        </tr>
                        <tr>
                            <td>Operating Temperature</td>
                            <td>{info.operatingtemperature}</td>
                        </tr>
                        <tr>
                            <td>Certifications</td>
                            <td>{info.certifications}</td>
                        </tr>
                        <tr>
                            <td>Installation Kit</td>
                            <td>{info.installationkit}</td>
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
export default connect(mapState, mapAct)(ProductPage)