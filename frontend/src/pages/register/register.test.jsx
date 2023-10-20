import { expect, test, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Register from "./Register";

test('Register', () => {
    it('renders correctly', () => {
        render(<Register />);
        const registerElement = screen.getByLabelText('Registrarse');
        expect(registerElement).toBeInTheDocument();
    });
});

test("Register", () => {
    it("renders logotype image correctly", () => {
        render(<Register />);
        const registerElement = screen.getByRole('img', { name: 'logotype' });
        expect(registerElement).toBeInTheDocument();
    });
});

test("Register", () => {
    it("renders full text", () => {
        render(<Register />);
        const registerElement = screen.getByText("Nombre y apellidos");
        expect(registerElement).toBeInTheDocument();
    });
});

test("Register", () => {
    it("renders full name input", () => {
        render(<Register />);
        const registerElement = screen.getByRole("textbox", {name: "fullname"});
        expect(registerElement).toBeInTheDocument();
    });
});

test("Register", () => {
    it("renders email text", () => {
        render(<Register />);
        const registerElement = screen.getByText("Email");
        expect(registerElement).toBeInTheDocument();
    });
});

test("Register", () => {
    it("renders email input", () => {
        render(<Register />);
        const registerElement = screen.getByRole("textbox", {name: "email"});
        expect(registerElement).toBeInTheDocument();
    });
});

test("Register", () => {
    it("renders register button", () => {
        render(<Register />);
        const registerElement = screen.getByRole("button");
        expect(registerElement).toBeInTheDocument();
    });
});

test("Register", () => {
    it("renders login text", () => {
        render(<Register />);
        const registerElement = screen.getByText("¿Tienes una cuenta?");
        expect(registerElement).toBeInTheDocument();
    });
});

test("Register", () => {
    it("renders login text", () => {
        render(<Register />);
        const registerElement = screen.getByText("Inicia sesión");
        expect(registerElement).toBeInTheDocument();
    });
});

