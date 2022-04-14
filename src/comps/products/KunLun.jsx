import React from "react"
import {connect} from "react-redux"
import star from "../../media/features.png"

function KunLun (props) {
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
                            <td>Parameters</td>
                            <td>{info.parameters}</td>
                        </tr>
                        <tr>
                            <td>Form Factor</td>
                            <td>{info.formfactor}</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>{info.memory}</td>
                        </tr>
                        <tr>
                            <td>Internal Storage</td>
                            <td>{info.internalstorage}</td>
                        </tr>
                        <tr>
                            <td>RAID</td>
                            <td>{info.raid}</td>
                        </tr>
                        <tr>
                            <td>LOM Network Ports</td>
                            <td>{info.lom}</td>
                        </tr>
                        <tr>
                            <td>PCIe Expansion</td>
                            <td>{info.pcie}</td>
                        </tr>
                        <tr>
                            <td>Partitioning</td>
                            <td>{info.partitioning}</td>
                        </tr>
                        <tr>
                            <td>Management</td>
                            <td>{info.management}</td>
                        </tr>
                        <tr>
                            <td>Fan Modules</td>
                            <td>{info.fan}</td>
                        </tr>
                        <tr>
                            <td>Dimensions (H x W x D)</td>
                            <td>{info.dimensions}</td>
                        </tr>
                        <tr>
                            <td>Operating Temperature</td>
                            <td>{info.temperature}</td>
                        </tr>
                        <tr>
                            <td>OSs and Virtualization Software</td>
                            <td>{info.os}</td>
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
export default connect(mapState, mapAct)(KunLun)