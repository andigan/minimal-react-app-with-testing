// core react
import React, { Component } from 'react';

// components
import BoxToChange from './box-to-change';
import Button from './button';
import StarWarsName from './star-wars-name-container';
import DemoBox from './demo-box.js'

import styles from '../../styles/page.css';

class PageContainer extends Component {
    render () {
      return <div id="page-container">
        <BoxToChange />
        <Button />
        <StarWarsName />
        <DemoBox />
      </div>
    }
}

export default PageContainer;
