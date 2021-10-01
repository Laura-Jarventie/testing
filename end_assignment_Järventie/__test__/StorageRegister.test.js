"use strict";

const StorageRegister = require("../StorageRegister");
const datastorage = require("../datastorage.json");

describe("constructor", () => {
  test("object created", () => {
    const storageRegister = new StorageRegister(datastorage);
    expect(storageRegister.storageRegister).toEqual(datastorage);
  });

  test('missing parameter throws an exception "data storage missing"', () => {
    expect(() => new StorageRegister()).toThrow("data storage missing");
  });
});

describe("Testing getById", () => {
  const storageRegister = new StorageRegister(datastorage);

  test('get object of the id number "1"', () => {
    expect(storageRegister.getById("1")).toEqual({
      id: "1",
      manufacturer: "BMI",
      type: "minitower",
      accessories: ["keyboard", "display", "mouse"],
      price: "250",
      software: [
        {
          name: "Writer",
          price: 123,
        },
        {
          name: "Solitaire",
          price: 10,
        },
      ],
    });
  });

  test('non-matching id "0000" will return an empty array []', () => {
    expect(storageRegister.getById("0000")).toEqual([]);
  });

  test("missing parameter throws an exception", () => {
    expect(() => storageRegister.getById()).toThrow("parameter missing");
  });
});

describe("Testing getAllIdsByManufacturer", () => {
  const storageRegister = new StorageRegister(datastorage);

  test("get id from default jsonData with parameter BMI", () => {
    expect(storageRegister.getAllIdsByManufacturer("BMI")).toEqual[("1", "3")];
  });

  test("get id from default jsonData with parameter CERA", () => {
    expect(storageRegister.getAllIdsByManufacturer("CERA")).toEqual["2"];
  });

  test("Non-matching manufacturer returns an empty array []", () => {
    expect(storageRegister.getAllIdsByManufacturer("NoMatch")).toEqual([]);
  });

  test("missing parameter returns an empty array", () => {
    expect(storageRegister.getAllIdsByManufacturer()).toEqual([]);
  });
});

describe("Testing getAllComputerTypes", () => {
  test("use default jsonData", () => {
    const storageRegister = new StorageRegister(datastorage);
    expect(storageRegister.getAllComputerTypes()).toEqual([
      "minitower",
      "laptop",
    ]);
  });

  test("no types in storageRegister", () => {
    const storageRegister = new StorageRegister([]);
    expect(storageRegister.getAllComputerTypes()).toEqual([]);
  });
});

describe("Testing getAllComputersByType", () => {
  const storageRegister = new StorageRegister(datastorage);
  test("use default jsonData with parameter type laptop", () => {
    expect(storageRegister.getAllComputersByType("laptop")).toEqual[
      ({
        id: 2,
        manufacturer: "CERA",
        type: "laptop",
        accessories: ["mouse"],
        price: 350,
        software: [
          {
            name: "Writer",
            price: 10,
          },
          {
            name: "Counter",
            price: 20,
          },
        ],
      },
      {
        id: 3,
        manufacturer: "BMI",
        type: "laptop",
        accessories: [],
        price: 150,
        software: [],
      })
    ];
  });

  test('non-matching type "NotFound" will return an empty array []', () => {
    expect(storageRegister.getAllComputersByType("NotFound")).toEqual([]);
  });

  test("missing parameter throws an exception", () => {
    expect(() => storageRegister.getAllComputersByType()).toThrow(
      "missing parameter"
    );
  });
});

describe("Testing hasAccessories", () => {
  const storageRegister = new StorageRegister(datastorage);

  test("return true if computer id number 1 has accessories", () => {
    expect(storageRegister.hasAccessories(1)).toBe(true);
  });

  test("return false if parameter id is missing", () => {
    expect(storageRegister.hasAccessories()).toBe(false);
  });

  test("return false if computer id number 3 doesn´t have accessories", () => {
    expect(storageRegister.hasAccessories(3)).toBe(false);
  });
});

describe("Testing getComputerAccessories", () => {
  const storageRegister = new StorageRegister(datastorage);

  test("get accessories from default jsonData with parameter id1 ", () => {
    expect(storageRegister.getComputerAccessories("1")).toEqual[
      ("keyboard", "display", "mouse")
    ];
  });

  test("if no accessories found, returns empty array from default jsonData with parameter id3", () => {
    expect(storageRegister.getComputerAccessories("3")).toEqual([]);
  });
});

describe("Testing getPriceWithoutSoftware", () => {
  const storageRegister = new StorageRegister(datastorage);

  test("get price of computer without software from default jsonData with parameter id2 ", () => {
    expect(storageRegister.getPriceWithoutSoftware(2)).toEqual(350);
  });

  test("if no computer with given id number is found an exception is thrown", () => {
    expect(() => storageRegister.getPriceWithoutSoftware("0000")).toThrow(
      "nothing found with given id"
    );
  });
});

describe("Testing getTotalPrice", () => {
  const storageRegister = new StorageRegister(datastorage);

  test("get total price of computer specifyed by id including total price of software ", () => {
    expect(storageRegister.getTotalPrice(2)).toEqual(380);
  });
  test("get total price of computer specifyed by id including total price of software ", () => {
    expect(storageRegister.getTotalPrice(3)).toEqual(150);
  });
  test("wrong id", () => {
    expect(() =>
      storageRegister
        .getTotalPrice("000")
        .toThrow("nothing found with given id")
    );
  });
});

describe("Testing getPriceOfTheSoftware", () => {
  const storageRegister = new StorageRegister(datastorage);

  test("get total price of software specifyed by id", () => {
    expect(storageRegister.getPriceOfTheSoftware(1)).toEqual(133);
  });
  test("get total price of software specifyed by id, but if no software found, return 0", () => {
    expect(storageRegister.getPriceOfTheSoftware(3)).toEqual(0);
  });
  test("wrong id", () => {
    expect(() =>
      storageRegister
        .getPriceOfTheSoftware("000")
        .toThrow("nothing found with given id")
    );
  });
});
