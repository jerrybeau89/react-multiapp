import React from 'react'
import { passwordGenerator } from './assets/script';
import './assets/styles.css'

function PasswordGenApp() {
    
    const handleClick = (e) => {
        e.preventDefault();
        passwordGenerator();
    }
  return (
    <div className="wrapper">
      <header className='passwordHeader'>
        <h1>Password Generator</h1>
      </header>
      <div className="card">
        <div className="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div className="card-body">
          <textarea
            disabled
            rows={1}
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
        <div className="card-footer">
          <button
            id="generate"
            className="passwordBtn"
            onClick={handleClick}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenApp;