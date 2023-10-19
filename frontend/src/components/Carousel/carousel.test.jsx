import { expect, test, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

test("Carousel", () => {
    it("renders correctly", () => {
        render(<Carousel />);
        const carouselElement = screen.getByLabelText("Reserva tu aventura");
        expect(carouselElement).toBeInTheDocument();
    });
});

