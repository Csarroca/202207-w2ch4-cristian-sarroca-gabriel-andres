const Skylabarray = require("./Skylabarray");

describe("Given a Skylab function ", () => {
  describe("When it's called and it recives 23, 1, 13", () => {
    test("Then it should return object with 3 properties which value will be 23, 1, 13 respective", () => {
      const value1 = 23;
      const value2 = 1;
      const value3 = 13;

      const expectedOutput = { 0: 23, 1: 1, 2: 13 };

      const realReturn = new Skylabarray(value1, value2, value3);

      expect(realReturn).toEqual(expectedOutput);
    });
  });
});
