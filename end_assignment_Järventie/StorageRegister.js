"use strict";

module.exports = class StorageRegister {
  constructor(data) {
    if (data) {
      this.storageRegister = data;
    } else {
      throw new Error("data storage missing");
    }
  }

  getById(id) {
    if (!id) throw new Error("parameter missing");
    const found = [];
    for (let computer of this.storageRegister) {
      for (let softis of computer.software) {
        if (computer.id === id) {
          found.push({
            id: computer.id,
            manufacturer: computer.manufacturer,
            type: computer.type,
            accessories: computer.accessories,
            price: computer.price,
            software: {
              name: softis.name,
              price: softis.price,
            },
          });
        }
      }
    }
    return found;
  }

  getAllIdsByManufacturer(manufacturer) {
    const idsFound = [];
    for (let computer of this.storageRegister) {
      if (computer.manufacturer === manufacturer) {
        idsFound.push(computer.id);
      }
    }
    return idsFound;
  }

  getAllComputerTypes() {
    const types = [];
    for (let computer of this.storageRegister) {
      if (!types.includes(computer.type)) {
        types.push(computer.type);
      }
    }
    return types;
  }

  getAllComputersByType(type) {
    if (!type) throw new Error("missing parameter");
    const found = [];
    for (let computer of this.storageRegister) {
      for (let softis of computer.software) {
        if (computer.type === type) {
          found.push({
            id: computer.id,
            manufacturer: computer.manufacturer,
            type: computer.type,
            accessories: computer.accessories,
            price: computer.price,
            software: {
              name: softis.name,
              price: softis.price,
            },
          });
        }
      }
    }
    return found;
  }

  hasAccessories(id) {
    for (let computer of this.storageRegister) {
      if (computer.id === id) {
        if (computer.accessories) {
          return computer.accessories.length > 0;
        } else {
          return false;
        }
      }
    }
    return false;
  }

  getComputerAccessories(id) {
    for (let computer of this.storageRegister) {
      if (computer.id === id) {
        return computer.accessories;
      }
    }
    return [];
  }

  getPriceWithoutSoftware(id) {
    for (let computer of this.storageRegister) {
      if (computer.id === id) {
        return computer.price;
      }
    }

    throw new Error("nothing found with given id");
  }

  getTotalPrice(id) {
    if (id) {
      const softwarePricesFound = [];
      for (let computer of this.storageRegister) {
        if (computer.id === id) {
          for (let software of computer.software) {
            softwarePricesFound.push(software.price);
          }
        }
      }
      let sum = 0;
      for (let i = 0; i < softwarePricesFound.length; i++) {
        sum += softwarePricesFound[i];
      }
      for (let computer of this.storageRegister) {
        if (computer.id === id) {
          return sum + computer.price;
        }
      }
    }
    throw new Error("nothing found with given id");
  }

  getPriceOfTheSoftware(id) {
    if (id) {
      const softwarePricesFound = [];
      for (let computer of this.storageRegister) {
        if (computer.id === id) {
          for (let software of computer.software) {
            softwarePricesFound.push(software.price);
          }
        }
      }
      let sum = 0;
      for (let i = 0; i < softwarePricesFound.length; i++) {
        sum += softwarePricesFound[i];
      }

      return sum;
    }

    throw new Error("nothing found with given id");
  }
};
