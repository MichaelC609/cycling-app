import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

console.log("📦 index.js loaded"); // ✅ confirms script runs

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('root');
  console.log("🔍 root div:", rootDiv); // ✅ check if root is found

  if (rootDiv) {
    const root = ReactDOM.createRoot(rootDiv);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  } else {
    console.error("❌ root div not found! React can't mount.");
  }
});
