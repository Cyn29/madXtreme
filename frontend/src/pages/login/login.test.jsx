import { expect, test, it } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import Login from "./Login";

test('Login', () => {
    it('renders correctly', () => {
        render(<Login />);
        const loginElement = screen.getByLabelText('Acceder');
        expect(loginElement).toBeInTheDocument();
    });
});

test("Login", () => {
    it("renders logotype image correctly", () => {
        render(<Login />);
        const loginElement = screen.getByRole('img', { name: 'logotype' });
        expect(loginElement).toBeInTheDocument();
    });
});

test("Login", () => {
    it("renders email text", () => {
        render(<Login />);
        const loginElement = screen.getByText("Email");
        expect(loginElement).toBeInTheDocument();
    });
});

test("Login", () => {
    it("renders email input", () => {
        render(<Login />);
        const loginElement = screen.getByRole("textbox", {name: "email"});
        expect(loginElement).toBeInTheDocument();
    });
});

test("Login", () => {
    it("renders password text", () => {
        render(<Login />);
        const loginElement = screen.getByText("Contraseña");
        expect(loginElement).toBeInTheDocument();
    });
});

test("Login", () => {
    it("renders password input", () => {
        render(<Login />);
        const loginElement = screen.getByRole("textbox", {name: "password"});
        expect(loginElement).toBeInTheDocument();
    });
});

test("Login", () => {
    it("renders access button", () => {
        render(<Login />);
        const loginElement = screen.getByRole("button");
        expect(loginElement).toBeInTheDocument();
    });
});

/*test("Contact", () => {
    it("click works correctly", () => {
        const accessBtn = screen.getByText(/Acceder/i)
        fireEvent.click(accessBtn)
    } )
})*/

test("Login", () => {
    it("renders password text", () => {
        render(<Login />);
        const loginElement = screen.getByText("¿Todavía no tienes una cuenta?");
        expect(loginElement).toBeInTheDocument();
    });
});

test("Login", () => {
    it("renders link to register page", () => {
        render(<Login />);
        const loginElement = screen.getByText("Regístrate");
        expect(loginElement).toBeInTheDocument();
    });
});