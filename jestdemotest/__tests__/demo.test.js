"use strict";

beforeAll(() => {
  console.log("beforeAll", "init before all tests".toUpperCase());
});

afterAll(() => {
  console.log("afterAll ", "cleaning after all tests".toUpperCase());
});

test("This is the first test", () => {
  console.log("first test");
});
/*normally used in js, same as it*/

it("This is the second test", () => {
  console.log("second test");
});
/*it is used normally in mocka*/

/*describe is to test grouped together as block*/
describe("This is a test suite A", () => {
  beforeEach(() => {
    console.log("beforeEach", "before each test");
  });
  /*before each is before ALL test. vs before all is once*/
  afterEach(() => {
    console.log("afterEach: after each test");
  });

  test("first test in suiteA", () => {
    console.log("first test of suiteA");
  });

  test("second test in suiteA", () => {
    console.log("second test of suiteA");
  });
});

describe("This is suiteB", () => {
  beforeAll(() => {
    console.log("beforeAllSuite");
  });

  describe("This is a subsuiteA of suiteB", () => {
    test("first test of subsuiteA", () => {
      console.log("first of subsuiteA of B");
    });
    test("second test of subsuiteA", () => {
      console.log("second of subsuiteA of B");
    });
  });

  describe("This is a subsuiteB of suiteB", () => {
    test("test one of subsuiteB of B", () => {
      console.log("first of subsuiteB of B");
    });
  });
});

/*this is real test, word expect*/
describe("test concatenating strings", () => {
  const concat = (partA, partB) => partA + partB;

  test("first and second results firstsecond", () => {
    expect(concat("first", "second")).toBe("firstsecond");
  });
});

describe("this tests for an exception", () => {
  function testFunction() {
    throw Error("This is an exception");
  }

  test("test if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("This is an exception");
  });
});
