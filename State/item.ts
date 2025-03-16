class Item {
    public name: string;
    public code: number;
    public price: number;
    constructor(name: string, code: number, price: number) {
        this.name = name;
        this.code = code;
        this.price = price;
    }
}

export default Item;