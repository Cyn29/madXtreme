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

test("Contact", () => {
    it("renders h2", () => {
        render(<Contact />);
        const contactElement = screen.getByText("¡Contáctanos!");
        expect(contactElement).toBeInTheDocument();
    });
});

test("Contact", () => {
    it("renders map", () => {
        render(<Contact/>);
        const contactElement = screen.getByRole("iframe");
        expect(contactElement).toBeInTheDocument();
    })
})

test("Contact", () => {
    it("renders full name text", () => {
        render(<Contact />);
        const contactElement = screen.getByText("Nombre y apellidos");
        expect(contactElement).toBeInTheDocument();
    });
});

test("Contact", () => {
    it("renders full name input", () => {
        render(<Contact />);
        const contactElement = screen.getByRole("textbox", {name: "fullname"});
        expect(contactElement).toBeInTheDocument();
    });
});

test("Contact", () => {
    it("renders email text", () => {
        render(<Contact />);
        const contactElement = screen.getByText("Email");
        expect(contactElement).toBeInTheDocument();
    });
});

test("Contact", () => {
    it("renders email input", () => {
        render(<Contact />);
        const contactElement = screen.getByRole("textbox", {name: "email"});
        expect(contactElement).toBeInTheDocument();
    });
});

test("Contact", () => {
    it("renders subject text", () => {
        render(<Contact />);
        const contactElement = screen.getByText("Asunto");
        expect(contactElement).tobeInTheDocument();
    });
});

test("Contact", () => {
    it("renders subject input", () => {
        render(<Contact />);
        const contactElement = screen.getByRole("textbox", {name: "subject"});
        expect(contactElement).toBeInTheDocument();
    });
});

test("Contact", () => {
    it("renders comment text", () => {
        render(<Contact />);
        const contactElement = screen.getByText("¡Déjanos un comentario!");
        expect(contactElement).toBeInTheDocument();
    });
});

test("Contact", () => {
    it("renders comment input", () => {
        render(<Contact />);
        const contactElement = screen.getByRole("textbox", {name: "comment"});
        expect(contactElement).toBeInTheDocument();
    });
});

test("Contact", () => {
    it("renders send button", () => {
        render(<Contact />);
        const contactElement = screen.getByRole("button");
        expect(contactElement).toBeInTheDocument();
    });
});
