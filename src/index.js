import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ancestor1 from './Ancestor1';
import registerServiceWorker from './registerServiceWorker';

let model = {clicks: 0}

function render() {
    ReactDOM.render(<Ancestor1 onClick={() => { model.clicks += 1; render()}} clicks={model.clicks}/>, 
     document.getElementById('root'));
}

render()
registerServiceWorker();