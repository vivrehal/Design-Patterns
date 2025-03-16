import RaitaAddon from "./thali-addons/raita-addon";
import RotiAddon from "./thali-addons/roti-addon";
import PaneerThali from "./thali/paneer-thali";

const main = () => {
    const thali = new PaneerThali();
    console.log(thali.getCost());
    const thaliWithRaita = new RaitaAddon(thali);
    console.log(thaliWithRaita.getCost());
    const thaliWithRotiAndRaita = new RotiAddon(thaliWithRaita);
    console.log(thaliWithRotiAndRaita.getCost());
}

main();