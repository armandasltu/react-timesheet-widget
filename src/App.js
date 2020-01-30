import React, { Component } from 'react';
import './assets/sass/main.scss';
import TimesheetWidget from './containers/TimesheetWidget';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TimesheetWidget />
      </div>
    );
  }
}

export default App;
