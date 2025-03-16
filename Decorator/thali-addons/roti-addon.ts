import Thali from "../thali/thali";
import AddonsDecorator from "./thali-addons";

class RotiAddon extends AddonsDecorator {
    constructor(thali : Thali) {
        super(thali);
    }
    getCost() {
        console.log("added roti");
        return this.thali.getCost() + 10;
    }
}

export default RotiAddon;