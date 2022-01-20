import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "./Context/ThemeContext";
import { QueryProvider } from "./Context/QueryContext";
import App from './components/App';
import { AuthProvider } from './Context/AuthContext';

const container = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
          <ThemeProvider>
            <QueryProvider>
              <App />
            </QueryProvider>
          </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>,
    container
  );

