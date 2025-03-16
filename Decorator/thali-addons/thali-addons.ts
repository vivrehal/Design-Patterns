import Thali from "../thali/thali";

abstract class AddonsDecorator extends Thali {
    protected thali: Thali;
    constructor(thali: Thali) {
        super();
        this.thali = thali;
    }
}

export default AddonsDecorator;