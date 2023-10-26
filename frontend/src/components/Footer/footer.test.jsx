import { expect, test } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from "./Footer";
import "@testing-library/jest-dom";

vi.mock("react-router-dom", () => ( {
    Link: vi.fn()
}))

describe("Footer", () => {
    test('renders correctly', () => {
        render(<Footer />);
        const footerElement = screen.getByLabelText('Footer');
        expect(footerElement).toBeInTheDocument();
    });
    test("renders footer slogan correctly", () => {
        render(<Footer />);
        const footerElement = screen.getByLabelText("description-text");
        expect(footerElement).toBeInTheDocument();
    });
    test("renders logotype image correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'logotype' });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders instagram icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'instagram-icon' });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders facebook icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'facebook-icon' });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders twitter icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'twitter-icon' });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders tiktok icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole('img', { name: 'tiktok-icon' });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders copyright text correctly", () => {
        render(<Footer />);
        const footerElement = screen.getByLabelText("Copyright");
        expect(footerElement).toBeInTheDocument();
    });
    test("renders link to web", () => {
        render(<Footer />);
        const footerElement = screen.getByLabelText("madXtreme.com");
        expect(footerElement).toBeInTheDocument();
    });
    test("works link in login icon", () => {
        render(<Footer />);
        const webLink = screen.getByLabelText("madXtreme.com");
        fireEvent.click(webLink)
    });
})