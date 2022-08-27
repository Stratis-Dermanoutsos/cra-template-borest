import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import 'stylesheets/index.scss';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLDivElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);