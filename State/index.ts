import VendingMachine from "./vending-machine";

const main = () => {
    const vendingMachine = new VendingMachine();
    console.log('-----------------------------');
    vendingMachine.insertCoin(1000);
    console.log('-----------------------------');
    vendingMachine.selectItem(100);
    console.log('-----------------------------');
    
    // vendingMachine.ejectCoin();
    // console.log('-----------------------------');
    
    vendingMachine.clickOnPurchase();
    console.log('-----------------------------');

    vendingMachine.ejectCoin();
    console.log('-----------------------------');


    vendingMachine.dispenseItem();
    console.log('-----------------------------');

}

main();