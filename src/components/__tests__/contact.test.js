import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should test contact button", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const textBox = screen.getByPlaceholderText("name");
    expect(textBox).toBeInTheDocument();

    const textBoxArr = screen.getAllByRole("textbox");
    expect(textBoxArr.length).toBe(2);
})
