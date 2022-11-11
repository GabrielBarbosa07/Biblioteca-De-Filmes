import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./app";
import { AuthContext } from './Contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>
);

