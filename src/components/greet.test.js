import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("Greet render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument;
  });

  test("Greet render with name correctly", () => {
    render(<Greet name="Yash" />);
    const textElement = screen.getByText("Hello Yash");
    expect(textElement).toBeInTheDocument;
  });

  // test.only("Greet render with name correctly", () => {
  //   render(<Greet name="User" />);
  //   const textElement = screen.getByText("Hello User");
  //   expect(textElement).toBeInTheDocument;
  // });

  // test.skip("Greet render with name correctly", () => {
  //   render(<Greet name="unknown" />);
  //   const textElement = screen.getByText("Hello unknown");
  //   expect(textElement).toBeInTheDocument;
  // });
});
