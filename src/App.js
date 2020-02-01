import React, { Component } from 'react';
import { StoreProvider } from "./store";
import reducers from "./reducers"
import initialState from "./store/initialState"
import './assets/sass/main.scss';
import TimesheetWidget from './containers/TimesheetWidget';

class App extends Component {
  render() {
    return (
      <StoreProvider initialState={initialState} reducer={reducers}>
        <div className="container">
          <TimesheetWidget />
        </div>
      </StoreProvider>
    );
  }
}

export default App;