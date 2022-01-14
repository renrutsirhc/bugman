import { render, screen } from '@testing-library/react';
import Game from '../Components/Game';

it("game component renders", () => {
    render(<Game />);
    const test = screen.getByText("Welcome to Bug Man!");
    expect(test).toBeInTheDocument();
});