import React from "react"
import {connect} from "react-redux"

function Technical (props) {
    return (
        <>
            <div id="downWrapper">
                <div className="headRow">
                    <h3>Maintanance Support</h3>
                    <span onClick={props.maint} className="productItem">Local Maintanance Service </span>
                </div>
                <div className="headRow">
                    <h3>Product Documentation</h3>
                    <span onClick={props.specs} className="productItem">Product Specification </span>
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
            maint: () => deploy({type:"maint"}),
            specs: () => deploy({type:"specs"}),
        }
    )
}
export default connect(mapState, mapAct)(Technical)