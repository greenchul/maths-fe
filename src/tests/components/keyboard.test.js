import Keyboard from "../../components/Keyboard";
import { render, screen } from "@testing-library/react";

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
});
