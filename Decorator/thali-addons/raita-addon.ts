import Thali from "../thali/thali";
import AddonsDecorator from "./thali-addons";

class RaitaAddon extends AddonsDecorator {
    constructor(thali: Thali) {
        super(thali);
    }
    public getCost(): number {
        console.log("added raita");
        return this.thali.getCost()+30;
    }
}

export default RaitaAddon;