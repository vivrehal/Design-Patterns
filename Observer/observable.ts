import Observer from "./observer";

class Observable {
    private observers: Observer[] = [];
    private stock: number = 0;

    public addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    private notifyObservers() {
        this.observers.forEach((observer, idx) => observer.update(JSON.stringify(observer.name)));
    }

    public getStock() {
        return `Stock is ${this.stock}`;
    }

    public setStock(stock: number) {
        const oldStock = this.stock;
        this.stock = stock;
        if(oldStock == 0 && stock > 0){
            this.notifyObservers();
        }
        console.log(`------------------------------`);
    }
}

export default Observable;