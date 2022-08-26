import checkAnswer from "../../utils/checkAnswer";

describe("checkAnswer test", () => {
  it("Should return a boolean", () => {
    const result = checkAnswer(4, 4);

    expect(typeof result).toBe("boolean");
  });
  it("should return true if parameters are equal", () => {
    const result = checkAnswer(4, 4);

    expect(result).toBeTruthy();
  });
  it("Should return false if parameters are not equal", () => {
    const result = checkAnswer(4, 3);

    expect(result).toBeFalsy();
  });
});
