import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './assets/store/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <App />
  </Provider>,
)
