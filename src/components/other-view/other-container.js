// core react
import React, { Component } from 'react';

import {connect} from 'react-redux';

import {formatDateTimeForDisplay} from '../../_utils/time-helpers';
import moment from 'moment-timezone';

class OtherContainer extends Component {
  render () {
    let { date: dateVar, time: timeVar, timeZone: timeZoneVar } = formatDateTimeForDisplay(moment().format("YYYY-MM-DDTHH:mm:ss"));

    return <div id='timezone' style={{
      position: "relative",
      left: "20px",
      top: "20px",
      backgroundColor: "lightgray"
    }}>
      <div>
        Moment Library Now: {moment().format("MM/DD/YYYY h:mm:ss A")}
      </div>
      <div
        style={{
          marginTop: "20px"
        }}>
      Helper Function conversion: {this.props.timeZone}: {dateVar} {timeVar} {timeZoneVar}
      </div>
      <div
        style={{
          marginTop: "40px"
        }}>
        The helper function independently accesses the redux store.
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    timeZone: state.config.timeZone
  };
}

export default connect (mapStateToProps)(OtherContainer);
