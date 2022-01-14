import { render, screen } from '@testing-library/react';

import App from './App';

it("renders without crashing", () => {
    render(<App />);
    const test = screen.getByText("Welcome to Bug Man!");
    expect(test).toBeInTheDocument();
});


