// core react
import React, { Component } from 'react';

class BasicExample extends Component {
  render () {
    return <div id='example'>{this.props.textToShow}</div>
  }
}

export default BasicExample;
