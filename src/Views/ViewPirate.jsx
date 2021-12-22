import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
// import DeleteButton from "../Components/DeleteButton";
import axios from "axios";


const ViewPirate = (props) => {

    const {id} = useParams();
    const [pirate, setPirate] = useState({});
    const history = useHistory();

    useEffect( () => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(res => {
                setPirate(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[id])

    return(
        <div>
            <h1>Info for: {pirate.pirateName}</h1>
            <h2>About:</h2>
            <h3>Position: {pirate.position}</h3>
            <h3>Treasure chests: {pirate.numChests}</h3>
            <h3>Peg leg: {(pirate.pegLeg) ? 
                "Yes" : "No"
            }</h3>
            <h3>Eye patch: {(pirate.eyePatch) ? 
                "Yes" : "No"
            }</h3>
            <h3>Hook hand: {(pirate.hookHand) ?
                "Yes" : "No"}
            </h3>
            <img src={pirate.imageURL} width="75px"/>
            <Link to={"/"}>Back to the Deck</Link>
        </div>
    )
}

export default ViewPirate;