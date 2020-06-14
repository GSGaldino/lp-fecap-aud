import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AUDHomePage from './pages/AUDHomePage';

export default function Routes(){
  return (
    <BrowserRouter>
    <Switch>

      <Route path="/" component={AUDHomePage} />

    </Switch>
  </BrowserRouter>
  )
}
