import { hello } from "./index";

test("basic", () => {
  expect(hello("dog")).toBe("Hello dog!");
});
