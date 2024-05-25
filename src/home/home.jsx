import React,{useState} from "react";
import Shop from "../shop/shop";
import './home.css'
import Review from "../review/review";
import Fragments from "../Fragments/fragments";



function Home(){
    const [data , dataState] = useState("Hello World")
    const shopPropsData = "Send props data to shop component"
    const reviewPropsData = "Send props data to review component"
    const changeText = "Text is Changed"
    const myArr = {
        name:'Amen',
        age:21,
        code:"code"
    }
    function updateData(){
        dataState("The Value is Updated By Using State Hook")
    }

    function generateAlert(){
        alert('Hello i am learning react js')
    }
    return(
        <>
        <div className="main_div">
         <h1 className="mt-5 bg-info">Example of  useState Hook</h1>
        <h3 className="mt-5">{data}</h3>
        <button onClick={updateData}>Update The Value</button>


        <div className="shop_child">
        <h1 className="mt-5 bg-info">Example of Props</h1>
        <Shop dataToSend={shopPropsData} TestData= {changeText} />
        
        <div className="review_child">
        <Review reviewData={reviewPropsData} sndObject={myArr} alertFunction={generateAlert} />
        </div>
        
     
        </div>
        </div>
        <Fragments/>
        </> 
    )
}


export default Home;