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

test("Footer", () => {
    it("renders footer slogan correctly", () => {
        render(<Footer />);
        const footerElement = screen.getByText("Tus deportes de aventura en Madrid");
        expect(footerElement).toBeInTheDocument();
    });
});

test("Footer", () => {
    it("renders logotype image correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'logotype' });
        expect(headerElement).toBeInTheDocument();
    });
});

test("Footer", () => {
    it("renders instagram icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'instagram-icon' });
        expect(headerElement).toBeInTheDocument();
    });
});

test("Footer", () => {
    it("renders facebook icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'facebook-icon' });
        expect(headerElement).toBeInTheDocument();
    });
});

test("Footer", () => {
    it("renders twitter icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'twitter-icon' });
        expect(headerElement).toBeInTheDocument();
    });
});

test("Footer", () => {
    it("renders tiktok icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'tiktok-icon' });
        expect(headerElement).toBeInTheDocument();
    });
});

test("Footer", () => {
    it("renders copyright text correctly", () => {
        render(<Footer />);
        const footerElement = screen.getByText("2023 Copyright");
        expect(footerElement).toBeInTheDocument();
    });
});