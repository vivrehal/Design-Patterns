import Shape from "./shape";
import Circle from "./Shapes/circle";
import Square from "./Shapes/square";
import Properties from "./types";

class ShapeFactory {
    getShape(properties: Properties): Shape | null {
        if (properties.radius) {
            return new Circle(properties);
        }else if (properties.side) {
            return new Square(properties);
        }
        return null;
    }
}

export default ShapeFactory;