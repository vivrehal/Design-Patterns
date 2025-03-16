import HatchbackVehicle from "./vehicle/hatchback-vehicle"
import MuscleVehicle from "./vehicle/muscle-vehicle";
import SuvVehicle from "./vehicle/suv-vehicle";

const main = async () => {
    const alto = new HatchbackVehicle();
    alto.applyBreak();
    const swift = new HatchbackVehicle();
    swift.applyBreak();
    const mustang = new MuscleVehicle();
    mustang.applyBreak();
    const fortuner = new SuvVehicle();
    fortuner.applyBreak();
}

main();