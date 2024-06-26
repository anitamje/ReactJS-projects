import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import './navbar.scss';
import Modal from './Modal/Modal';
import Login from './Login';
import { Context } from '../Context/Products';
import SignUp from './SignUp';
import { lang } from '../assets/lang';
import LangSwitch from './LangSwitch';

const Navbar = () => {
  const [state, dispatch] = useContext(Context);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const [toggleLogin, setToggleLogin] = useState(false);
  const toggleMenu = () => {
    console.log("toggleBtn", toggleBtn);
    setToggleBtn(!toggleBtn);
    document.body.classList.toggle("scroll-menu-mobile");
    if (toggleBtn) {
      window.scrollTo(0, 0);
    }
  };

  const logOut = () => {
    localStorage.setItem("token", null);
    localStorage.setItem("userInfo", null);
    dispatch({
      type: "LOGIN",
      payland: {
        token: null,
        userInfo: null
      }
    })
  }

  const login = () => {
    setToggleLogin(true);
  }

  console.log("state", state);

  return (
    <div className="nav">
        <img src={logo} alt='' />
        <button className="btn-media" onClick={() => toggleMenu()}>
          <svg fill="#000000" width="30px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z" fillRule="evenodd"/>
          </svg>
        </button>
        <div
          className={`menu ${toggleBtn ? "mobile-menu" : ""}`}
          onClick={() => toggleMenu()}
        >
            {lang[state.language].menu.map((el) => (
              <Link to={el.slug}>{el.name}</Link>
            ))}
            {
              state.userInfo ? (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                  {state.userInfo.name}
                  <button onClick={() => logOut()}>Log out</button>
                </>
              ) : (
                <button onClick={() => login()}>Login</button>
              )
            }
            <LangSwitch />
        </div>
        <Modal isOpen={toggleLogin} close={() => setToggleLogin(false)}>
          {loginForm && <Login close={() => setToggleLogin(false)} />}
          {!loginForm && <SignUp backToLogin={() => setLoginForm(true)} />}
          <br />
          <br />
          <button type="button" onClick={() => setLoginForm(!loginForm)}>
            {loginForm ? "Sign up" : "Login"}
          </button>
        </Modal>
    </div>
  )
}

export default Navbar;
