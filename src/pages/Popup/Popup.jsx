import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Light mode for css class `App` is called `App-light`
  // Light mode for css class `App-header` is called `App-header-light`
  return (
    <div className={`${darkModeEnabled ? 'App' : 'App-light'}`}>
      <header
        className={`${darkModeEnabled ? 'App-header' : 'App-header-light'}`}
      >
        <h1>Hi there!</h1>

        <p>This is your extension.</p>
        <a href="options.html" target="_blank">
          Click me for options
        </a>
      </header>
    </div>
  );
};

export default Popup;
