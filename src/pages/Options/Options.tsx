import React, { useState } from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(true);
  const [clickedTextList, setClickedTextList] = useState<string[]>([]);

  return (
    <div className="OptionsContainer">
      <h1>{title} Page</h1>
      <h2>Settings</h2>
      <div style={{ display: 'flex' }}>
        <label htmlFor="darkModeCheckbox">
          <span>Dark Mode Enabled</span>
        </label>
        <input
          id="darkModeCheckbox"
          type="checkbox"
          checked={darkModeEnabled}
          onChange={(e) => {
            // implement
          }}
        />
      </div>
      <div>
        <h2>Clicked Text List</h2>
        <ul>
          {clickedTextList.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Options;
