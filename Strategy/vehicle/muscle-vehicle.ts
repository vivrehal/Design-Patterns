import AbsBrakeStrategy from "../brake strategies/abs-brake-strategy";
import Vehicle from "./vehicle";

class MuscleVehicle extends Vehicle {
  constructor() {
    super(new AbsBrakeStrategy());
  }
}

export default MuscleVehicle;