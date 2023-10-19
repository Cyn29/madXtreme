import { expect, test, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Footer from "./Footer";

test('Footer', () => {
    it('renders correctly', () => {
        render(<Footer />);
        const footerElement = screen.getByLabelText('Footer');
        expect(footerElement).toBeInTheDocument();
    });
});
