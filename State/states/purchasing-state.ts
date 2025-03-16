import States from "../states";
import VendingMachine from "../vending-machine";
import DispensingState from "./dispensing-state";
import NoCoinState from "./no-coin-state";

class PurchasingState implements States {
    constructor(private vendingMachine: VendingMachine) {
        console.log('next state -> Purchasing state');
    }
    insertCoin() {
        console.log('Please wait, we are processing your payment');
    }
    ejectCoin() {
        console.log(`${this.vendingMachine.getCurrentAmount()}rs returned`);
        this.vendingMachine.setCurrentAmount(0);
        this.vendingMachine.setState(new NoCoinState(this.vendingMachine));
    }
    selectItem() {
        console.log('Please wait, we are processing your payment');
    }
    clickOnPurchase() {
        const balance = this.vendingMachine.getBalance();
        if(balance < 0){
            console.log('Insufficient balance');
            console.log(`${this.vendingMachine.getCurrentAmount()}rs returned`);
            this.vendingMachine.setCurrentAmount(0);
            this.vendingMachine.setState(new NoCoinState(this.vendingMachine));
            return;
        }
        console.log(`${balance}rs returned as balance`);
        this.vendingMachine.setCurrentAmount(0);
        this.vendingMachine.setState(new DispensingState(this.vendingMachine));
        console.log('Payment successful!!');
    }
    dispenseItem() {
        console.log('Please wait, we are processing your payment');
    }
}

export default PurchasingState;