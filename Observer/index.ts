import Observable from "./observable";
import Observer from "./observer";

const main = async () => {
    const subject = new Observable();
    const observer1 = new Observer(subject);
    const observer2 = new Observer(subject);
    subject.setStock(100);
    subject.removeObserver(observer1);
    subject.setStock(0);
    subject.setStock(200);
}
main();
// Output:
// Observer1 has been notified
// Observer2 has been notified
// Observer2 has been notified