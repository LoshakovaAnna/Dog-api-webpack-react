import * as serviceWorker from './serviceWorker';
import React from 'react';
import  {render} from 'react-dom';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';
import {  Route,  BrowserRouter } from 'react-router-dom';
import { rootReducer } from './store/reducer';

import App from './components/App';
import PageRandomDogs from './components/pages/PageRandomDogs';
import PageListDogs from './components/pages/PageListDogs';
import PageSpecificDogs from './components/pages/PageSpecificDogs';
import dinamicPageSpecDog from './components/pages/dinamicPageSpecDog';

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';


export const store = createStore(rootReducer);

render(
  <Provider store = {store}>
    <BrowserRouter>
          <div>
              <Route path='/' component={App}/>
              <Route path='/list' component={PageListDogs}/>
              <Route path='/random-dogs' component={PageRandomDogs}/>            
              <Route path = '/specific-dog-choose' component={PageSpecificDogs}/> 
              <Route path = '/specific-dog/:breed' component={dinamicPageSpecDog}/> 
          </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();