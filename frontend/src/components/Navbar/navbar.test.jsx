import { expect, test, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Navbar";

test("Header", () => {
    it("renders correctly", () => {
        render(<Header />);
        const headerElement = screen.getByLabelText("Navbar");
        expect(headerElement).toBeInTheDocument();
    });
});

test("Header", () => {
    it("renders logotype image correctly", () => {
        render(<Header />);
        const headerElement = screen.getByRole('img', { name: 'logotype' });
        expect(headerElement).toBeInTheDocument();
    });
});

test("Header", () => {
    it("renders 'Inicio' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByText("Inicio");
        expect(headerElement).toBeInTheDocument();
    });
});

test("Header", () => {
    it("renders 'Actividades' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByText("Actividades");
        expect(headerElement).toBeInTheDocument();
    });
});

test("Header", () => {
    it("renders 'Nosotros' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByText("Nosotros");
        expect(headerElement).toBeInTheDocument();
    });
});

test("Header", () => {
    it("renders 'Contacto' section correctly", () => {
        render(<Header />);
        const headerElement = screen.getByText("Contacto");
        expect(headerElement).toBeInTheDocument();
    });
});

test("Header", () => {
    it("renders login icon correctly", () => {
        render(<Header />);
        const headerElement = screen.getByRole('img', { name: 'login-icon' });
        expect(headerElement).toBeInTheDocument();
    });
});
