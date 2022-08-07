import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'materialize-css/dist/css/materialize.min.css';
import { firebaseConnections } from './firebase/config';


firebaseConnections()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
