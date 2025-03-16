import States from "../states";
import VendingMachine from "../vending-machine";
import HasCoinState from "./has-coin-state";

class NoCoinState implements States {
    constructor(private vendingMachine: VendingMachine) {
        console.log('next state -> No coin state');
    }
    
    insertCoin(money: number) {
        console.log(`${money}rs inserted`);
        this.vendingMachine.setCurrentAmount(money);
        this.vendingMachine.setState(new HasCoinState(this.vendingMachine));
    }
    
    ejectCoin() {
        console.log('No coin to eject');
    }
    
    selectItem() {
        console.log('Please insert a coin first');
    }

    clickOnPurchase() {
        console.log('Please insert a coin first');
    }
    
    dispenseItem() {
        console.log('Please insert a coin first');
    }
}

export default NoCoinState;