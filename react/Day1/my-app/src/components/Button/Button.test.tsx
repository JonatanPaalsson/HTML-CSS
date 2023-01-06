import { Button } from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("My Button component", () => {
  const buttonText = "click me";
  let value = 0;

  const increaseValueByOne = () => {
    value++;
  };

  test("should show the correct text", () => {
    render(<Button text={buttonText} callback={increaseValueByOne} />);

    const button = screen.getByTestId("myBtn");

    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("myBtn")).toHaveTextContent(buttonText);
  });

  test("should execute callback on click", async () => {
    render(<Button text={buttonText} callback={increaseValueByOne} />);

    const button = screen.getByTestId("myBtn");

    await userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(value).toEqual(1);
  });

  test("should execute callback on several clicks", async () => {
    render(<Button text={buttonText} callback={increaseValueByOne} />);

    const button = screen.getByTestId("myBtn");

    const numberOfClicks = 3;

    for (let index = 0; index < numberOfClicks; index++) {
      await userEvent.click(button);
    }

    expect(button).toBeInTheDocument();
    expect(value).toEqual(numberOfClicks);
  });

  afterEach(() => {
    value = 0;
  });
});
