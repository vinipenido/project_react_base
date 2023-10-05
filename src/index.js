import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.css';
import { Profile } from './components/Profile';
import { Player } from './components/Player';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile />
    <Player />
  </React.StrictMode>
);

