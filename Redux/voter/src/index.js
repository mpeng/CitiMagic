import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import myApp from './reducers';
import App from './App';
import Results from './components/results';

let store = createStore(myApp);
function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store}/>
      <hr />
      <Results store={store}/>
    </div>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();