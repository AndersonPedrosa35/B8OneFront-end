import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Renders the App', () => {
  it('should renders title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Challenge B8One/i);
    expect(linkElement).toBeInTheDocument();
  });
})
