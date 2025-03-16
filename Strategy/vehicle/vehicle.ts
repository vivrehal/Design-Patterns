import BrakeStrategy from "../brake strategies/brake-strategy";

class Vehicle{
    private breakStrategy : BrakeStrategy;
    constructor(breakStrategy : BrakeStrategy){
        this.breakStrategy = breakStrategy;
    }
    applyBreak(){
        this.breakStrategy.brake();
    }
}

export default Vehicle;