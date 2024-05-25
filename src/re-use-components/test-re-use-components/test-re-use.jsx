import React from 'react';
import ReUseComponent from '../re-use';
import './test.css'

function Test_re_use_function() {
  return (
    <div className='container'>
               <h1 className='text-center mt-5'>Re use Cards</h1>
        <div className='row'>
         <div className='col-lg-12 col-lg-8 col-6'> 
         <div className='cards_div'>
     
        <ReUseComponent
       card_heading="Card 1"
       card_description="lorem Ipsum"
       btnClassName="btn btn-success"
        />

       <ReUseComponent
       card_heading="Card 2"
       card_description="lorem Ipsum"
       btnClassName="btn btn-danger"
        />

       <ReUseComponent
       card_heading="Card 3"
       card_description="lorem Ipsum"
       btnClassName="btn btn-primary"
        />

       <ReUseComponent
       card_heading="Card 4"
       card_description="lorem Ipsum"
       btnClassName="btn btn-info"
        />

       <ReUseComponent
       card_heading="Card 5"
       card_description="lorem Ipsum"
       btnClassName="btn btn-warning"
        />
        </div>
        </div>  
        </div>
    </div>
  )
}

export default Test_re_use_function;
