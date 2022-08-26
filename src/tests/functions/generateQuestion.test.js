import generateQuestion from "../../utils/generateQuestion";

describe("generateQuestion test", () => {
  it("Should return an object", () => {
    const result = generateQuestion();

    expect(result).toBeInstanceOf(Object);
  });
});
