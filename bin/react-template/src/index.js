import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import 'antd/dist/antd.css';
import App from './App';
import stores from './stores';

ReactDOM.render(
    <HashRouter>
      <Provider {...stores}>
        <Route component={App} />
      </Provider>
    </HashRouter>
  , document.getElementById('root'),
);

