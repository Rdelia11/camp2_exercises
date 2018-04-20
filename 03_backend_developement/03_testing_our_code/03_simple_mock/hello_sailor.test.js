const helloSailor = require("./hello_sailor");

test("Howdy Sailor! Good day to you!", function () {
  console.log = jest.fn();
  helloSailor();
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});

test("Howdy Sailor! Good day to you!", function () {
  console.log = jest.fn();
  helloSailor();
  expect(console.log).toHaveBeenCalledWith();
});
