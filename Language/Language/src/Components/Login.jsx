import React, { useState, useContext } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { Context } from '../Context/Products';

const Login = ({ close }) => {
  const [state, dispatch] = useContext(Context);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const changes = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const send = (e) => {
    e.preventDefault();
    console.log("data", data);
    const url = "https://datacenter.isocium.com/authentication/login";
    
    axios.post(url, data).then((res) => {
      console.log("res", res);
      if(res.data?.error) {
        setError(res.data.error);
        setTimeout(() => {
          setError();
        }, 5000);
      } else {
        const userInfo = jwtDecode(res.data.token);
        localStorage.setItem("token", res.data.token);
        const objToString = JSON.stringify(userInfo);
        localStorage.setItem("userInfo", objToString);
        console.log(userInfo);
        dispatch({
          type: "LOGIN",
          payland: {
            token: res.data.token,
            userInfo: userInfo
          }
        });
        close();
      }

    }).catch((err) => console.log(err));
  }

  return (
    <div>
        <h3>
            Login
        </h3>
        <form onSubmit={send}>
            <div className='form-group'>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={changes}
                autoComplete='false'
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={changes}
                autoComplete='false'
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login;
