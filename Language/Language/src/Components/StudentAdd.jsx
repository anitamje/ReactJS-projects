import React, { useEffect, useState } from 'react'
import Input from './Input';
import axios from 'axios';

const StudentAdd = ({ update, onDone }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [successSave, setSuccessSave] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    description: "",
    state: "",
    phone: "",
    img: ""
  });
  const handelChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("formData", formData);
  const send = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    if (update) {
      const url = "https://datacenter.isocium.com/students/update";
      axios.put(
        url,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        }
      ).then((res) => {
        console.log("res", res);
        if(res.data) {
          setSuccessSave("Update successful!");
          setTimeout(() => {
            onDone();
          }, 4000);
        }
      }).catch((err) => console.log(err));
    } else {
      const url = "https://datacenter.isocium.com/student/create";
      axios.post(url, formData).then((res) => {
        console.log("res", res);
        if(res.data?.msg) {
          setSuccessSave(res.data?.msg);
          setTimeout(() => {
            onDone();
          }, 4000);
        }
      }).catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    console.log(" props.update", update);
    if (update) {
      const constUpdateData = {
        fullName: update.contactform_fullName,
        email: update.contactform_email,
        description: update.contactform_text,
        state: update.state,
        phone: update.contactform_phone,
        img: update.img,
        id: update.id
      }
      setFormData(constUpdateData);
    }
  }, [update]);

  return (
    <div className="students">
      <h3>{update ? "Update Student" : "Add Student"}</h3>
      <form onSubmit={send}>
        <Input
          name="fullName"
          label="Full name"
          change={handelChanges}
          value={formData.fullName}
        />
        <Input
          name="email"
          type="email"
          label="E-mail"
          change={handelChanges}
          value={formData.email}
        />
        <Input
          name="description"
          label="Description"
          change={handelChanges}
          value={formData.description}
        />
        <Input
          name="phone"
          label="Phone"
          change={handelChanges}
          value={formData.phone}
        />
        <Input
          name="state"
          label="State"
          change={handelChanges}
          value={formData.state}
        />
        <Input
          name="img"
          type="url"
          label="Img url:"
          change={handelChanges}
          value={formData.img}
        />
        {successSave && <p>{successSave}</p>}
        <Input
          type="submit"
          value={update ? "Update" : "Save"}
          btnDisabled={btnDisabled}
        />
      </form>
    </div>
  )
}

export default StudentAdd;
