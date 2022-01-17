import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "./Context/GlobalContext";
import App from './components/App';

const container = document.getElementById('root');



ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    container
  );

