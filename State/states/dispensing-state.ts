import VendingMachine from "../vending-machine";
import NoCoinState from "./no-coin-state";

class DispensingState {
    constructor(private vendingMachine: VendingMachine) {
        console.log('next state -> Dispensing state');
    }
    insertCoin() {
        console.log('Please wait, dispensing item');
    }
    ejectCoin() {
        console.log('Item already dispensed and balance already returned');
    }
    selectItem() {
        console.log('Item already selected');
    }
    clickOnPurchase() {
        console.log('Item already purchased');
    }
    dispenseItem() {
        console.log(`${this.vendingMachine.getSelectedItem()?.name} dispensed`);
        this.vendingMachine.setState(new NoCoinState(this.vendingMachine));
    }
}

export default DispensingState;