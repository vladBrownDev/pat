import React from 'react';
import './App.css';
import {connect} from "react-redux"
import Header from './comps/Header';
import Main from './comps/Main';
import Footer from "./comps/Footer"
import ProductPage from './comps/ProductPage';

function App(props) {
  return (
          <>
            <Header/>
            {props.comp}
            <Footer/>
          </>
  );
}

const mapState = (state) => {
  return ({
      comp:state
  })
}

export default connect(mapState)(App);
