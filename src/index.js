import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoRegister from './pages/register/Video';
import CategoryRegister from './pages/register/Category';
import Erro from './pages/Erro';

const Page404 = () => <div>Page 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={VideoRegister} />
      <Route path="/register/category" component={CategoryRegister} />
      <Route component={Page404} />
      <Erro />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
