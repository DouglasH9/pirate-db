import axios from "axios";
import React, {useState} from "react";
import PirateForm from "../Components/PirateForm";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const CreatePirate = ((props) => {

    const [isAdded, setIsAdded] = useState(false);
    const [errors, setErrors] =useState([]);

    const createHandler = ((pirate) => {
        axios.post("http://localhost:8000/api/pirates", pirate)
            .then(res => {
                if(res.data.err) {
                    console.log(res.data.err)
                }
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errArr =[];
                for (const key of Object.keys(errorResponse)){
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
                if(!errors){
                    setIsAdded(true);
                }
                console.log(errArr);
            })
    })

    return isAdded ?
    <Redirect to="/"/> :
    (
        <div>
            <h1>Create a Pirate!</h1>
            <PirateForm errors={errors} onSubmitProp={createHandler} initialPirateName="" initialImageURL="" initialNumChests={0} initialCatchPhrase="" initialPosition="" initialPegLeg={true} initialEyePatch={true} initialHookHand={true}/>
            <Link to={"/"}>Back to the Deck</Link>
        </div>
    )
})

export default CreatePirate;