import BrakeStrategy from "./brake-strategy";

class AbsBrakeStrategy implements BrakeStrategy {
  brake(): void {
    console.log('ABS brake applied');
  }
}

export default AbsBrakeStrategy;