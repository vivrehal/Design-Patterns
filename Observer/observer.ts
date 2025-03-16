import Observable from "./observable";

class Observer {
    private observable: Observable;
    public name : string;
    constructor(observable: Observable) {
        this.observable = observable;
        this.observable.addObserver(this);
        this.name = Math.random().toString(36).substring(7);
    }
    public update(name : string): void {
        console.log(`${name} has been notified for ${this.observable.getStock()} `);
    }
}
export default Observer;