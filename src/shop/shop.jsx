import React , {useState} from "react";
import './shop.css'

function Shop(props){
    const StaticData = "Right Now It's Static"
    const [changeText , setData] = useState(StaticData)
    function changeTheText(){
        setData(props.TestData)
    }
    return(
        <>
        <h2>Shop Component Works</h2>
        <h3>{props.dataToSend}</h3>

        <div className="div_1">
         <h4 className="text-center">Change The Data From <br/> Parent Component To Child </h4>

         <h3 className="h3_tag">{changeText}</h3>
         <div className="btn_class">
         <button className="btn btn-success" onClick={changeTheText}>Change Text</button>
         </div>
        </div>
        </>
    )
}



export default Shop;