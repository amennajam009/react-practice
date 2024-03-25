import React from 'react'

function Student_child(props) {
    const studentData = props.student_array
    console.log('student Array' , studentData)
  return (
    <div>
        <div className='d-flex ; justify-content-center mt-5'>
      <h1>Student Child Component</h1>
      </div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">University</th>
      <th scope="col">Contact_no</th>
    </tr>
  </thead>
  <tbody>
    <tr>

        {
            studentData.map(student => (
                <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.university}</td>
                <td>{student.contact_no}</td>

                </tr>
            ))
        }
      {/* <td>{studentData.name}</td>
      <td>{studentData.age}</td>
      <td>{studentData.university}</td>
      <td>{studentData.contact_no}</td> */}

    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Student_child
