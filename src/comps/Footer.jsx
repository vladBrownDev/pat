import React from 'react';
import {connect} from "react-redux"
import "./Footer.css"

function Footer(props) {
  return (
          <footer>
              <div id="footerWrapper">
                  <div className='footerSection'>
                      <h3>About Absolut xFusion</h3>
                      <span onClick={props.about}>About Absolut Distribution AG</span>
                      <span>Products and Solutions</span>
                      <span onClick={props.contact}>Contact Absolut xFusion </span>
                  </div>
                  <div className='footerSection'>
                      <h3>Support Center</h3>
                      <span onClick={props.maint}>Technical Support </span>
                      <span onClick={props.specs}>Product Documents</span>
                  </div>
                  <div className='footerSection'>
                      <h3>Contact</h3>
                      <span onClick={props.maint}>Technical Support </span>
                      <span onClick={props.contact}>Sales and Quote</span>
                  </div>
              </div>
          </footer>
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
            about: () => deploy({type:"about"}),
            contact: () => deploy({type:"contact"}),
            maint: () => deploy({type:"maint"}),
            specs: () => deploy({type:"specs"}),
        }
    )
}
export default connect(mapState, mapAct)(Footer)