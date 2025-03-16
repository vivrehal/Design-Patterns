import ShapeFactory from "./shape-factory.js";
import Properties from "./types.js"

const main = async () => {  
    const properties : Properties = {
        side : 10
    };
    const shapeFactory = new ShapeFactory();
    const shape = shapeFactory.getShape(properties);
    if(shape){
        shape.getArea();
    }
    
}

main();