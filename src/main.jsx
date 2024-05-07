import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css'

const domNode = document.querySelector("#root")    // entryPoint, this module is called in index.html
const root = ReactDOM.createRoot(domNode)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// Short and concise
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )

