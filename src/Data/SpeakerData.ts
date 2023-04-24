import * as IndividualSpeakerImages from "../Design/Speakers/Speakers/export";
import {SpeakerOne, SpeakerTwo} from "../Design/Speakers/export";

let index = 1;
const indexer = () => (index++);
const speakerData = [
    {
        index: indexer(),
        newProduct: true,
        image: SpeakerOne,
        images: [IndividualSpeakerImages.SpeakerFirstOne, IndividualSpeakerImages.SpeakerFirstTwo, IndividualSpeakerImages.SpeakerFirstThree],
        h2: "ZX9 SPEAKER",
        p: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        features: ["Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."],
        inTheBox: [["2x", "Speaker Unit"], ["2x", "Speaker Cloth Panel"], ["1x", "User Manual"], ["1x", "3.5mm 10m Audio Cable"], ["1x", "10m Optical Cable"]],
        price: 4500
    },
    {
        index: indexer(),
        newProduct: false,
        image: SpeakerTwo,
        images: [IndividualSpeakerImages.SpeakerSecondOne, IndividualSpeakerImages.SpeakerSecondTwo, IndividualSpeakerImages.SpeakerSecondThree],
        h2: "ZX7 SPEAKER",
        p: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        features: ["Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
        "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."],
        inTheBox: [["2x", "Speaker Unit"], ["2x", "Speaker Cloth Panel"], ["1x", "User Manual"], ["1x", "3.5mm 7.5m Audio Cable"], ["1x", "7.5m Optical Cable"]],
        price: 3500
    }
];

export default speakerData;