// expected props: processData(value)

// core react
import React, { Component } from 'react';

// styles
import styles from '../../styles/components/inputs/inputs.css';

class TextFormField extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.processChange(this.refs.inputdata.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processSubmit(this.refs.inputdata.value);
  }

  render () {

    return <form className="text-form-field-container" onSubmit={ this.handleSubmit } onChange={ this.handleChange }>
        <input className="input-field" type="text" ref="inputdata" placeholder="Home" />
        <input type="submit" value="Submit Button" style={{display: 'none'}}/>
    </form>

  }
}

export default TextFormField;
