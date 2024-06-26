import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ backToLogin }) => {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    "name": "",
    "last_name": "",
    "password": "",
    "email": "",
    "role_id": 1,
    "status": "active"
  });

  const changes = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const saveUser = () => {
    const url = "https://datacenter.isocium.com/authentication/signup";
    axios.post(url, formData).then((res) => {
      console.log("res", res);
      if (res.data?.msg) {
        setSuccess(res.data?.msg);
        setTimeout(() => {
          backToLogin();
        }, 5000);
      } else {
        setError(res.data?.errors[0].message);
        setTimeout(() => {
          setError();
        }, 6000);
      }
    }).catch((err) => console.log(err))

  }

  return (
    <div>
      <h3>Sign up</h3>
      <div className='form-group'>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={changes}
          autoComplete='false'
        />
      </div>
      <div className='form-group'>
        <label>Surname</label>
        <input
          type="text"
          placeholder="Surname"
          name="last_name"
          onChange={changes}
          autoComplete='false'
        />
      </div>
      <div className='form-group'>
        <label>Username or email</label>
        <input
          type="text"
          placeholder="Username or email"
          name="email"
          onChange={changes}
          autoComplete='false'
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={changes}
          autoComplete='false'
        />
      </div>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => saveUser()}>Register</button>
    </div>
  )
}

export default SignUp;
