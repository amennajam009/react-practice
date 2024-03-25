import React from 'react'

function Student_child(props) {
    const studentData = props.student_array
    const ArrayData = props.dataArray
    // console.log('array data' , ArrayData)
  return (
    <div>
        <div className='d-flex ; justify-content-center mt-5'>
      <h1>Student Child Component</h1>
      </div>
      <table className="table">
  <thead>
    <tr>
      <th scope='col'>Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">University</th>
      <th scope="col">Contact_no</th>
    </tr>
  </thead>
  <tbody>
   
        {
            studentData.map((student , index )=> (
                <tr key={student.name}>
                <td>{index+1}</td>    
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.education}</td>
                <td>{student.contact_no}</td>
                </tr>
            ))
        }
      {/* <td>{ArrayData[0].name}</td>
      <td>{ArrayData[0].age}</td>
      <td>{studentData.university}</td>
      <td>{studentData.contact_no}</td> */}

    {/* </tr> */}
  </tbody>
</table>
    </div>
  )
}

export default Student_child
