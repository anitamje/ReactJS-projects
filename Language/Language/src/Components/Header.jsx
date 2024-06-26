import React from 'react';

const Header = (props) => {
  const { title, imgUrl } = props;
  // props.title

  return (
    <div
      className="header"
      style={imgUrl ? { backgroundImage: `url(${imgUrl})`} : {}}
    >
      <h1>{title}</h1>
    </div>
  )
}

export default Header;
