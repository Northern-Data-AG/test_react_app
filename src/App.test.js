import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react linkkk", () => {
  render(<App />);
  const linkElement = screen.getByText(/React test project/i);
  expect(linkElement).toBeInTheDocument();
});
