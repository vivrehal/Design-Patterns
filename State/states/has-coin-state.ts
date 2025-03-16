import States from "../states";
import VendingMachine from "../vending-machine";
import NoCoinState from "./no-coin-state";
import PurchasingState from "./purchasing-state";

class HasCoinState implements States {
    constructor(private vendingMachine: VendingMachine) {
        console.log('next state -> Has coin state');
    }
    insertCoin() {
        console.log('Coin already inserted');
    }
    ejectCoin() {
        console.log(`${this.vendingMachine.getCurrentAmount()}rs returned`);
        this.vendingMachine.setCurrentAmount(0);
        this.vendingMachine.setState(new NoCoinState(this.vendingMachine));
    }
    selectItem(code: number) {
        this.vendingMachine.setSelectedItem(code);
        console.log(`Item selected ${this.vendingMachine.getSelectedItem()!.name}`);
        this.vendingMachine.setState(new PurchasingState(this.vendingMachine));
    }
    clickOnPurchase() {
        console.log('First select an item');
    }
    dispenseItem() {
        console.log('Please select an item first');
    }
}

export default HasCoinState;