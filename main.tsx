import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>If you see this, React is working!</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
