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
        const headerElement = screen.getByLabelText("Inicio");
        screen.debug(headerElement)
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in 'Inicio' section", () => {
        render(<Header />);
        const homeLink = screen.getByLabelText("Inicio");
        fireEvent.click(homeLink);
    });
    test("renders 'Nosotros' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByLabelText("Nosotros");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in 'Nosotros' section", () => {
        render(<Header />);
        const aboutUsLink = screen.getByLabelText("Nosotros");
        fireEvent.click(aboutUsLink);
    });
    test("renders 'Contacto' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByLabelText("Contacto");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in 'Contacto' section", () => {
        render(<Header />);
        const contactLink = screen.getByLabelText("Contacto");
        fireEvent.click(contactLink);
    });
    test("works link in login icon", () => {
        render(<Header />);
        const loginLink = screen.getByLabelText("login-icon");
        fireEvent.click(loginLink)
    });
});