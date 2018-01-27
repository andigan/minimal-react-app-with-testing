// core react
import React, { Component } from 'react';

// core redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { setBoxColor, getLuke } from '../../actions'


// styles
import styles from '../../styles/components/button.css';

class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setBoxColor('blue');
    this.props.getLuke();
  }

  render () {

    return <div id='button' onClick={this.handleClick}> click me to fetch api and change box color </div>

  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { setBoxColor, getLuke }, dispatch)
}

export default connect (null, mapDispatchToProps)(Button);
