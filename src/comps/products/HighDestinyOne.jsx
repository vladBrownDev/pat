import React from "react"
import {connect} from "react-redux"
import star from "../../media/features.png"

function HighDestinyOne (props) {
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
                            <td>Node System</td>
                            <td>{info.nodesystem}</td>
                        </tr>
                        <tr>
                            <td>VCC</td>
                            <td>{info.vcc}</td>
                        </tr>
                        <tr>
                            <td>Power Supply</td>
                            <td>{info.powersupply}</td>
                        </tr>
                        <tr>
                            <td>Fan</td>
                            <td>{info.fan}</td>
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
                            <td>Dimensions</td>
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
export default connect(mapState, mapAct)(HighDestinyOne)