import React from 'react';
import {connect} from "react-redux"

function Main(props) {
  return (
          <main>
              {props.comp}
          </main>
  );
}

function mapState (state) {
    return ({comp:state})
}

export default connect(mapState)(Main);