import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { Provider } from 'react-redux';
import 'stylesheets/index.scss';

ReactDOM.render(
    <React.StrictMode>
            <App />
    </React.StrictMode>,
    document.getElementById('root')
);