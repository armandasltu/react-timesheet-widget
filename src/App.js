import React, { PureComponent } from 'react';
import { StoreProvider } from './store';
import reducers from './reducers';
import initialState from './store/initialState';
import TimesheetWidget from './containers/TimesheetWidget';

class App extends PureComponent {
  render() {
    return (
      <StoreProvider initialState={initialState} reducer={reducers}>
        <TimesheetWidget />
      </StoreProvider>
    );
  }
}

export default App;
