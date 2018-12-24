import { submodule, sum } from "../src/index";

describe("submodule function", () => {
  test("'submodule'を取得できる", () => {
    expect(submodule()).toBe("submodule");
  });
});

describe("sum function", () => {
  test("sum(1, 1)の結果は、2である", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
