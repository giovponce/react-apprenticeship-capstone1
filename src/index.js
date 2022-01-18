import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "./Context/ThemeContext";
import { QueryProvider } from "./Context/QueryContext";
import App from './components/App';

const container = document.getElementById('root');



ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider> 
        <QueryProvider>
          <App />
        </QueryProvider>
      </ThemeProvider>
    </React.StrictMode>,
    container
  );

