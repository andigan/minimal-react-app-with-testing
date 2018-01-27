// core react
import React, { Component } from 'react';

// components
import TextFormField from '../inputs/text-form-field';

import styles from '../../styles/components/demo-box.css';

import history from '../../history';

class DemoBox extends Component {
  constructor() {
    super();
    this.handleTextFormFieldChange = this.handleTextFormFieldChange.bind(this);
    this.handleTextFormFieldSubmit = this.handleTextFormFieldSubmit.bind(this);

    this.state = {
      textFormValue: "",
      textFormInfoColor: "grey"
   };

  }

  handleTextFormFieldSubmit(value) {
    this.setState({ textFormValue: value });
    this.setState({ textFormInfoColor: '#26ff26' });
  }

  handleTextFormFieldChange(value) {
    this.setState({ textFormValue: value });
    this.setState({ textFormInfoColor: "grey" });
  }

  render () {
    return <div id="demo-box">
      <div id="demo-box-info">
        <div id="text-form-field-info" style={{backgroundColor: this.state.textFormInfoColor}}>
          {this.state.textFormValue}
        </div>
      </div>



      <TextFormField processChange={this.handleTextFormFieldChange} processSubmit={this.handleTextFormFieldSubmit}/>

      <div
        style={{
          backgroundColor: "lightblue",
          height: "30px",
          width: "500px",
          marginTop: "30px"
        }}
        onClick={() => {
          history.push('/other');
        }}>
        click to use react router and history to switch to /other view
      </div>



    </div>
  }
}

export default DemoBox;
