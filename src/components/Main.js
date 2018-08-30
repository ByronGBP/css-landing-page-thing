// @flow
import React, { Component, Fragment } from 'react';

import Header from './Header/Header';
import Welcome from './Welcome/Welcome';

const App = () => (
  <Fragment>
    <Header/>
    <Welcome/>
    <Welcome/>
  </Fragment>
);

export default App;
