import { expect, test, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Contact from "./Contact";

test('Contact', () => {
    it('renders correctly', () => {
        render(<Contact />);
        const contactElement = screen.getByLabelText('Contact');
        expect(contactElement).toBeInTheDocument();
    });
});
