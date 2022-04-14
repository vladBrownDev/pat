import React, {useState} from 'react';
import './Header.css';
import {connect} from "react-redux"
import logo from "../../src/media/logo.png" 
import cross from "../../src/media/cross.png"
import {Link} from "react-scroll"

//headers
import Products from './headBottoms/Products';
import Technical from "./headBottoms/Technical"

function Header(props) {
    let [currentHeader, setHeader] = useState(<></>)
    function expandHeader (e) {
        const header = document.querySelector("header")
        const cross = document.getElementById("crossIcon")
        if(header.className !== "expanded") {
            header.className = "expanded"
            cross.className = "cross"
        }
        switch(e.target.id) {
            default:
                console.log("error")
                break
            case "products":
                setHeader(<Products/>)
                break
            case "technical":
                setHeader(<Technical/>)
                break
        }
    }
    function closeHeader () {
        const cross = document.getElementById("crossIcon")
        const header = document.querySelector("header")
        if(cross.className === "") return
        setHeader(<></>)
        header.className = ""
        cross.className = ""
        
    }
    return (
            <header>
                <div id="headerShell">
                        <img onClick={props.main} id="headLogo" src={logo} alt="" />
                        <div id="headLinks">
                            <div id="products" onClick={expandHeader} className='headLink'>Products and Solutions</div>
                            <div id="technical" onClick={expandHeader} className='headLink'>Technical Support</div>
                            <div onClick={props.about} className='headLink'>About Absolut xFusion</div>
                            <div onClick={props.partner} className='headLink'>Become a partner</div>
                            <img onClick={closeHeader} id="crossIcon" className='' src={cross} alt=""/>
                        </div>
                </div>
                <div id="downHeader">
                    {currentHeader}
                </div>
            </header>
    );
}

const mapState = (state) => {
    return ({
        state:state
    })
}

const mapAct = (deploy) => {
    return (
        {
            main: () => deploy({type:"main"}),
            about: () => deploy({type:"about"}),
            partner: () => deploy({type:"partner"}),
        }
    )
}

export default connect(mapState,mapAct)(Header);