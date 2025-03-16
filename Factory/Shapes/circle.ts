import Shape from "../shape";
import Properties from "../types";

class Circle implements Shape{
    private properties : Properties;
    constructor(properties : Properties){
        this.properties = properties;
    }
    getArea() {
        const { radius } = this.properties;
        if(!radius)return 0;
        console.log(2*3.14*radius);
    }
}

export default Circle;