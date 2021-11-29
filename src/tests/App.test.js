import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Renders title in App', () => {
  it('should renders title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Challenge B8One/i);
    expect(linkElement).toBeInTheDocument();
  });
});

// describe('Renders the cards from request', () => {
//   beforeEach(() => {
    
//   })
//   it('should renders the title of item', () => {
//     render(<App />);
//     const 
//   })
// })
