import React, {useState} from 'react'
import Student_child from './student_child'
import './conditional.css'
function Conditional_rendering() {
  // useState for only if else
  const [LoggedIn , setLoggedData] = useState(false) 
  // useState for if/else if /else click
  const [LoggedInUser , setData] = useState('super-admin')
  // List Rendering using .map
  const userList = ['user-1' , 'user-2' , 'user-3' , 'user-4' , 'user-5','user-5']
  const result = userList.map(users => users)
  let TestingCondition = true
  let Dynamic_Class = TestingCondition? 'text-primary' : 'text-danger'

  //student Info Array
  const Student_Info = [
    {
        name:'amen',
        age: '20',
        education: 'university',
        contact_no:'090078601'
    },
    {
        name:'Micheal',
        age: '28',
        education: 'university',
        contact_no:'090078601'
    },
    {
        name:'Freaklin',
        age: '29',
        education: 'university',
        contact_no:'090078601'
    },
    {
        name:'Trevior',
        age: '30',
        education: 'university',
        contact_no:'090078601'
    }
  ]
const payLoad = {
  name:"",
  lastName:""
}
const [userData , setUserData] = useState(payLoad)
  const getFromData = (e) =>{
   e.preventDefault()
  }

const handleData = (e) =>{
  setUserData({...userData , [e.target.name]:e.target.value})
}

 

  const passingStudentInfo = Student_Info.map(students => students)
  console.log('pass%%%%%%',passingStudentInfo)
  return (
    <div>
      <div className='conditional_div'>
        {/*if /else  START */}
      <h1>Conditional Rendering In React Js (If / else) </h1>
      {LoggedIn?<h1 className='text-info'>Welcome User</h1>:<h1 className='text-warning'>Welcome Admin</h1>}
        {/* if / else END */}



         {/* if / else if / else START */}
      <h1 className='mt-5'>Conditional Rendering In React Js (If / Else If / Else)</h1>
      {LoggedInUser == 'user' ? 
      <h1 className='text-success'>Welcome User</h1> : LoggedInUser == 'super-admin'?
      <h1 className='text-danger'>Welcome Super-Admin</h1> : 
      <h1 className='text-warning'>Welcome Admin</h1>}
          {/* if / else if / else END  */}



         {/* List Rendering START */}
         <h1 className='mt-5'>List Rendering In React Js</h1>
         <h5 className='result'>{result}</h5>
         {/* List Rendering END */}

      </div>
         
         {/* Student Child Component START */}
         <Student_child student_array={passingStudentInfo} dataArray = {Student_Info} />
         {/* student Child Component END */}

         
         <h1 className={`${Dynamic_Class} text-center mt-5`}>Conditionally Apply Css Style</h1>

         <h1>Form Handling in React</h1>
         <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" value={userData.name} onChange={handleData} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" value={userData.lastName} onChange={handleData} id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getFromData} class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Conditional_rendering
