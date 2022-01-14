import { render, screen } from '@testing-library/react';
import Won from '../Components/Won';

it("won component renders", () => {
    render(<Won />);
    const test = screen.getByText("Congrats! You won this level!");
    expect(test).toBeInTheDocument();
});