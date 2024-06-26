import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal/Modal';

const Students = ({ setUpdateStudent }) => {
  const [data, setData] = useState();
  const [successDelete, setSuccessDelete] = useState();

  const deleteStudent = (element) => {
    const url = `https://datacenter.isocium.com/student/delete?id=${element.id}`;
    axios.delete(url).then((res) => {
      console.log(res);
      if (res.data) {
        setSuccessDelete(element);
        getData();
      }
    }).catch((err) => console.log(err))
  }

  const getData = () => {
    const url = "https://datacenter.isocium.com/student/all";
    axios.get(url).then((res) => {
      console.log("res", res);
      setData(res.data);
    }).catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="students">
      <ul>
        {
          data?.map((el) => (
            <li key={el.id}>
              <img src={el?.img} alt='' />
              <span>{el.contactform_fullName}</span>
              <span>{el.contactform_email}</span>
              <span>{el.contactform_phone}</span>
              <span>{el.contactform_text}</span>
              <span>{el.state}</span>
              <span><button onClick={() => deleteStudent(el)}>Delete</button></span>
              <span><button onClick={() => setUpdateStudent(el)}>Update</button></span>
            </li>
          ))
        }
      </ul>
      <Modal isOpen={!!successDelete} close={() => setSuccessDelete()}>
        <p style={{ color: "red" }}>Success delete student:{successDelete?.contactform_fullName}</p>
      </Modal>
    </div>
  )
};

export default Students;