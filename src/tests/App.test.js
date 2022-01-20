import { render, screen } from '@testing-library/react';

import App from '../components/App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
  });

  test('must display header', () => {
    render(<App />);
    const header = screen.getByText(/Search/i);
    expect(header).toBeInTheDocument();
  });

  test('must remove wa_cert_authenticated from videoids list', () => {
    render(<App />);
    const items = { ...localStorage };
    const videoIds = items ? Object.keys(items) : [];
    for( var i = 0; i < videoIds.length; i++){   
        if ( videoIds[i] === 'wa_cert_authenticated') { 
        videoIds.splice(i, 1); 
        }
    }
    expect(videoIds).toEqual([]);
  });


});
