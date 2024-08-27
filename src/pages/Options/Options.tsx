import React, { useState, useEffect } from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);
  const [clickedTextList, setClickedTextList] = useState<string[]>([]);

  useEffect(() => {
    chrome.storage.local.get(['darkMode'], function(result) {
      setDarkModeEnabled(result.darkMode || false);
    });

    // init
    chrome.storage.local.get(['clickedTextList'], function(result) {
      setClickedTextList(result.clickedTextList || []);
    });

    // look up only local storage changes
    const storageListener = (changes: { [key: string]: chrome.storage.StorageChange }, areaName: string) => {
      if (areaName === 'local' && changes.clickedTextList) {
        setClickedTextList(changes.clickedTextList.newValue || []);
      }
    };

    chrome.storage.onChanged.addListener(storageListener);

    return () => {
      chrome.storage.onChanged.removeListener(storageListener);
    };
  }, []);

  const handleDarkModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setDarkModeEnabled(newValue);
    chrome.storage.local.set({darkMode: newValue}, function() {
      console.log('Dark mode setting saved');
    });
  };

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
          onChange={handleDarkModeChange}
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
