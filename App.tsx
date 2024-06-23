import React from 'react';
import {Home} from './src/screens';
import {Provider} from 'react-redux';
import store from './src/context/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;