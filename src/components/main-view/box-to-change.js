// core react
import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from '../../styles/components/box.css';

class BoxToChange extends Component {
  render () {

    return <div id='box' style={{backgroundColor: this.props.boxColor}}> </div>

  }
}

function mapStateToProps(state) {
  return {
    boxColor: state.config.boxColor
  };
}

export default connect (mapStateToProps)(BoxToChange);
