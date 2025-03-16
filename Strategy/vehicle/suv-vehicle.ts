import AbsBrakeStrategy from "../brake strategies/abs-brake-strategy";
import Vehicle from "./vehicle";

class SuvVehicle extends Vehicle {
  constructor() {
    super(new AbsBrakeStrategy());
  }
}

export default SuvVehicle;