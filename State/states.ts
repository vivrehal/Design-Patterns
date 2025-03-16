interface States {
    insertCoin(money: number): void;
    ejectCoin(): void;
    selectItem(code: number): void;
    dispenseItem(): void;
    clickOnPurchase(): void;
}

export default States;