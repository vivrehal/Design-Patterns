import Thali from "../thali/thali";
import AddonsDecorater from "./thali-addons";

class RotiAddon extends AddonsDecorater {
    constructor(thali : Thali) {
        super(thali);
    }
    getCost() {
        console.log("added roti");
        return this.thali.getCost() + 10;
    }
}

export default RotiAddon;