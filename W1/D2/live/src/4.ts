//  we have types of cars Indica, Nexon, Tiago, Nano
// we have only one factory to manufacture all cars
// we will define type for entries so that none of the entries could be missed to fill

// type Car = {
//   ChasisNumber: number;
//   name: string;
//   type: "Petrol" | "Diesel";
//   place: "Gujrat"; //as only one factory is there
//   fuelCapacity: number;
//   tyreSize: "18" | "20" | "22";
//   engineCC: 1000 | 1500 | 4000;
// };
class Car {
  ChasisNumber: number;
  name: string;
  constructor(ChasisNumber: number, name: string) {
    this.ChasisNumber = ChasisNumber;
    this.name = name;
  }
}

type IndicaPlace = "Gujrat" | "Mumbai" | "Kolkata";
type IndicaEngine = 1000 | 2000 | 4000;
type IndicaTyreType = "18" | "20" | "22";

class Indica extends Car {
  fuelCapacity: number;
  engineCC: IndicaEngine;
  tyre: IndicaTyreType;
  place: IndicaPlace;
  constructor(
    place: IndicaPlace,
    fuelCapacity: number,
    engineCC: IndicaEngine,
    tyre: IndicaTyreType
  ) {
    super(Date.now(), "Indica");
    this.place = place;
    this.fuelCapacity = fuelCapacity;
    this.engineCC = engineCC;
    this.tyre = tyre;
  }
}

let Indica1 = new Indica("Gujrat", 20, 1000, "20");

type NexonPlace = "Mumbai" | "Kolkata";
type NexonEngine = 1000 | 2000 | 4000;
type NexonTyreType = "22" | "26";
type NexonCarType = "Petrol" | "Diesel" | "EV";

class Nexon extends Car {
  fuelCapacity?: number;
  engineCC?: NexonEngine;
  tyre: NexonTyreType;
  place: NexonPlace;
  carType: NexonCarType;
  constructor(
    carType: NexonCarType,
    place: NexonPlace,
    tyre: NexonTyreType,
    fuelCapacity?: number,
    engineCC?: NexonEngine
  ) {
    super(Date.now(), "Indica");
    this.carType = carType;
    this.place = place;
    if (fuelCapacity) this.fuelCapacity = fuelCapacity;
    if (engineCC) this.engineCC = engineCC;
    this.tyre = tyre;
  }
}

let nexon = new Nexon("EV", "Mumbai", "22");
