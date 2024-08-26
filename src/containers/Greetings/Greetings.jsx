import React from 'react';
import icon from '../../assets/img/icon-128.png';

function GreetingComponent() {
  const name = 'dev';

  return (
    <div>
      <p>Hello, {name}!</p>
      <img src={icon} alt="extension icon" />
    </div>
  );
}

export default GreetingComponent;
