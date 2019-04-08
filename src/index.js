import React from 'react';
import ReactDOM from 'react-dom';
// import 'bulma';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: () => { console.log("onUpdate called! New content after windows closed!") },
  onSuccess: () => { console.log("onSuccess called! Offline ready!")}
});
