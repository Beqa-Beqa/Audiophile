import * as IndividualEarphoneImages from "../Design/Earphones/Earphones/export";
import {EarphoneOne} from "../Design/Earphones/export";

let index = 1;
const indexer = () => (index++);
const earphoneData = [
    {
        index: indexer(),
        newProduct: true,
        image: EarphoneOne,
        images: [IndividualEarphoneImages.EarphoneFirstOne, IndividualEarphoneImages.EarphoneFirstTwo, IndividualEarphoneImages.EarphoneFirstThree],
        h2: "YX1 WIRELESS EARPHONES",
        p: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        features: ["Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
        "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."],
        inTheBox: [["2x", "Earphone Unit"], ["6x", "Multi-size Earplugs"], ["1x", "User Manual"], ["1x", "USB-C Charging Cable"], ["1x", "Travel Pouch"]],
        price: 599,
    }
];

export default earphoneData;