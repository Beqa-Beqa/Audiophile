import "./AlsoLikeContainer.css";
import AlsoLikeSingle from "../Components/AlsoLikeSingle";
import headphoneData from "../Data/HeadphoneData";
import speakerData from "../Data/SpeakerData";
import earphoneData from "../Data/EarphoneData";

let AlsoLikeContainer = () => {
    const dataArr = [headphoneData, speakerData, earphoneData];
    const randomIndexFromData = (minNum: number, maxNum: number) => {
        return Math.floor((Math.random() * (maxNum - minNum) + minNum));
    }
    let randomSection1, itemData1, randomSection2, itemData2, randomSection3, itemData3;
    const differentData = () => {
        randomSection1 = dataArr[randomIndexFromData(0, dataArr.length)];
        randomSection2 = dataArr[randomIndexFromData(0, dataArr.length)];
        randomSection3 = dataArr[randomIndexFromData(0, dataArr.length)];
        itemData1 = randomSection1[randomIndexFromData(0, randomSection1.length)];
        itemData2 = randomSection2[randomIndexFromData(0, randomSection2.length)];
        itemData3 = randomSection3[randomIndexFromData(0, randomSection3.length)];
        if(itemData1 === itemData2 || itemData1 === itemData3 || itemData2 === itemData3) {
           differentData();
        }
    }
    const setProperFromPath = (section: any) => {
        if(section === headphoneData) {
            return "/headphones/";
        } else if (section === speakerData) {
            return "/speakers/";
        } else if (section === earphoneData) {
            return "/earphones/";
        }
    }
    differentData();
    return (
        <div className="also-like-parent">
            <h2>You may also like</h2>
            <div className="also-like-container">
                <AlsoLikeSingle from={setProperFromPath(randomSection1)} itemData={itemData1} />
                <AlsoLikeSingle from={setProperFromPath(randomSection2)} itemData={itemData2} />
                <AlsoLikeSingle from={setProperFromPath(randomSection3)} itemData={itemData3} />
            </div>
        </div>
    );
}

export default AlsoLikeContainer;