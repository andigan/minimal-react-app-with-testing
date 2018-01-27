// core react
import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from '../../styles/components/star-wars.css';

class StarWarsName extends Component {
  render () {
    return <div className='star-wars-name-container'>{this.props.starWarsCharacter}</div>
  }
}

function mapStateToProps(state) {
  return {
    starWarsCharacter: state.starWars.starWarsCharacter
  };
}

export default connect (mapStateToProps)(StarWarsName);
