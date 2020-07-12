import React, { Component } from 'react';

import Navigation from './navigation/navigation';
import Timer from './Tools/timer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
        {/* <Navigation /> */}
        {/* <Timer /> */}
      </div>
    );
  }
}

export default App;
