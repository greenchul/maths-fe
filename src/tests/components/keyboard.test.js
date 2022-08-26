import Keyboard from "../../components/Keyboard";
import { render, screen, fireEvent } from "@testing-library/react";

describe("keyboard component tests", () => {
  it("should render correctly", () => {
    const setAnswer = () => {};
    const { asFragment } = render(<Keyboard setAnswer={setAnswer} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Input box should render correctly", () => {
    const setAnswer = () => {};
    render(<Keyboard setAnswer={setAnswer} />);
    const inputElement = screen.getByPlaceholderText("answer");

    expect(inputElement).toBeInTheDocument();
  });
  it("Should call setAnswer when submit button is clicked", () => {
    const setAnswer = jest.fn();
    render(<Keyboard setAnswer={setAnswer} />);
    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);

    expect(setAnswer).toHaveBeenCalled();
  });
});
