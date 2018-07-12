import React, { Component } from 'react';

import Library from './library/library';
import schedule from './schedule/schedule';

class Home extends Component {
  render() {
    return (
      <div>
        <Library/>
        <Schedule/>
      </div>
    );
  }
}


export default Home