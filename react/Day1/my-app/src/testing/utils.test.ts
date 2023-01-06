import { echoFunction } from "./utils";

describe("Echo function tests", () => {
  const expectedResult = "hello";

  test("should return the same", () => {
    expect(echoFunction(expectedResult)).toEqual(expectedResult);
  });

  test("should return hello", () => {
    expect(echoFunction("no echo")).not.toEqual(expectedResult);
  });
});
