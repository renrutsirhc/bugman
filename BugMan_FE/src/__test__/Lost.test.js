import { render, screen } from '@testing-library/react';
import Lost from '../Components/Lost';

it("lost component renders", () => {
    render(<Lost />);
    const test = screen.getByText("Boo - you lost! Play again?");
    expect(test).toBeInTheDocument();
});