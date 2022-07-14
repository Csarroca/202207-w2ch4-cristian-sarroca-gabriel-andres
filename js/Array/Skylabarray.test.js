const Skylabarray = require("./Skylabarray");

describe("Given a Skylab function ", () => {
  describe("When it's called and it recives 23, 1, 13", () => {
    test("Then it should return object with 3 properties which value will be 23, 1, 13 respective and the length of the object", () => {
      const value1 = 23;
      const value2 = 1;
      const value3 = 13;
      const length = 3;

      const expectedOutput = { 0: 23, 1: 1, 2: 13, length: 3 };

      const realReturn = new Skylabarray(value1, value2, value3);

      expect(realReturn).toEqual(expectedOutput);
    });
  });
  describe("When we push the value 44", () => {
    test("Then it should return 23, 1, 13, 44 respective and the length of the object", () => {
      const value1 = 23;
      const value2 = 1;
      const value3 = 13;
      const value4 = 44;
      const length = 4;

      const expectedOutput = { 0: 23, 1: 1, 2: 13, 3: 44, length: 4 };

      const realReturn = new Skylabarray(value1, value2, value3);
      realReturn.push(44, realReturn);

      expect(realReturn).toEqual(expectedOutput);
    });
  });
});
