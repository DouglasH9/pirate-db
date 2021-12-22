import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "../Components/DeleteButton";


const Main = (props) => {

    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [update, setUpdate] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/pirates")
        .then((res) => {
            setPirates(res.data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err)
        })
    },[update])

    const removeFromDom = (pirateId) => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId))
        setUpdate(!update);
    }

    return(

        <div>
            <h1>Yarrr!!! Welcome to the pirate database, Matey!</h1>
            <Link to={"/create"}>Add a pirate!</Link>
            {loaded &&
            <ul>
                {pirates.map((pirate, i) => {
                    return(
                        <li key={i}>
                            <div>
                                {pirate.pirateName}
                                <img src={pirate.imageURL} alt="a pirate" width="50px"/>
                                <Link to={"/view/" + pirate._id}>
                                    View Pirate
                                </Link>
                                
                                <DeleteButton variant="contained" color="error" pirateId={pirate._id} successCallBack={removeFromDom}/>
                            </div>
                        </li>
                    )
                })}
            </ul>
            }
        </div>
    )
}

export default Main;