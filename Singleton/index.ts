import SingleCache from "./cache";

const main = async () => {
    const cache1 = SingleCache.getInstance();
    cache1.set("name", "John");
    cache1.set("age", "25");
    cache1.print();
    const cache2 = SingleCache.getInstance();
    cache2.set("city", "New York");
    cache2.print();
    console.log(cache1 === cache2);
    console.log(cache1.get("city"));
}
main();