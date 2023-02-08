import { render, screen, fireEvent } from "@testing-library/react";
import CatFact from "./CatFact";

describe("When the home page is rendered", () => {
  test("load a div with a 'p' tag inside that will render cat facts", () => {
    render(<CatFact />);
    const catFactText = screen.getByRole("paragraph");
    expect(catFactText).toBeInTheDocument();
  });

  test("load button to refresh the cat fact", () => {
    render(<CatFact />);

    const catFactText = screen.getByRole("button");
    expect(catFactText).toBeInTheDocument();
  });
});
