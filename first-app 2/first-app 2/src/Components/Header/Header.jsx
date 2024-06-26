import React from 'react';
import "./header.scss";

const Header = (props) => {
  console.log(props);

  return (
    <div className="header">
        <div className="header-content">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            {props.btn && <button>{props.btn}</button>}
        </div>
    </div>
  )
}

export default Header;