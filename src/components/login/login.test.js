import { render, screen } from "@testing-library/react";
import { Login } from "./login";

describe("Login", () => {
  test("Login Page render correctly", () => {
    render(<Login />);
    const emailElement = screen.getByPlaceholderText("username or email");
    expect(emailElement).toBeInTheDocument();
    const passwordElement = screen.getByPlaceholderText("password");
    expect(passwordElement).toBeInTheDocument();
    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();
  });
});
