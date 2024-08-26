import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  // Light mode for css class `App` is called `App-light`
  // Light mode for css class `App-header` is called `App-header-light`
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hi there!</h1>

        <p>This is your extension.</p>
      </header>
    </div>
  );
};

export default Popup;
