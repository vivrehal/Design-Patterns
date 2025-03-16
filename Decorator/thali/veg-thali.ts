import Thali from "./thali";

class VegThali extends Thali {
    public getCost(): number {
        console.log("Veg Thali");
        return 100;
    }
}

export default VegThali;