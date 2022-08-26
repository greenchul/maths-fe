import Keyboard from "../../components/Keyboard";
import { render, screen } from "@testing-library/react";

describe("keyboard component tests", () => {
  it("should render correctly", () => {
    const setAnswer = () => {};
    const { asFragment } = render(<Keyboard setAnswer={setAnswer} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
