import { render, screen } from "@testing-library/react";
import React from "react";
import DogImage from "./DogImage";

describe("When dog component is rendered", () => {
  test("the click me text will be rendered on the screen", () => {
    render(<DogImage />);

    const clickMeText = screen.getByRole("heading", { level: 3 });
    expect(clickMeText).toBeInTheDocument();
  });
});
