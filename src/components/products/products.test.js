import { render, screen } from "@testing-library/react";
import { Products } from "./products";

describe("Products", () => {
  const listData = [{ title: "pen" }, { title: "pencil" }, { title: "phone" }];
  test("Products Page render correctly", () => {
    render(<Products products={listData} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("Products show correctly", () => {
    render(<Products products={listData} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(listData.length);
  });
});
