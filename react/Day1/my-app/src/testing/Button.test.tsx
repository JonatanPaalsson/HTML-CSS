import Button from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("My Button component", () => {
  const buttonText = "click me";
  let value = 0;

  const callback = () => {
    value++;
  };

  test("should show the correct text", () => {
    render(<Button text={buttonText} callback={callback} />);

    const button = screen.getByTestId("myBtn");

    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("myBtn")).toHaveTextContent(buttonText);
  });

  test("should execute callback on click", async () => {
    render(<Button text={buttonText} callback={callback} />);

    const button = screen.getByTestId("myBtn");

    await userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(value).toEqual(1);
  });
});
