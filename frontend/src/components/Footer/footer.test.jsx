/* eslint-disable no-undef */
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

vi.mock("react-router-dom", () => ({
  Link: vi.fn(),
}));

describe("Footer", () => {
  test("renders correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByLabelText("Footer");
    expect(footerElement).toBeInTheDocument();
  });
  test("renders footer slogan correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByLabelText("description");
    expect(footerElement).toBeInTheDocument();
  });
  test("renders logotype image correctly", () => {
    render(<Footer />);
    const headerElement = screen.getByRole("img", { name: "logotype" });
    expect(headerElement).toBeInTheDocument();
  });
  test("renders instagram icon correctly", () => {
    render(<Footer />);
    const headerElement = screen.getByRole("img", { name: "instagram" });
    expect(headerElement).toBeInTheDocument();
  });
  test("renders facebook icon correctly", () => {
    render(<Footer />);
    const headerElement = screen.getByRole("img", { name: "facebook" });
    expect(headerElement).toBeInTheDocument();
  });
  test("renders twitter icon correctly", () => {
    render(<Footer />);
    const headerElement = screen.getByRole("img", { name: "twitter" });
    expect(headerElement).toBeInTheDocument();
  });
  test("renders tiktok icon correctly", () => {
    render(<Footer />);
    const headerElement = screen.getByRole("img", { name: "tiktok" });
    expect(headerElement).toBeInTheDocument();
  });
  test("renders copyright text correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByLabelText("copyright");
    expect(footerElement).toBeInTheDocument();
  });
  test("renders link to web", () => {
    render(<Footer />);
    const footerElement = screen.getByLabelText("web");
    expect(footerElement).toBeInTheDocument();
  });
  test("works link in login icon", () => {
    render(<Footer />);
    const webLink = screen.getByLabelText("web");
    fireEvent.click(webLink);
  });
});
