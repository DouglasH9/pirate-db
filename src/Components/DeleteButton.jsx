import React from "react";
import axios from "axios";
// import Button from "@material-ui/core/Button"



const DeleteButton = (props) => {

    const {pirateId, successCallBack} = props;
    

    const deleteHandler = (e) => {
        // e.preventDefault();
        axios.delete("http://localhost:8000/api/pirates/" + pirateId)
            .then(res => {
                console.log(res);
                successCallBack();
            })
            .catch(err=> console.log(err))
    }

    return(
        <button className="coolButton" onClick={() => {
            const confirmBox = window.confirm(
                "Arrrrrggg you sure you want to delete this pirate?"
            )
            if (confirmBox === true) {
                deleteHandler()
            }
        }
        }>Walk the plank?</button>
    )
}

export default DeleteButton;