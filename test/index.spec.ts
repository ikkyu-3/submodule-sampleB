import submodule from "../src/index";

test("'submodule'を取得できる", () => {
  expect(submodule()).toBe("submodule");
});
