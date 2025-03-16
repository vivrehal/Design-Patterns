import DrumBrakeStrategy from "../brake strategies/drum-brake-strategy";
import Vehicle from "./vehicle";

class HatchbackVehicle extends Vehicle {
    constructor() {
        super(new DrumBrakeStrategy());
    }
}

export default HatchbackVehicle;