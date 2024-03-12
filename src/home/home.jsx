import React,{useState} from "react";
import Shop from "../shop/shop";
import './home.css'



function Home(){
    const [data , dataState] = useState("Hello World")
    const propsData = "Testing Props Data"
    function updateData(){
        dataState("The Value is Updated By Using State Hook")
    }
    return(
        <>
        <div className="main_div">
         <h1 className="mt-2">Example of  useState Hook</h1>
        <h3 className="mt-5">{data}</h3>
        <button onClick={updateData}>Update The Value</button>

        <Shop dataToSend={propsData} />
        </div>
        </> 
    )
}


export default Home;