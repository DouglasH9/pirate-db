import React, {useState} from "react";


const PirateForm = (props) => {

    const {initialPirateName, initialImageURL, initialNumChests, initialCatchPhrase, initialPosition, onSubmitProp, submitButtonName, errors} = props;
    const [pirateName, setPirateName] = useState(initialPirateName);
    const [imageURL, setImageURL] = useState(initialImageURL);
    const [numChests, setNumChests] = useState(initialNumChests);
    const [catchPhrase, setCatchPhrase] = useState(initialCatchPhrase);
    const [position, setPosition] = useState("Captain")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)
    const [checkedOne, setCheckedOne] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(true);
    const [checkedThree, setCheckedThree] = useState(true);


    const options = [
        {value: "Captain", label: "Captain"},
        {value: "First Mate", label: "First Mate"},
        {value: "Navigator", label: "Navigator"},
        {value: "Sailor", label: "Sailor"},
        {value: "Powder Monkey", label: "PowderMonkey"},
        {value: "Boatswain", label: "Boatswain"}
    ]

    const handleCheckedOne = () => {
        setCheckedOne(!checkedOne);
        setPegLeg(!pegLeg);
    }
    const handleCheckedTwo = () => {
        setCheckedTwo(!checkedTwo);
        setEyePatch(!eyePatch);
    }
    const handleCheckedThree = () => {
        setCheckedThree(!checkedThree);
        setHookHand(!hookHand);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({pirateName, imageURL, numChests, catchPhrase, position, pegLeg, eyePatch, hookHand})
        setPirateName("");
        setImageURL("");
        setNumChests(0);
        setCatchPhrase("");
        setPosition("");
    }


    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Pirate Name: </label>
                <input type="text" name="pirateName" onChange={(e) => {setPirateName(e.target.value)}} value={pirateName}  />
                {errors[0] ? <p>{errors[0]}</p> : ""}
            </div>
            <div>
                <label>Pic URL: </label>
                <input type="text" name="imageURL" onChange={(e) => {setImageURL(e.target.value)}} value={imageURL} />
                {errors[1] ? <p>{errors[1]}</p> : ""}
            </div>
            <div>
                <label>Number of chests: </label>
                <input type="number" name="numChests" onChange={(e) => {setNumChests(e.target.value)}} value={numChests} />
                {errors[2] ? <p>{errors[2]}</p> : ""}
            </div>
            <div>
                <label>Catch phrase: </label>
                <input type="text" name="catchPhrase" onChange={(e) => {setCatchPhrase(e.target.value)}} value={catchPhrase} />
                {errors[3] ? <p>{errors[3]}</p> : ""}
            </div>
            <div>
                <label>Position: </label>
                <select onChange={(e) =>{setPosition(e.target.value)}}>
                    {options.map((option, i) => (
                        <option key={i} value={option.value}>{option.label}</option>
                    ))}
                </select>
                {errors[3] ? <p>{errors[3]}</p> : ""}
            </div>
            <div>
                <label>Peg Leg? </label>
                <input label="Peg Leg?" type="checkbox" checked={checkedOne} value={checkedOne} onChange={handleCheckedOne} />
            </div>
            <div>
                <label>Eye Patch? </label>
                <input type="checkbox" label="Eye Patch?" checked={checkedTwo} value={checkedTwo} onChange={handleCheckedTwo} />
            </div>
            <div>
                <label>Hook Hand? </label>
                <input type="checkbox" label="Hook Hand?" checked={checkedThree} value={checkedThree} onChange={handleCheckedThree} />
            </div>
            <div>
                <input type="submit" name="submit" value={submitButtonName} />
            </div>
        </form>
    )
}

export default PirateForm;