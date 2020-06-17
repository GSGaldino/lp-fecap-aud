import React from 'react';
import Routes from './routes';

import './reset.css';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-59NQXVK'
}

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}


TagManager.initialize(tagManagerArgs)
export default App;
