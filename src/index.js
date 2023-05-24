import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './public/App';
import { store } from "./redux/store";
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
