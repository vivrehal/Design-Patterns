import Thali from "../thali/thali";
import AddonsDecorater from "./thali-addons";

class RaitaAddon extends AddonsDecorater {
    constructor(thali: Thali) {
        super(thali);
    }
    public getCost(): number {
        console.log("added raita");
        return this.thali.getCost()+30;
    }
}

export default RaitaAddon;