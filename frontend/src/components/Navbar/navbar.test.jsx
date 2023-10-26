/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Navbar";

vi.mock("react-router-dom", () => ( {
    Link: vi.fn()
}))

describe("Header", () => {
    test("renders correctly", () => {
        render(<Header />);
        const headerElement = screen.getByLabelText("Navbar");
        expect(headerElement).toBeInTheDocument();
    });
    test("renders logotype image correctly", () => {
        render(<Header />);
        screen.debug()
        const headerElement = screen.getByLabelText("logotype");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in logotype icon", () => {
        render(<Header />);
        const logotypeLink = screen.getByLabelText("logotype");
        fireEvent.click(logotypeLink)
    });
    test("renders 'Inicio' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByLabelText("home");
        screen.debug(headerElement)
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in 'Inicio' section", () => {
        render(<Header />);
        const homeLink = screen.getByLabelText("home");
        fireEvent.click(homeLink);
    });
    test("renders 'Nosotros' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByLabelText("aboutus");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in 'Nosotros' section", () => {
        render(<Header />);
        const aboutUsLink = screen.getByLabelText("aboutus");
        fireEvent.click(aboutUsLink);
    });
    test("renders 'Contacto' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByLabelText("contact");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in 'Contacto' section", () => {
        render(<Header />);
        const contactLink = screen.getByLabelText("contact");
        fireEvent.click(contactLink);
    });
    test("works link in login icon", () => {
        render(<Header />);
        const loginLink = screen.getByLabelText("login");
        fireEvent.click(loginLink)
    });
});