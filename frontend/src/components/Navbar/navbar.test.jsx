import { expect, test, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Header from "./Navbar";

test('Header', () => {
    it('renders correctly', () => {
        render(<Header />);
        const headerElement = screen.getByLabelText('Navbar');
        expect(headerElement).toBeInTheDocument();
    });
});
