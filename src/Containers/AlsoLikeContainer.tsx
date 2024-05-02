import "../Design/CSS/ContainerStyles/AlsoLikeContainer.css";
import AlsoLikeSingle from "../Components/AlsoLikeSingle";
import headphoneData from "../Data/HeadphoneData";
import speakerData from "../Data/SpeakerData";
import earphoneData from "../Data/EarphoneData";
import { specificDataObject } from "../Data/Interface";

let AlsoLikeContainer = (props: {data: specificDataObject}) => {
    // Imported all the data to create array of all the data which is used to randomly pick an item for "You may also like" section
    const dataArr = [headphoneData, speakerData, earphoneData];
    // Generates random index from range in given numbers
    const randomIndexFromData = (minNum: number, maxNum: number) => {
        return Math.floor((Math.random() * (maxNum - minNum) + minNum));
    }
    // Declaring variables and giving initial values so we don't get error from TS types.
    let randomSection1: specificDataObject[] = [], randomSection2: specificDataObject[] = [], randomSection3: specificDataObject[] = [];
    let itemData1: specificDataObject = {features: [], h2: "", image: "", images: [], index: 0, inTheBox: [], newProduct: false, p: "", price: 0}
    let itemData2: specificDataObject = itemData1;
    let itemData3: specificDataObject = itemData1;
    // This while loop ensures all the items are different and none repeats. Also makes sure we won't see same item we are observing to.
    while(itemData1 === itemData2 || itemData1 === itemData3 || itemData2 === itemData3 || itemData1 === props.data || itemData2 === props.data || itemData3 === props.data) {
        randomSection1 = dataArr[randomIndexFromData(0, dataArr.length)];
        randomSection2 = dataArr[randomIndexFromData(0, dataArr.length)];
        randomSection3 = dataArr[randomIndexFromData(0, dataArr.length)];
        itemData1 = randomSection1[randomIndexFromData(0, randomSection1.length)];
        itemData2 = randomSection2[randomIndexFromData(0, randomSection2.length)];
        itemData3 = randomSection3[randomIndexFromData(0, randomSection3.length)];
    } 
    // This function corrects the path based on where the item is chosen from
    const setProperFromPath = (section: specificDataObject[]) => {
        if(section === headphoneData) {
            return "/Audiophile/headphones/";
        } else if (section === speakerData) {
            return "/Audiophile/speakers/";
        } else if (section === earphoneData) {
            return "/Audiophile/earphones/";
        }
    }
    return (
        <div className="also-like-parent">
            <h2>You may also like</h2>
            <div className="also-like-container">
                {/* Containing components and passing needed data */}
                <AlsoLikeSingle from={setProperFromPath(randomSection1)} itemData={itemData1} />
                <AlsoLikeSingle from={setProperFromPath(randomSection2)} itemData={itemData2} />
                <AlsoLikeSingle from={setProperFromPath(randomSection3)} itemData={itemData3} />
            </div>
        </div>
    );
}

export default AlsoLikeContainer;