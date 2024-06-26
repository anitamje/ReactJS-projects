import React, { useState } from 'react'
import Students from './Students';
import StudentAdd from './StudentAdd';

const Dashboard = () => {
  const [showStudents, setShowStudents] = useState(true);
  const [updateData, setUpdateData] = useState();

  const updateStudent = (e) => {
    console.log("update", e);
    setUpdateData(e);
    setShowStudents(false);
  };

  return (
    <div className="d-flex">
      <div className="menu">
        <button onClick={() => setShowStudents(true)}>View Students</button>
        <br/>
        <button onClick={() => setShowStudents(false)}>Add Student</button>
      </div>
      <div>
        {showStudents ? (
          <Students setUpdateStudent={(element) => updateStudent(element) }/>
        ) : (
          <StudentAdd onDone={() => {setShowStudents(true); setUpdateData(); }} update={updateData} />
        )}
      </div>
    </div>
  )
}

export default Dashboard;
