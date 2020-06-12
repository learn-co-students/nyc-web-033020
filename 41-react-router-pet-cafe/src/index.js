import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// BrowserRouter is it's own class component with its own state 

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
