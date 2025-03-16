import Item from "./item";
import States from "./states";
import NoCoinState from "./states/no-coin-state";

class VendingMachine {
  private inventory: Map<number, Item>;
  private vendingMachineState: States;
  private currentAmount: number = 0;
  private selectedItem: Item | null;

  constructor() {
    this.vendingMachineState = new NoCoinState(this);
    this.inventory = new Map();
    this.initializeInventory();
    this.selectedItem = null;
  }

  insertCoin(money: number) {
    this.vendingMachineState.insertCoin(money);
  }

  ejectCoin() {
    this.vendingMachineState.ejectCoin();
  }

  selectItem(code: number) {
    this.vendingMachineState.selectItem(code);
  }

  clickOnPurchase() {
    this.vendingMachineState.clickOnPurchase();
  }

  dispenseItem() {
    this.vendingMachineState.dispenseItem();
  }

  setState(state: States) {
    this.vendingMachineState = state;
  }

  getCurrentAmount() {
    return this.currentAmount;
  }

  getSelectedItem() {
    return this.selectedItem;
  }

  setSelectedItem(code: number) {
    const item = this.inventory.get(code);
    if (!item) {
      throw new Error("Item not found");
    }
    this.selectedItem = item;
  }

  getBalance() {
    let balance = this.currentAmount - this.selectedItem!.price;
    return balance;
  }

  setCurrentAmount(amount: number) {
    this.currentAmount = amount > 0 ? amount : 0;
  }

  initializeInventory() {
    this.inventory.set(100, new Item("Coke", 100, 25));
    this.inventory.set(101, new Item("Pepsi", 101, 35));
    this.inventory.set(102, new Item("Soda", 102, 45));
    console.log("Here is the inventory\n", this.inventory);
  }
}

export default VendingMachine;
