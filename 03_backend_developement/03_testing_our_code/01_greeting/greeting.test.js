const greeting = require("./greeting");

test("Check return if name set", function() {
  const result = greeting.greet("remi");
  expect(result).toBe("Hello REMI!");
});

test("Check return if name is empty", function() {
  const result = greeting.greet("");
  expect(result).toBe("Hello WORLD!");
});
