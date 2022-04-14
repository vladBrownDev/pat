import React from "react"
import {connect} from "react-redux"

function Products (props) {
    return (
        <>
            <div id="downWrapper">
                <div className="headRow">
                    <h3>Rack Servers</h3>
                    <span onClick={props.zero} className="productItem">Server v5 Generation</span>
                    <span onClick={props.first} className="productItem">1288H v6</span>
                    <span onClick={props.second} className="productItem">2288H v6</span>
                    <span onClick={props.third} className="productItem">2488H v6</span>
                    <span onClick={props.fourth} className="productItem">5288H v6</span>
                </div>
                <div className="headRow">
                    <h3>High-Density Server</h3>
                    <span onClick={props.fifth} className="productItem">X6000 v6</span>
                    <span onClick={props.sixth} className="productItem">XH321 v6</span>
                    <span onClick={props.seventh} className="productItem">XH321C v6</span>
                </div>
                <div className="headRow">
                    <h3>GPU Servers </h3>
                    <span className="productItem" onClick={props.eight}>G5500</span>
                </div>
                <div className="headRow">
                    <h3>Mission Critical Servers</h3>
                    <span onClick={props.ninth} className="productItem">KunLun 9008</span>
                </div>
                <div className="headRow">
                    <h3>Server Managment Software</h3>
                    <span onClick={props.eleventh} className="productItem">iBMC</span>
                    <span onClick={props.twelvth} className="productItem">FusionServer Tools</span>
                    <span onClick={props.thirteenth} className="productItem">Management Ecosystems</span>
                    <span onClick={props.tenth} className="productItem">Fusion Director</span>
                </div>
            </div>
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
            zero: () => deploy({type:"zero"}),
            first: () => deploy({type:"fst"}),
            second: () => deploy({type:"sec"}),
            third: () => deploy({type:"third"}),
            fourth: () => deploy({type:"fourth"}),
            fifth: () => deploy({type:"fifth"}),
            sixth: () => deploy({type:"sixth"}),
            seventh: () => deploy({type:"seventh"}),
            eight: () => deploy({type:"eight"}),
            ninth: () => deploy({type:"ninth"}),
            tenth: () => deploy({type:"tenth"}),
            eleventh: () => deploy({type:"eleventh"}),
            twelvth: () => deploy({type:"twelvth"}),
            thirteenth: () => deploy({type:"thirteenth"}),
        }
    )
}

export default connect(mapState, mapAct)(Products)