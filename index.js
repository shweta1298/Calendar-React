import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App'
import ContextWrapper from './src/components/calendar/context/ContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
//   </React.StrictMode>
);