/* eslint-disable */
import React from 'react';

import BasicExample from './basic-example';

const wrapper = shallow(<BasicExample />);

describe('Basic Example Component', () => {

  let props;
  let shallowBasicExample;
  const inputLabel = () => {
    if (!shallowBasicExample) {
      shallowBasicExample = shallow(
        <BasicExample {...props} />
      );
    }
    return shallowBasicExample;
  }

  beforeEach(() => {
    props = {
      textToShow: undefined
    };
    shallowBasicExample = undefined;
  });

  it('renders div#example', () => {
    expect(inputLabel().find('#example')).to.exist;
  });
  it('contains the label in textToShow prop', () => {
    props = { textToShow: 'Input Label Text'};
    expect(inputLabel().find('#example')).to.have.text('Input Label Text');
  });
  it('contains no label if textToShow is undefined', () => {
    expect(inputLabel().find('#example')).to.be.empty;
  });




});
