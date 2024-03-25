import React from "react";
import './review.css'

function Review(props){
    const { sndObject } = props;
    const { name , age ,code} = sndObject;
    return(
        <>
        <h2>Review Component Works</h2>
        <h3>{props.reviewData}</h3>
        <div className="div_2">
         <h4 className="text-center">Change The Data From <br/> Parent Component To Child By Destruction </h4>

         <h3 className="h3_tag">My Name is {name} i'm {age} years old and i love to {code}</h3>
         <div className="btn_class">
            <button className="btn btn-success" onClick={props.alertFunction}>Generate Alert</button>
            </div>
        </div>
        </>
    )
}


export default Review