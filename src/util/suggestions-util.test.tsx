import { getTransliterateSuggestions } from "./suggestions-util";

test("returns initial word", () => {
  expect(getTransliterateSuggestions("hello")).resolves.toContain("hello");
});

test("returns numOptions suggestions", () => {
  expect(
    getTransliterateSuggestions("hello", {
      numOptions: 3,
    }),
  ).resolves.toHaveLength(3);
});

test("returns empty array for punctuation", () => {
  expect(
    getTransliterateSuggestions("#", {
      numOptions: 3,
    }),
  ).resolves.toHaveLength(0);
});
