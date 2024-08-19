import { render, screen } from '@testing-library/react';
import Nav from './Nav.js';

test('Renders the BookingForm heading', () => {
  render(<Nav />);
  const navElement = screen.getByText("Home");
  expect(navElement).toBeInTheDocument();
})