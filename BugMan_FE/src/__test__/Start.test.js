import { render, screen } from '@testing-library/react';
import Start from '../Components/Start';

it("start component renders", () => {
    render(<Start />);
    const test = screen.getByText("Welcome to Bug Man!");
    expect(test).toBeInTheDocument();
});