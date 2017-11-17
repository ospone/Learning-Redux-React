import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import  Something from './components/App';
import Text from './containers/Text';

let mount = document.getElementById('app');

let app = <Provider store={store}>
            <Text />
          </Provider>

render(app, mount);
