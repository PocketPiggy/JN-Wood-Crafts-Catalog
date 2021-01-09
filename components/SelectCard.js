import wine from "../data/cards/wine.json";
import misc from "../data/cards/misc.json";
import signs from "../data/cards/signs.json";
import christmas from "../data/cards/christmas.json";
import valentines from "../data/cards/valentines.json";
import catalog from "../data/cards/catalog.json";

export default function SelectCard(page, card) {
    let result;
    switch (page)
    {
        case "wine":
            result = wine;
            break;
        case "misc":
            result = misc;
            break;
        case "signs":
            result = signs;
            break;
        case "christmas":
            result = christmas;
            break;
        case "valentines":
            result = valentines;
            break;
        case "catalog":
            result = catalog;
            break;
        default:
            result = "Something broke for SelectCard";
            break;
    }
    return result[card];
}
