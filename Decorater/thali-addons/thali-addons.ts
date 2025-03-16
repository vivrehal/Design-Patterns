import Thali from "../thali/thali";

abstract class AddonsDecorater extends Thali {
    protected thali: Thali;
    constructor(thali: Thali) {
        super();
        this.thali = thali;
    }
}

export default AddonsDecorater;