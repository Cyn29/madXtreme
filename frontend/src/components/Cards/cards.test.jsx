import { expect, test, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Cards from './Cards';

test('Cards', () => {
    it('renders correctly', () => {
        render(<Cards />);
        const cardsElement = screen.getByLabelText('Card');
        expect(cardsElement).toBeInTheDocument();
    });
});
