const toWords = require("./to_words");

test("Return value", function () {
  const result = toWords.toWords("sentence remi");
  expect(result).toEqual(['sentence', 'remi']);
});

test("Return not value", function () {
  const result = toWords.toWords("sentence ; remi");
  expect(result).not.toEqual(['sentence',';','remi']);
});
