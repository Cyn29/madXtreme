import { expect, test, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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
    it("works link in logotype icon", () => {
        render(<Header />);
        const logotypeLink = screen.getByLabel("logotype");
        fireEvent.click(logotypeLink)
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
    it("works link in 'Inicio' section", () => {
        render(<Header />);
        const homeLink = screen.getByText("Inicio");
        fireEvent.click(homeLink);
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
    it("works link in 'Actividades' section", () => {
        render(<Header />);
        const activitiesLink = screen.getByText("Activities");
        fireEvent.click(activitiesLink);
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
    it("works link in 'Nosotros' section", () => {
        render(<Header />);
        const aboutUsLink = screen.getByText("Nosotros");
        fireEvent.click(aboutUsLink);
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
    it("works link in 'Contacto' section", () => {
        render(<Header />);
        const contactLink = screen.getByText("Contacto");
        fireEvent.click(contactLink);
    });
});

test("Header", () => {
    it("renders login icon correctly", () => {
        render(<Header />);
        const headerElement = screen.getByRole('img', { name: 'login-icon' });
        expect(headerElement).toBeInTheDocument();
    });
});

test("Header", () => {
    it("works link in login icon", () => {
        render(<Header />);
        const loginLink = screen.getByLabel("login-icon");
        fireEvent.click(loginLink)
    });
});
