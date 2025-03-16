import Shape from "../shape";
import Properties from "../types";

class Square implements Shape {
  private properties: Properties;
  constructor(properties: Properties) {
    this.properties = properties;
  }

  getArea() {
    const { side } = this.properties;
    if (!side) return 0;
    console.log(side * side);
  }
}

export default Square;
